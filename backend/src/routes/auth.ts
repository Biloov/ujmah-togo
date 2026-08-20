import { Router, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { RoleName } from '@prisma/client';
import prisma from '../prisma.js';
import { requireAuth, requireRole, AuthenticatedRequest } from '../middleware/auth.js';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

// Login Endpoint
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '8h' }
    );

    // Write Activity Log
    await prisma.activityLog.create({
      data: {
        action: 'CONNEXION',
        object: `Utilisateur ${user.email}`,
        userId: user.id
      }
    });

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Login server error' });
  }
});

// Profile Endpoint
router.get('/profile', requireAuth, async (req: AuthenticatedRequest, res) => {
  if (!req.user) return res.status(401).json({ error: 'Unauthenticated' });

  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: { id: true, email: true, firstName: true, lastName: true, role: true }
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: 'Profile server error' });
  }
});

// Add New User (Access restricted to SUPER_ADMIN)
router.post('/users', requireAuth, requireRole([RoleName.SUPER_ADMIN]), async (req: AuthenticatedRequest, res) => {
  const { email, password, firstName, lastName, role } = req.body;

  if (!email || !password || !firstName || !lastName || !role) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role: role as RoleName
      }
    });

    await prisma.activityLog.create({
      data: {
        action: 'UTILISATEUR_CREE',
        object: `Utilisateur ${email} avec le rôle ${role}`,
        userId: req.user?.id
      }
    });

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        role: newUser.role
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'User creation server error' });
  }
});

// GET: Retrieve all users (Access restricted to SUPER_ADMIN & ADMIN)
router.get('/users', requireAuth, requireRole([RoleName.SUPER_ADMIN, RoleName.ADMIN]), async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        createdAt: true
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ users });
  } catch (err) {
    res.status(500).json({ error: 'Get users list server error' });
  }
});

// DELETE: Delete a user account (Access restricted to SUPER_ADMIN)
router.delete('/users/:id', requireAuth, requireRole([RoleName.SUPER_ADMIN]), async (req: AuthenticatedRequest, res) => {
  try {
    const userToDelete = await prisma.user.findUnique({ where: { id: req.params.id } });
    if (!userToDelete) return res.status(404).json({ error: 'User not found' });

    // Prevent Super Admin from deleting themselves
    if (userToDelete.id === req.user?.id) {
      return res.status(400).json({ error: 'You cannot delete your own account' });
    }

    await prisma.user.delete({ where: { id: req.params.id } });

    await prisma.activityLog.create({
      data: {
        action: 'UTILISATEUR_SUPPRIME',
        object: `Utilisateur ${userToDelete.email}`,
        userId: req.user?.id
      }
    });

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Delete user server error' });
  }
});

export default router;

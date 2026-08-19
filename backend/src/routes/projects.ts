import { Router } from 'express';
import { RoleName } from '@prisma/client';
import prisma from '../prisma.js';
import { requireAuth, requireRole, AuthenticatedRequest } from '../middleware/auth.js';

const router = Router();
const MANAGER_ROLES = [RoleName.SUPER_ADMIN, RoleName.ADMIN, RoleName.PROJECT_MANAGER];

// 1. PUBLIC: Get all active projects (excluding Drafts)
router.get('/', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      where: {
        status: { not: 'Brouillon' }
      },
      include: {
        category: { select: { name: true, slug: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ projects });
  } catch (err) {
    res.status(500).json({ error: 'Get projects server error' });
  }
});

// 2. PUBLIC: Get project details by slug
router.get('/:slug', async (req, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: { slug: req.params.slug },
      include: {
        category: { select: { name: true, slug: true } }
      }
    });

    if (!project || (project.status === 'Brouillon' && !req.headers.authorization)) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({ project });
  } catch (err) {
    res.status(500).json({ error: 'Get project details server error' });
  }
});

// 3. STAFF: Create new project campaign
router.post('/', requireAuth, requireRole(MANAGER_ROLES), async (req: AuthenticatedRequest, res) => {
  const { name, slug, description, status, startDate, endDate, beneficiaries, budget, mainImage, categoryId } = req.body;

  if (!name || !slug || !description || !mainImage || !categoryId) {
    return res.status(400).json({ error: 'All primary fields are required' });
  }

  try {
    const existing = await prisma.project.findUnique({ where: { slug } });
    if (existing) {
      return res.status(400).json({ error: 'A project with this slug already exists' });
    }

    const project = await prisma.project.create({
      data: {
        name,
        slug,
        description,
        status: status || 'Planifié',
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        beneficiaries,
        budget: budget ? parseFloat(budget) : null,
        mainImage,
        categoryId
      }
    });

    await prisma.activityLog.create({
      data: {
        action: 'PROJET_CREE',
        object: `Projet "${name}" (Slug: ${slug})`,
        userId: req.user!.id
      }
    });

    res.status(201).json({ message: 'Project created successfully', project });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Create project server error' });
  }
});

// 4. STAFF: Update project details
router.put('/:id', requireAuth, requireRole(MANAGER_ROLES), async (req: AuthenticatedRequest, res) => {
  try {
    const project = await prisma.project.findUnique({ where: { id: req.params.id } });
    if (!project) return res.status(404).json({ error: 'Project not found' });

    const updated = await prisma.project.update({
      where: { id: req.params.id },
      data: req.body
    });

    await prisma.activityLog.create({
      data: {
        action: 'PROJET_MODIFIE',
        object: `Projet ID ${req.params.id} ("${updated.name}")`,
        userId: req.user!.id
      }
    });

    res.json({ message: 'Project updated successfully', project: updated });
  } catch (err) {
    res.status(500).json({ error: 'Update project server error' });
  }
});

export default router;

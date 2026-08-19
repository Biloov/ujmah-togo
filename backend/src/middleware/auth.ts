import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { RoleName } from '@prisma/client';
import prisma from '../prisma.js';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: RoleName;
  };
}

export function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  let token = '';

  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }

  // Also support reading from custom secure cookies if present
  if (!token && req.headers.cookie) {
    const cookies = Object.fromEntries(
      req.headers.cookie.split(';').map(c => c.trim().split('='))
    );
    token = cookies['ujmah_session'] || '';
  }

  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  try {
    const secret = process.env.JWT_SECRET || 'fallback_secret';
    const decoded = jwt.verify(token, secret) as { id: string; email: string; role: RoleName };
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired session token' });
  }
}

export function requireRole(allowedRoles: RoleName[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Unauthorized: insufficient permissions' });
    }

    next();
  };
}

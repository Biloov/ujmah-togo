import { Router } from 'express';
import { RoleName } from '@prisma/client';
import prisma from '../prisma.js';
import { requireAuth, requireRole, AuthenticatedRequest } from '../middleware/auth.js';

const router = Router();
const EDITOR_ROLES = [RoleName.SUPER_ADMIN, RoleName.ADMIN, RoleName.COMMUNICATION];

// PUBLIC: Get all impact metrics
router.get('/', async (req, res) => {
  try {
    const metrics = await prisma.impactMetric.findMany({
      orderBy: { label: 'asc' }
    });
    res.json({ metrics });
  } catch (err) {
    res.status(500).json({ error: 'Get impact metrics server error' });
  }
});

// STAFF: Update impact metric
router.put('/:id', requireAuth, requireRole(EDITOR_ROLES), async (req: AuthenticatedRequest, res) => {
  const { value, label, suffix } = req.body;

  if (value === undefined) {
    return res.status(400).json({ error: 'Value is required' });
  }

  try {
    const updated = await prisma.impactMetric.update({
      where: { id: req.params.id },
      data: {
        value: parseInt(value),
        label,
        suffix
      }
    });

    await prisma.activityLog.create({
      data: {
        action: 'IMPACT_MODIFIE',
        object: `Impact "${updated.label}" mis à jour à ${value}`,
        userId: req.user!.id
      }
    });

    res.json({ message: 'Metric updated successfully', metric: updated });
  } catch (err) {
    res.status(500).json({ error: 'Update metric server error' });
  }
});

export default router;

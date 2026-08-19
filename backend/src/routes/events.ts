import { Router } from 'express';
import { RoleName } from '@prisma/client';
import prisma from '../prisma.js';
import { requireAuth, requireRole, AuthenticatedRequest } from '../middleware/auth.js';

const router = Router();
const EVENT_ROLES = [RoleName.SUPER_ADMIN, RoleName.ADMIN, RoleName.EVENTS_MANAGER];

// 1. PUBLIC: Get all planned/upcoming events
router.get('/', async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      where: {
        status: { not: 'Brouillon' }
      },
      orderBy: { startDate: 'asc' }
    });
    res.json({ events });
  } catch (err) {
    res.status(500).json({ error: 'Get events server error' });
  }
});

// 2. PUBLIC: Register to an event
router.post('/:id/register', async (req, res) => {
  const { firstName, lastName, phone, email } = req.body;

  if (!firstName || !lastName || !phone || !email) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const event = await prisma.event.findUnique({ where: { id: req.params.id } });
    if (!event) return res.status(404).json({ error: 'Event not found' });
    if (!event.registrationEnabled) return res.status(400).json({ error: 'Registrations are closed for this event' });

    const registration = await prisma.eventRegistration.create({
      data: {
        firstName,
        lastName,
        phone,
        email,
        eventId: req.params.id
      }
    });

    res.status(201).json({ message: 'Registration successful', registration });
  } catch (err) {
    res.status(500).json({ error: 'Registration server error' });
  }
});

// 3. STAFF: Create new event
router.post('/', requireAuth, requireRole(EVENT_ROLES), async (req: AuthenticatedRequest, res) => {
  const { title, description, mainImage, location, startDate, endDate, organizer, registrationEnabled, externalRegUrl } = req.body;

  if (!title || !description || !mainImage || !location || !startDate) {
    return res.status(400).json({ error: 'All primary fields are required' });
  }

  try {
    const event = await prisma.event.create({
      data: {
        title,
        description,
        mainImage,
        location,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        organizer,
        registrationEnabled: registrationEnabled || false,
        externalRegUrl
      }
    });

    await prisma.activityLog.create({
      data: {
        action: 'EVENEMENT_CREE',
        object: `Événement "${title}" (Date: ${startDate})`,
        userId: req.user!.id
      }
    });

    res.status(201).json({ message: 'Event created successfully', event });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Create event server error' });
  }
});

// 4. STAFF: View all registrations for an event
router.get('/:id/registrations', requireAuth, requireRole(EVENT_ROLES), async (req, res) => {
  try {
    const registrations = await prisma.eventRegistration.findMany({
      where: { eventId: req.params.id },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ registrations });
  } catch (err) {
    res.status(500).json({ error: 'Get event registrations server error' });
  }
});

export default router;

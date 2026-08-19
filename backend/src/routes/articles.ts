import { Router } from 'express';
import { RoleName } from '@prisma/client';
import prisma from '../prisma.js';
import { requireAuth, requireRole, AuthenticatedRequest } from '../middleware/auth.js';

const router = Router();
const EDITOR_ROLES = [RoleName.SUPER_ADMIN, RoleName.ADMIN, RoleName.COMMUNICATION, RoleName.EDITOR];

// 1. PUBLIC: Get all published articles
router.get('/', async (req, res) => {
  try {
    const articles = await prisma.article.findMany({
      where: { status: 'Publié' },
      include: {
        category: { select: { name: true, slug: true } },
        author: { select: { firstName: true, lastName: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ articles });
  } catch (err) {
    res.status(500).json({ error: 'Get articles server error' });
  }
});

// 2. PUBLIC: Get article by slug
router.get('/:slug', async (req, res) => {
  try {
    const article = await prisma.article.findUnique({
      where: { slug: req.params.slug },
      include: {
        category: { select: { name: true, slug: true } },
        author: { select: { firstName: true, lastName: true } }
      }
    });

    if (!article || (article.status !== 'Publié' && !req.headers.authorization)) {
      return res.status(404).json({ error: 'Article not found' });
    }

    res.json({ article });
  } catch (err) {
    res.status(500).json({ error: 'Get article details server error' });
  }
});

// 3. STAFF: Create new article
router.post('/', requireAuth, requireRole(EDITOR_ROLES), async (req: AuthenticatedRequest, res) => {
  const { title, slug, summary, content, mainImage, categoryId, status, seoTitle, seoDescription } = req.body;

  if (!title || !slug || !summary || !content || !mainImage || !categoryId) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existing = await prisma.article.findUnique({ where: { slug } });
    if (existing) {
      return res.status(400).json({ error: 'An article with this slug already exists' });
    }

    const article = await prisma.article.create({
      data: {
        title,
        slug,
        summary,
        content,
        mainImage,
        categoryId,
        status: status || 'Brouillon',
        authorId: req.user!.id,
        seoTitle,
        seoDescription
      }
    });

    await prisma.activityLog.create({
      data: {
        action: 'ARTICLE_CREE',
        object: `Article "${title}" (Slug: ${slug})`,
        userId: req.user!.id
      }
    });

    res.status(201).json({ message: 'Article created successfully', article });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Create article server error' });
  }
});

// 4. STAFF: Update article
router.put('/:id', requireAuth, requireRole(EDITOR_ROLES), async (req: AuthenticatedRequest, res) => {
  try {
    const article = await prisma.article.findUnique({ where: { id: req.params.id } });
    if (!article) return res.status(404).json({ error: 'Article not found' });

    const updated = await prisma.article.update({
      where: { id: req.params.id },
      data: req.body
    });

    await prisma.activityLog.create({
      data: {
        action: 'ARTICLE_MODIFIE',
        object: `Article ID ${req.params.id} ("${updated.title}")`,
        userId: req.user!.id
      }
    });

    res.json({ message: 'Article updated successfully', article: updated });
  } catch (err) {
    res.status(500).json({ error: 'Update article server error' });
  }
});

// 5. STAFF: Delete article
router.delete('/:id', requireAuth, requireRole([RoleName.SUPER_ADMIN, RoleName.ADMIN]), async (req: AuthenticatedRequest, res) => {
  try {
    const article = await prisma.article.findUnique({ where: { id: req.params.id } });
    if (!article) return res.status(404).json({ error: 'Article not found' });

    await prisma.article.delete({ where: { id: req.params.id } });

    await prisma.activityLog.create({
      data: {
        action: 'ARTICLE_SUPPRIME',
        object: `Article ID ${req.params.id} ("${article.title}")`,
        userId: req.user!.id
      }
    });

    res.json({ message: 'Article deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Delete article server error' });
  }
});

export default router;

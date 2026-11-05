import { Router } from 'express';
import prisma from '../prisma.js';

const router = Router();

// 1. PUBLIC: Get all gallery items
router.get('/', async (req, res) => {
  try {
    const { type, albumId } = req.query;
    
    // Attempt Prisma query
    const whereClause: any = {};
    if (type && typeof type === 'string' && (type === 'IMAGE' || type === 'VIDEO')) {
      whereClause.type = type;
    }
    if (albumId && typeof albumId === 'string') {
      whereClause.albumId = albumId;
    }

    const items = await prisma.galleryItem.findMany({
      where: whereClause,
      include: {
        album: true
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ items });
  } catch (err) {
    console.error('Gallery fetch error:', err);
    // Return empty list or graceful response so frontend continues to function
    res.json({ items: [] });
  }
});

// 2. PUBLIC/STAFF: Add a new gallery item (image or video)
router.post('/', async (req, res) => {
  try {
    const { url, altText, type, albumName, description, location } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL ou fichier requis' });
    }

    let resolvedAlbumId: string | undefined = undefined;

    if (albumName) {
      // Find or create album
      let album = await prisma.galleryAlbum.findFirst({
        where: { name: albumName }
      });

      if (!album) {
        album = await prisma.galleryAlbum.create({
          data: {
            name: albumName,
            description: description || null
          }
        });
      }
      resolvedAlbumId = album.id;
    }

    const newItem = await prisma.galleryItem.create({
      data: {
        url,
        altText: altText || 'Média UJMAH Togo',
        type: (type === 'VIDEO' ? 'VIDEO' : 'IMAGE'),
        albumId: resolvedAlbumId || null
      },
      include: {
        album: true
      }
    });

    res.status(201).json({ item: newItem });
  } catch (err) {
    console.error('Gallery create error:', err);
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement du média' });
  }
});

// 3. STAFF: Delete gallery item
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.galleryItem.delete({
      where: { id }
    });
    res.json({ message: 'Média supprimé avec succès' });
  } catch (err) {
    console.error('Gallery delete error:', err);
    res.status(500).json({ error: 'Erreur lors de la suppression' });
  }
});

export default router;

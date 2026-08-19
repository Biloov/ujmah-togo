import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import authRouter from './routes/auth.js';
import articlesRouter from './routes/articles.js';
import projectsRouter from './routes/projects.js';
import eventsRouter from './routes/events.js';
import donationsRouter from './routes/donations.js';
import impactRouter from './routes/impact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Routes Mounts
app.use('/api/auth', authRouter);
app.use('/api/articles', articlesRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/events', eventsRouter);
app.use('/api/donations', donationsRouter);
app.use('/api/impact', impactRouter);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`[server]: UJMAH API listening on port ${PORT}`);
});

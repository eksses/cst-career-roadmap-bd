import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { apiRouter } from './routes/api.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 5657;

// Middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'cst-career-roadmap-api',
  });
});

// API Routes
app.use('/api', apiRouter);

// Serve static frontend files if built
const clientDistPath = path.resolve(__dirname, '../dist/client');
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  
  // Single-page application fallback for client routing
  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
      return res.sendFile(path.join(clientDistPath, 'index.html'));
    }
    next();
  });
}

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`CST Career Roadmap Backend running on http://0.0.0.0:${PORT}`);
});

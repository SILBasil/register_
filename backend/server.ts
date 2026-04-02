import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testConnection } from './db';
import { initializeDatabase } from './schema';
import { seedMockData } from './mockData';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// API routes
app.use('/api', apiRoutes);

// Initialize on startup
async function startup() {
  try {
    console.log('🚀 Starting server...');
    
    // Test database connection
    const connected = await testConnection();
    if (!connected) {
      throw new Error('Cannot connect to TiDB');
    }

    // Initialize database schema
    await initializeDatabase();

    // Seed mock data
    await seedMockData();

    // Start server
    app.listen(PORT, () => {
      console.log(`✅ Server running on http://localhost:${PORT}`);
      console.log(`📊 API available at http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('❌ Startup error:', error);
    process.exit(1);
  }
}

startup();

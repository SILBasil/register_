import { prisma } from './db';
import { seedMockData } from './mockData';

async function run() {
  try {
    console.log('⚠️ Clearing existing applications...');
    await prisma.application.deleteMany({});

    console.log('🌱 Running seedMockData()');
    await seedMockData();

    const count = await prisma.application.count();
    console.log('✅ Application count after reset seed:', count);
    process.exit(0);
  } catch (error) {
    console.error('❌ Reset/seed failed:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

run();
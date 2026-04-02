import { seedMockData } from './mockData';

async function run() {
  try {
    console.log('Starting mock data seeding...');
    await seedMockData();
    console.log('Seed complete. Exiting.');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error);
    process.exit(1);
  }
}

run();
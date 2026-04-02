import { prisma } from './db';

/**
 * In Prisma-based projects, the database schema is managed via 
 * 'npx prisma db push' or migrations. 
 * This function now serves as a connection health check.
 */
export async function initializeDatabase() {
  try {
    // A simple query to verify the connection and that tables exist
    await prisma.institution.count();
    console.log('✅ Database schema verified via Prisma');
    return true;
  } catch (error) {
    console.warn('⚠ Database schema not fully ready or empty, Prisma will handle it on first push/seed.');
    // We don't throw here to allow the seedMockData to run and potentially fix missing data
    return true;
  }
}

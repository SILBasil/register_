import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

// Create a single instance of PrismaClient to be reused across the application
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

export async function testConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Prisma connected to TiDB (MySQL) successfully!');
    return true;
  } catch (error) {
    console.error('❌ Prisma TiDB connection failed:', error);
    return false;
  }
}

// Keep the query wrapper temporarily if needed for legacy code, 
// but encourage using the prisma object directly.
export async function query(sql: string, params?: any[]) {
  return prisma.$queryRawUnsafe(sql, ...(params || []));
}

export default prisma;
export { prisma };

import { prisma } from './db';

async function main() {
  const count = await prisma.application.count();
  console.log('Applications count:', count);
  const sample = await prisma.application.findMany({ take: 3, orderBy: { id: 'desc' } });
  console.log('Sample IDs:', sample.map(s => ({id:s.id, idNumber:s.idNumber, firstName:s.firstName, country:s.address}))); // country from address
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
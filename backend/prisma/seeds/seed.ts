import { PrismaClient } from '@prisma/client';
import { transistorColorCodes } from './seedData';
const prisma = new PrismaClient();

async function main() {
  await prisma.resistorColorCode.createMany({ data: transistorColorCodes });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });

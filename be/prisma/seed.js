import prisma from './prisma.js';
import { seedRatings } from './seeders/ratingSeeder.js';
import { seedContentClassifications } from './seeders/contentSeeder.js';
import { seedGames } from './seeders/gameSeeder.js';
import { seedBlogs } from './seeders/blogSeeder.js';

async function main() {
  console.log('Memulai proses Seeding Database...\n');

  await seedRatings(prisma);
  await seedContentClassifications(prisma);
  await seedGames(prisma);
  await seedBlogs(prisma);

  console.log('\n Semua Data Seeding Berhasil Dimasukkan!');
}

main()
  .catch((e) => {
    console.error('Gagal melakukan seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
});

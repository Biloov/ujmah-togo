import { PrismaClient, RoleName } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding UJMAH Togo database...');

  // 1. Create default SUPER_ADMIN user
  const adminEmail = 'admin@ujmah-togo.org';
  const existingUser = await prisma.user.findUnique({ where: { email: adminEmail } });
  
  if (!existingUser) {
    // Pre-hashed password for "UjmahTogo2026!"
    const hashedPassword = '$2b$12$clyB8HktxA5cq4zyJE8ED.n.Jziuh3kw.VIO1osM4NLWSiNtrM9ui';
    const admin = await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        firstName: 'Admin',
        lastName: 'UJMAH',
        role: RoleName.SUPER_ADMIN,
        twoFactorEnabled: false
      }
    });
    console.log(`Created default SUPER_ADMIN user: ${admin.email} (Password: UjmahTogo2026!)`);
  } else {
    console.log('SUPER_ADMIN user already exists.');
  }

  // 2. Create Article Categories
  await prisma.articleCategory.upsert({
    where: { slug: 'education' },
    update: {},
    create: { name: 'Éducation', slug: 'education' }
  });

  await prisma.articleCategory.upsert({
    where: { slug: 'humanitaire' },
    update: {},
    create: { name: 'Humanitaire & Urgence', slug: 'humanitaire' }
  });

  await prisma.articleCategory.upsert({
    where: { slug: 'formation' },
    update: {},
    create: { name: 'Formation & Autonomie', slug: 'formation' }
  });

  console.log('Article categories upserted.');

  // 3. Create Project Categories
  await prisma.projectCategory.upsert({
    where: { slug: 'soutien-social' },
    update: {},
    create: { name: 'Soutien Social', slug: 'soutien-social' }
  });

  await prisma.projectCategory.upsert({
    where: { slug: 'infrastructures' },
    update: {},
    create: { name: 'Infrastructures & Puits', slug: 'infrastructures' }
  });

  console.log('Project categories upserted.');

  // 4. Create Initial Impact Metrics (V1 real statistics)
  const metrics = [
    { label: 'Projets réalisés', value: 12, suffix: '+', icon: 'emoji_events' },
    { label: 'Bénéficiaires directs', value: 2500, suffix: '+', icon: 'group' },
    { label: 'Bénévoles actifs', value: 150, suffix: '', icon: 'handshake' }
  ];

  for (const metric of metrics) {
    await prisma.impactMetric.upsert({
      where: { id: `seed-metric-${metric.label.toLowerCase().replace(/ /g, '-')}` },
      update: {
        value: metric.value,
        suffix: metric.suffix,
        icon: metric.icon
      },
      create: {
        id: `seed-metric-${metric.label.toLowerCase().replace(/ /g, '-')}`,
        label: metric.label,
        value: metric.value,
        suffix: metric.suffix,
        icon: metric.icon,
        year: 2024
      }
    });
  }

  console.log('Impact metrics upserted.');
  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

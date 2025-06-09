import { prisma } from "@/lib/prisma"


async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'eric@example.com' },
    update: {},
    create: {
      name: 'Eric Ferreyra',
      email: 'eric@example.com',
    },
  })

  console.log('Usuario creado:', user)
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

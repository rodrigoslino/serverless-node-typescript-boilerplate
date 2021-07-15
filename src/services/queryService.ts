import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

  await prisma.$connect()
	//##### Queries go here #####

	//#Sample query:
	//const allPersons = await prisma.person.findMany()
	//console.log(allUsers)

	//#Sample Insert:
	//await prisma.person.create({
	//  data: {
	//    firstName: 'Lino',
	//    lastName: 'Piroquio',
	//  }
	//})
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
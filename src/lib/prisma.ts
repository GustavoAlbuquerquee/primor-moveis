import { PrismaClient } from "@prisma/client";

// Esta é uma técnica para evitar a criação de múltiplas instâncias do PrismaClient
// em ambiente de desenvolvimento, o que pode esgotar as conexões com o banco de dados.
const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

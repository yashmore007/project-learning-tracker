import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const entries = await prisma.entry.findMany();
  return Response.json(entries);
}

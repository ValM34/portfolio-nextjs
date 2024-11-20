"use server";
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function createTechnology(data: Pick<Technology, 'name'>) {
  await prisma.technology.create({
    data: {
      name: data.name,
    },
  });
}

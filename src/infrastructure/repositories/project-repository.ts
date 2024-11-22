'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createProject(
  data: Omit<
    Project,
    | 'createdAt'
    | 'updatedAt'
    | 'id'
    | 'technologies'
    | 'projectPresentationPost'
    | 'description'
    | 'yearOfProduction'
  >
) {
  await prisma.project.create({
    data: {
      name: data.name,
      imageSrc: data.imageSrc,
      github: data.github,
      siteUrl: data.siteUrl,
      projectPresentationUrl: data.projectPresentationUrl,
      projectPresentationName: data.projectPresentationName,
    },
  });
}

export async function getProjects(): Promise<Project[]> {
  // @ts-expect-error @ts-ignore
  return await prisma.project.findMany({
    orderBy: {
      yearOfProduction: 'desc',
    },
    include: {
      technologies: {
        include: {
          technology: true,
        },
      },
    },
  });
}

export async function updateProject(
  data: Omit<
    Project,
    | 'createdAt'
    | 'updatedAt'
    | 'technologies'
    | 'projectPresentationPost'
    | 'description'
    | 'yearOfProduction'
  >
) {
  return await prisma.project.update({
    where: {
      id: data.id,
    },
    data: {
      name: data.name,
      imageSrc: data.imageSrc,
      github: data.github,
      siteUrl: data.siteUrl,
      projectPresentationUrl: data.projectPresentationUrl,
      projectPresentationName: data.projectPresentationName,
    },
  });
}

export async function deleteProject(id: number) {
  return await prisma.project.delete({
    where: {
      id: id,
    },
  });
}

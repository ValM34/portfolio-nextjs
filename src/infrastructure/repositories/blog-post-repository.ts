"use server";
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export async function createBlogPost(data: Pick<BlogPost, 'name' | 'post'>) {
  await prisma.blogPost.create({
    data: {
      name: data.name,
      post: data.post,
    },
  });
}

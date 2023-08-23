import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandker(async (event) => {
  let posts = await prisma.posts.findMany({
    orderBy: { id: "desc" },
    include: { likes: true },
  });
  return posts
});

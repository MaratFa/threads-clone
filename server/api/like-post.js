import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandker(async (event) => {
  const body = await readBody(event);

  const res = await prisma.likes.create({
    data: {
      userId: body.userId,
      postId: body.postId,
    },
  });

  return res;
});

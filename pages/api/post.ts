import prisma from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from "next";

export default async function Post (
      req: NextApiRequest,
      res: NextApiResponse
) {
   const data = JSON.parse(req.body)
   const result = await prisma.todo.create({
      data: {
         title: data.title,
         content: data.content
      },
   })
   res.json(result)
}

import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createTodo(
    req: NextApiRequest,
    res: NextApiResponse
) {
   const JSONdata = JSON.parse(req.body)
   const result = await prisma.post.create({
       data: {
           title: JSONdata.title,
           content: JSONdata.content,
           published: true,
       },
   })
   res.json(result)
}

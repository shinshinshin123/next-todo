import prisma from "@/lib/prisma";
import {  NextApiRequest, NextApiResponse } from "next";

export default async function deleteTodo (
    req: NextApiRequest,
    res: NextApiResponse
) {
   const data = JSON.parse(req.body)
   const result = await prisma.todo.delete({
       where: {
          id: Number(data.id)
       }
   })
   res.json(result)
}

import prisma from "@/lib/prisma";
import { NextApiRequest , NextApiResponse } from 'next';

export default async function editTodo(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const JSONdata = JSON.parse(req.body)
    const result = await prisma.todo.update({
        where: {
            id: Number(JSONdata.id)
        },
        data: {
            title: JSONdata.title,
            content: JSONdata.content
        },
    })
    res.json(result)
}

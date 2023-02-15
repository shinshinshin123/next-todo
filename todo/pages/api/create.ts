import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createTodo(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
    const { title, content } = req.body;

    const result = await prisma.post.create({
        data: {
            title: title,
            content: content,
            published: true,
        },
    });
    res.json(result);
    } catch(err) {
        res.json({error: err.message});
    }
}

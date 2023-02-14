import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createPost (
    req: NextApiRequest,
    res: NextApiResponse
) {
    const JSONdata = JSON.parse(req.body)
    const result = await prisma.post.create({
        data: {
            id: JSONdata.id,
            title: JSONdata.title,
            content: JSONdata.content
        },
    })
    res.json(result)
}

import prisma from "@/lib/prisma";
import Link from "next/link";

//後ほど型定義のファイルを分ける。
type Todo = {
    id: number,
    title: string,
    content: string
}

export default function Todo({todo}:{todo:Todo}) {
   return (
       <>
          <p>{todo.id}</p>
          <p>{todo.title}</p>
          <p>{todo.content}</p>
          <Link href='/todos'>戻る</Link>
       </>
   )
}

export async function getServerSideProps({params}:{params:{id:number}}) {
    const data = await prisma.todo.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    const todo = JSON.parse(JSON.stringify(data))
    return {
        props: {
            todo: todo
        }
    }
}

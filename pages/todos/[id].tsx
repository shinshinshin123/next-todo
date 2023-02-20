import prisma from "@/lib/prisma"

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
       </>
   )
}

export async function getServerSideProps({params}:{params:{id:number}}) {
    const todo = await prisma.todo.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return {
        props: {
            todo: todo
        }
    }
}

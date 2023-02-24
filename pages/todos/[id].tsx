import prisma from "@/lib/prisma";
import Link from "next/link";
import { useState } from 'react';
import Router from 'next/router';

//後ほど型定義のファイルを分ける。
type Todo = {
    id: number,
    title: string,
    content: string
}

export default function Todo({todo}:{todo:Todo}) {
   const [id, setId] = useState(`${todo.id}`)

   const deleteTodo = async (e: React.SyntheticEvent) => {
       e.preventDefault()
       try {
           const body = { id }
           await fetch('/api/delete', {
              method: 'POST',
              body: JSON.stringify(body)
        })
        await Router.push('/todos')
       } catch(error) {
          console.log(error)
       }
   }

   return (
       <>
          <p>{todo.id}</p>
          <p>{todo.title}</p>
          <p>{todo.content}</p>
          <Link href='/todos'>戻る</Link>
          <button onClick={deleteTodo}>削除</button>
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

import prisma from '@/lib/prisma';
import { useState } from 'react';
import Router from 'next/router';

//後ほど型定義のファイルを分ける。
type Todo = {
    id: number,
    title: string,
    content: string
}

export default function Edit({todo}:{todo:Todo}) {
    // todoの情報がバラバラになっているのでstateの管理を後ほどObjectとしてまとめる。
    const [id, setId] = useState(`${todo.id}`)
    const [title, setTitle] = useState(`${todo.title}`)
    const [content, setContent] = useState(`${todo.content}`)

    const updateTodo = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            const body = { id, title, content }
            await fetch('/api/edit', {
                method: 'POST',
                body: JSON.stringify(body)
            })
            await Router.push('/todos')
        } catch(error) {
            console.log(error)
        }

        return (
            <>
               <div>TODO編集ページ</div>
               <form>
                  <p>タイトル</p>
                      <input id='title' type='text' onChange={(e) => setTitle(e.target.value)} value={title}/>
                  <p>内容</p>
                      <textarea id='content' onChange={(e) => setContent(e.target.value)} value={content}/>
                  <p><button onClick={updateTodo}>編集</button></p>
               </form>
            </>
        )
    }
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

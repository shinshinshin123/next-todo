import prisma from "@/lib/prisma";
import Link from "next/link"

//後ほど型定義のファイルを分ける。
type Todo = {
    id: number,
    title: string,
    content: string
}

export default function List({todos}:{todos:Todo[]}) {
    return (
        <>
          <h1>Todo詳細</h1>
          <Link href="/todos/create">todoを作成</Link>
          <div>
            <ul>
              {
                todos.map((todo:Todo)=>(
                  <li key={todo.id}>
                    <Link href={`/todos/${todo.id}`}>
                        <p>{todo.id}</p>
                    </Link>
                    <h3>タイトル</h3>
                    <p>{todo.title}</p>
                    <h3>内容</h3>
                    <p>{todo.content}</p>
                  </li>
                ))
              }
            </ul>
          </div>
        </>
    )
}

export async function getServerSideProps() {
    const data = await prisma.todo.findMany()
    // dataをstringifyで文字列型のjsonに変換し、それをparseで解析し、オブジェクトに変換
    const todos = JSON.parse(JSON.stringify(data))
    return {
        props: {
            todos:todos,
        }
    }
}

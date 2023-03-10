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
          <h1>Todo一覧ページ</h1>
          <p><Link href='/'>戻る</Link></p>
          <Link href="/todos/create">todoを作成</Link>
          <div>
            <ul>
              {
                todos.map((todo:Todo)=>(
                  <li key={todo.id}>
                    <p>{todo.id}</p>
                    <h3>タイトル</h3>
                    <p>{todo.title}</p>
                    <h3>内容</h3>
                    <p>{todo.content}</p>
                    <p><Link href={`/todos/${todo.id}`}>詳細</Link></p>
                    <p><Link href={`/todos/edit/${todo.id}`}>編集</Link></p>
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
            todos:todos
        }
    }
}

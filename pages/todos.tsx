import prisma from "@/lib/prisma";

//後ほど型定義のファイルを分ける。
type todo = {
    id: number,
    title: string,
    content: string
}

export default function List({todos}:{todos:todo[]}) {
    return (
        <>
          <h1>Todo詳細</h1>
          <div>
            <ul>
              {
                todos.map((todo:todo)=>(
                  <li key={todo.id}>
                    <p>{todo.id}</p>
                    <p>{todo.title}</p>
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

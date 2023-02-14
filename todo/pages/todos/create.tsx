import Link from 'next/link';
import { useState } from 'react';

const initTodo = {
    id: undefined,
    title: undefined,
    content: undefined,
    deleted: undefined,
}

const Create = () => {
    //後で削除して作り直す(titleとcontentを別々にしないようにする)
    const [todo, setTodo] = useState(initTodo);

    const todoPost = async () => {
        try {
            const body = { todo }
            await fetch('/api/post', {
                method: 'POST',
                body: JSON.stringify(body)
            })
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h1>TODO 新規作成</h1>
            <div>
                <Link href="/todos">戻る</Link>
            </div>
            <button onClick={todoPost}>作成</button>
        </div>
    );
};

export default Create;

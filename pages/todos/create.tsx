import { useState } from "react";
import Router from "next/router";
import React from "react";
import Link from "next/link";

export default function Create() {
    // const [title, setTitle] = useState('')
    // const [content, setContent] = useState('')

    const [todo, setTodo] = useState({
        title: '',
        content: '',
    })

    const onChangeTodo =''

    const createTodo = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            const body = { todo }
            await fetch('/api/post', {
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
            <div>
                <h1>Todo作成ページ</h1>
                <Link href='/todos'>戻る</Link>
            </div>
            {/* 入力フォーム */}
            <form>
                <p>タイトル</p>
                    <input placeholder='タイトル' onChange={(e) => setTodo(e.target.value)} />
                <p>内容</p>
                    <textarea placeholder='内容' onChange={(e) => setTodo(e.target.value)} />
                <p><button onClick={createTodo}>作成</button></p>
            </form>
        </>
    )
}

import { useState } from "react";
import Router from "next/router";
import React from "react";

export default function Create() {
    //後ほどtitle,contentを一つにまとめる
    // const [ todo, setTodo ] = useState({
    //     title: "",
    //     content: ""
    // })
    // const onChangeTitle = (e: any) =>
    //     setTodo({...todo, title: e.target.value});
    // const onChangeContent = (e: any) =>
    //     setTodo({...todo, content: e.target.value});

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const createTodo = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            const body = { title, content }
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
            </div>
            {/* 入力フォーム */}
            <form>
                <p>タイトル</p>
                    <input placeholder='タイトル' onChange={(e) => setTitle(e.target.value)} />
                <p>内容</p>
                    <textarea placeholder='内容' onChange={(e) => setContent(e.target.value)} />
                <p><button onClick={createTodo}>作成</button></p>
            </form>
        </>
    )
}

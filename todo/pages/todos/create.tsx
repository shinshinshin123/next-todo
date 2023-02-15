import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import axios from "axios";

const Create: React.FC = () => {
    //　後で一つのTodoにする(仮)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const todoPost = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            const body = { title, content }
            await fetch('/api/create',{
                method: 'POST',
                body: JSON.stringify(body)
            })
            // Router.push('/todos')
        } catch(error) {
            console.log(error)
        }
        console.log({title, content})
    }

    return (
        <>
            <h1>TODO 新規作成</h1>
            <div>
                <Link href="/todos">戻る</Link>
            </div>
            <form>
                <p>タイトル</p>
                    <input
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                <p>内容</p>
                    <textarea
                        id='content'
                        onChange={(e) => setContent(e.target.value)}
                    />
                <button onClick={todoPost}>作成</button>
            </form>
        </>
    );
};

export default Create;

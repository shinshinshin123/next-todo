import { useState } from "react";
import Router from "next/router";

export default function Create() {
    //後ほどオブジェクトにして一つにする
    const [ title, setTitle ] = useState('テスト')
    const [ content, setContent] = useState('テストです。')

    const createTodo = async () => {
        try {
            const body = { title, content }
            await fetch('/api/post', {
                method: 'POST',
                body: JSON.stringify(body)
            })
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>
                <h1>Todo作成ページ</h1>
            </div>
            <button onClick={createTodo}>作成</button>

            {/* 入力フォーム */}
            {/* <form>
                <p>タイトル</p>
                    <input type='text' placeholder='タイトル' />
                <p>内容</p>
                    <textarea placeholder='内容'/>
                <p><button onClick={onClickAdd}>追加</button></p>
            </form> */}
        </>
    )
}

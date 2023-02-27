import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { ChakraProvider } from '@chakra-ui/react';

export default function Home() {
  const { data: session } = useSession()
  if(session) {
    return (
      <>
        <h1>Todoアプリ</h1>
        <Link href='/todos'>todo一覧</Link> <br />
        <button onClick={() => signOut()}>ログアウト</button>
      </>
    )
  }
  return (
    <>
      ログインできていません。<br />
      <button onClick={() => signIn()}>ログイン</button>
    </>
  )
}

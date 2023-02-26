import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: sesion } = useSession()
  // if(session) {
  //   return (
  //     <>
  //       ログイン {}
  //     </>
  //   )
  // }
  return (
    
    <>
      <h1>Todoアプリ</h1>
      <Link href='/todos'>todo一覧</Link>
    </>
  )
}

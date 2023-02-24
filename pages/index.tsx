import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Todoアプリ</h1>
      <Link href='/todos'>todo一覧</Link>
    </>
  )
}

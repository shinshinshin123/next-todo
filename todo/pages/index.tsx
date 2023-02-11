import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        登録済み <br />
        <button onClick={() => signOut()}>ログアウト</button>
      </>
    )
  }

  return (
    <>
      登録してないよー <br />
      <button onClick={() => signIn()}>登録</button>
    </>
  )
}

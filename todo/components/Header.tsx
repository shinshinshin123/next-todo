import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {
    const { data: session, status } = useSession();
    return (
        <>
           <div>
            <Link href="/">
                <span>TODOやで</span>
            </Link>
           </div>
           <div>
            <ul>
                <li>
                    <Link href="/todos">Todos</Link>
                </li>
                {/* statusがloadingではなく、認証情報が取得されていて認証されている場合 */}
                {status !== 'loading' && session && (
                    <>
                        <li>
                            <Link href="/mypage">
                                マイページ
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => signOut()}>
                                <a>ログアウト</a>
                            </button>
                        </li>
                    </>
                )}
                {/* statusがloadingではなく、認証情報の取得が完了しているが認証されていない場合 */}
                {status !== 'loading' && !session && (
                    <li>
                        <button onClick={() => signIn()}>
                            <a>ログイン</a>
                        </button>
                    </li>
                )}
            </ul>
           </div>
        </>
    );
};

export default Header;

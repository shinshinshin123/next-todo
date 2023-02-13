import React from 'react';
import Protect from './Protect';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

//ログイン済みのユーザーだけに表示するページ
const Routes = ['/mypage', '/todos/[id]'];

//childrenに型を付与
const Auth = ({ children }: { children: React.ReactNode }) => {
    const session = useSession();
    const router = useRouter();

    //認証情報取得中にコンポーネントを表示させない
    if (session.status === 'loading') return null;

    return (
        <>
            {Routes.includes(router.pathname) ? (
                <Protect>{children}</Protect>
            ) : (
                children
            )}
        </>
    );
};

export default Auth;

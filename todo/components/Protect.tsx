import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Protect = ({ children }: { children: React.ReactNode })=> {
    //routerのオブジェクト取得
    const router = useRouter();
    //statusにauthenticated・unauthenticated・loadingのどれかが含まれている
    const { status } = useSession();

    useEffect(() => {
        // unauthenticatedだった場合はsigninページにリダイレクト
        if (status === 'unauthenticated') {
            router.push('signin');
        }
        //ページが切り替わったときと認証情報が変更されたとき
    }, [router, status]);

    if (status === 'authenticated') return null;

    return <>{children}</>;
};

export default Protect;

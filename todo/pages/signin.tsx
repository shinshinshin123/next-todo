import { getProviders, signIn } from "next-auth/react";
import { InferGetServerSidePropsType } from "next";

const signin = ({
    providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div>
            {providers &&
                Object.values(providers).map((provider) => {
                    return (
                        <div key={provider.name}>
                            {/* このボタンを押してgoogle認証が行われる。 */}
                            <button
                                onClick={() =>
                                    signIn(provider.id, {
                                        callbackUrl: '/todos',
                                    })
                                }
                            >
                                Sign in with {provider.name}
                            </button>
                        </div>
                    );
                })}
        </div>
    );
};

export default signin;

//認証の方法を取得する(Google認証)
export const getServerSideProps = async () => {
    const providers = await getProviders();
    return {
        props: { providers },
    };
};

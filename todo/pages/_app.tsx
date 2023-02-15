// import { SessionProvider } from "next-auth/react";
import type { AppProps } from 'next/app';
// import Header from "../components/header";
// import Auth from "../components/Auth";

export default function App({ Component, pageProps} : AppProps) {
  return (
    // <SessionProvider session={pageProps.session}>
      <div>
        <Component {...pageProps} />
      </div>
    // </SessionProvider>
  )
}

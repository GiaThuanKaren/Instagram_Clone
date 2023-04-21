import "../styles/globals.css";
import * as React from "react"
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { SessionProvider, getSession, useSession } from "next-auth/react"
import { useRouter } from "next/router";
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  const router = useRouter();

  useEffect(() => {

    async function Fetch() {
      const session = await getSession();

      if (session?.user) {
        console.log(session, "USER AFTER LOGIN INNNNNNNNNN");
        const usersession: any = session?.user
        localStorage.setItem("user", JSON.stringify(usersession?.id))
      } else {
        router.push("/login")
      }

    }
    // if ( == "authenticated") {
    //   Fetch()

    // } else {
    //   router.push("/login")
    // }
    Fetch()
    setShowChild(true);
  }, []);
  console.log("Root Parent")

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else
    return (
      <>
        <SessionProvider session={session}>
          <NextNProgress />
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
            <ToastContainer />
          </ThemeProvider>
        </SessionProvider>
      </>
    );
}

function Auth({ children }: {
  children: any
}) {
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  React.useEffect(() => {
    if (status === "loading") return

  }, [isUser, status])

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}
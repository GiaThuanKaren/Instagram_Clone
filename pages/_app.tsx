import "../styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react"
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

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
          </ThemeProvider>
        </SessionProvider>
      </>
    );
}

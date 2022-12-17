import "../styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }: AppProps) {
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
        <NextNProgress />
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
}

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
// "overflow-x-hidden bg-[#FAFAFA] text-black  dark:text-white"
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

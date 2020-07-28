import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body background={"./assets/brand/bg1-small.jpeg"}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import { useEffect } from "react";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="h-96 min-h-0">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

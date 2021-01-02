import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import { useEffect } from "react";

export default function Layout({ preview, children }) {
  useEffect(() => {
    const testFetch = async () => {
      try {
        const res = await fetch(
          "https://creative.internal.choozle.com/v1/asset_name?external_provider_id=j2olukoi&external_provider=ttd"
        );
        const json = await res.json();
        console.log(res);
        console.log(`res.status::`, res.status);
        console.log(json);
      } catch (e) {
        console.error(e);
      }
    };

    testFetch();
  }, []);
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

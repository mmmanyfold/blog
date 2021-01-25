import Footer from "../components/footer";
import Meta from "../components/meta";
import Projects from "./projects";
import Head from "./head";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Head />
      <div className="h-96 min-h-0">
        <main>{children}</main>
      </div>
      <Projects />
      <Footer />
    </>
  );
}

import Footer from "../components/footer";
import Meta from "../components/meta";
import Projects from "./projects";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const isHomePage = () => router.pathname === "/";

  return (
    <>
      <Meta />
      <div className="h-96 min-h-0">
        <main>{children}</main>
      </div>
      {isHomePage() && <Projects />}
      <Footer />
    </>
  );
}

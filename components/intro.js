import Scrollchor from "react-scrollchor";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">Hello!</h2>
      <h2 className="text-center md:text-left text-lg mt-5 md:pl-2">
        Welcome to a blog and project showcase by{" "}
        <a
          href="https://www.linkedin.com/in/eemshi/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Michelle Lim
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/davidviramontes/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          David Viramontes
        </a>{" "}
        <br />{" "}
        <span style={{ background: "black", padding: "2px", color: "white" }}>
          {" "}
          <Scrollchor to="projects" animate={{ offset: 20, duration: 600 }} className="nav-link">
            Home
          </Scrollchor>
          <button id="mmmanyfolddotcom" className="duration-200 transition-colors">
            go checkout our past projects
          </button>{" "}
          <a href="projects">dmfalkdsfmkmfald</a>
        </span>
      </h2>
    </section>
  );
}

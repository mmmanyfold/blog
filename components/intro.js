export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex md:items-center md:justify-between mt-8 md:mt-16 md:mb-12">
      <h2 className="mb-8 text-6xl md:text-8xl font-bold tracking-tighter leading-tight">Hello!</h2>
      <h2 className="mb-8 text-1xl md:text-right tracking-tighter leading-tight">
        mmmanyfold is a creative dev studio by<br/>
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
      </h2>
    </section>
  );
}

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1
        style={{ transform: "rotate(45deg)" }}
        className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8"
      >
        +
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Blog and project showcase by{" "}
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
        <span style={{ background: "black", padding: '1px', color: 'white' }}>
	        $
        <a
	      id="mmmanyfolddotcom"
          href="http://www.mmmanyfold.com.s3-website-us-east-1.amazonaws.com/"
          className="duration-200 transition-colors"
        >
          {" "}go checkout our past projects
        </a>{" "}
	        <span className="blinking-cursor">|</span>
        </span>
      </h4>
    </section>
  );
}

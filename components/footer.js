import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div
          style={{ background: "bisque" }}
          className="border-gray-500 border px-12 py-28 flex flex-col lg:flex-row items-center"
        >
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <span className="underline">mmmanyfold</span>
          </h3>
          <p>
            A creative web development studio. We offer web development services for small to medium size businesses
            and non-profits.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="mailto:hello@mmmanyfold.com"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Get in touch!
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

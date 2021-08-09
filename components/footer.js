export default function Footer() {
  return (
    <footer className="bg-accent-1">
        <div className="border-gray-500 border-t mt-20 px-8 md:px-20 py-24 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            mmmanyfold
          </h3>
          <p className="text-center lg:text-left">
            A creative software studio. We offer development services for small to medium size businesses and
            non-profits.
          </p>
          <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <a
              href="mailto:hello@mmmanyfold.com"
              className="bg-black hover:bg-gray-100 hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mt-8 lg:m-0 no-underline"
            >
              Get in touch!
            </a>
          </div>
        </div>
    </footer>
  );
}

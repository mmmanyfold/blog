export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 style={{
	      'transform': 'rotate(45deg)',
      }}
	      className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
       +
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A blog by{' '}
	      <a
		      href="https://nextjs.org/"
		      className="underline hover:text-success duration-200 transition-colors"
	      >
		  Michelle Lim
	      </a>{' '}and{' '}

        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          David Viramontes
        </a>{' '}
        <br/>{' '}
        <b>></b> checkout out our work @{' '}
	      <a
		      href="http://mmmanyfold.com"
		      className="underline hover:text-success duration-200 transition-colors"
	      >mmmanyfold.com</a>
      </h4>
    </section>
  )
}

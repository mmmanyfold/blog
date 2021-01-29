import ReactMarkdown from 'react-markdown'

export default function Project({ entry }) {
  const {
    fields: { title, description, tech },
    asset: { file: { url } },
  } = entry;

  return (
    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
      <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={url} alt="" />
      <div className="" alt="" width="384" height="512">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">
              {title}
            </p>
            <ReactMarkdown>
              {description}
            </ReactMarkdown>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600">tech</div>
            <div className="text-gray-500">{tech}</div>
          </figcaption>
        </div>
      </div>
    </figure>
  );
}

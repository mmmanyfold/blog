import ReactMarkdown from "react-markdown";

export default function Project({ entry }) {
  console.log(entry);
  const {
    fields: { title, description, tech },
    asset: {
      file: { url },
      title: alt,
    },
  } = entry;

  return (
    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
      <img className="h-58 w-full object-cover md:w-48 md:h-48" src={url} alt={alt} />
      <div className="" alt="" width="384" height="512">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-semibold">{title}</p>
            <ReactMarkdown>{description}</ReactMarkdown>
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

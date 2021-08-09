import ReactMarkdown from "react-markdown";

export default function Project({ entry }) {
  const {
    fields: { title, description, tech },
    asset: {
      file: { url },
      title: alt,
    },
  } = entry;

  return (
    <figure className="md:flex md:bg-gray-100 rounded-xl my-8" style={{ border: "1px dotted blue" }}>
      <img className="h-58 w-full object-cover md:w-48" src={url} alt={alt} />
      <div className="" alt="" width="384" height="512">
        <div className="p-6 md:p-8 space-y-4">
          <blockquote>
            <p className="text-xl font-semibold mb-2">{title}</p>
            <ReactMarkdown>{description}</ReactMarkdown>
          </blockquote>
          {tech && (
            <figcaption className="font-medium">
              <div className="text-gray-600">Tech: {tech}</div>
            </figcaption>
          )}
        </div>
      </div>
    </figure>
  );
}

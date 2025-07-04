export function Card({ title, description, image, category, link }) {
  if (!title && !description && !image && !category && !link) {
    return (
      <>
        <div className="flex flex-col bg-white rounded-lg shadow p-4">
          <span className="text-neutral-500">No content available</span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col bg-white rounded-lg shadow p-4 w-full">
        {image ? (
          <img
            src={image}
            alt={title || "Card image"}
            className="self-stretch h-72 object-cover rounded-t-lg mb-4"
          />
        ) : null}
        <div className="flex flex-col gap-3 self-stretch px-4 py-6">
          {category && (
            <div className="flex items-center bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
              <span className="font-normal text-sm text-center text-green-700">
                {category}
              </span>
            </div>
          )}

          {title && (
            <span className="font-semibold text-lg text-neutral-900">
              {title}
            </span>
          )}

          {description && (
            <span className="font-medium text-base text-neutral-600">
              {description}
            </span>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-1.5 rounded px-0.5"
            >
              <span className="font-medium text-base text-indigo-700">
                Read more
              </span>
            </a>
          )}
        </div>
      </div>
    </>
  );
}

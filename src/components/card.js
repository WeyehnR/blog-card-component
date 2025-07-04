export function Card({ title, description, image, category, link }) {
  if (!title && !description && !image && !category && !link) {
    return (
      <div className="w-[340px] flex flex-col bg-white rounded-lg shadow p-4">
        <span className="text-neutral-500">No content available</span>
      </div>
    );
  }

  return (
    <div className="w-[340px] flex flex-col bg-white rounded-lg">
      {image && (
        <img
          src={image}
          alt={title || "Card image"}
          className="self-stretch h-72 object-cover rounded-t-lg"
        />
      )}
      <div className="flex flex-col gap-3 self-stretch px-4 py-6">
        <div className="flex flex-col gap-2 self-stretch">
          {category ? (
            <div className="flex items-center bg-green-50 px-2 py-0.5 rounded-full border border-solid border-green-200 self-start">
              <span className="font-normal text-sm text-center text-green-700">
                {category}
              </span>
            </div>
          ): null }
          {title  ?  (
            <span className="font-semibold text-lg text-neutral-900">
              {title}
            </span>
          ): null }
        </div>
        <div className="flex flex-col gap-6 self-stretch">
          {description  ?  (
            <span className="font-semibold text-base text-neutral-600">
              {description}
            </span>
          ): null }
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-end gap-1.5 rounded self-start"
            >
              <span className="font-medium text-base text-indigo-700">
                Read more
              </span>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                className="text-indigo-700"
              >
                <path
                  d="M13.9763 9.16658L9.50625 4.69657L10.6848 3.51807L17.1666 9.99992L10.6848 16.4817L9.50625 15.3032L13.9763 10.8332H3.83325V9.16658H13.9763Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          ): null }
        </div>
      </div>
    </div>
  );
}

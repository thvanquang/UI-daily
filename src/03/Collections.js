export default function Collections() {
  const TAGS = ["Profile", "New York", "Relaxing", "Person", "Fashion"];

  return (
    <div className="flex w-full items-center bg-gray-600">
      <div className="m-4 w-full rounded-md bg-[#EFF0F1] p-16">
        <h1 className="mb-12 font-merriweather text-3xl font-bold">
          Popular Collections
        </h1>

        <div className="mb-12 space-x-2">
          {TAGS.map((tag) => (
            <a
              key={tag}
              className="font-poppins mt-2 inline-block cursor-pointer rounded-md bg-white p-2 hover:shadow-md"
            >
              {tag}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl bg-gray-200 p-6">
            <div className="mb-6">
              <img
                src="https://img.pokemondb.net/artwork/avif/venusaur-mega.avif"
                alt=""
                className="aspect-video w-[410px] rounded-2xl"
              />
            </div>

            <div className="mb-6 grid grid-cols-3 gap-2">
              <img
                src="https://img.pokemondb.net/artwork/avif/bulbasaur.avif"
                alt=""
                className="aspect-square w-[120px] rounded-lg"
              />
              <img
                src="https://img.pokemondb.net/artwork/avif/ivysaur.avif"
                alt=""
                className="aspect-square w-[120px] rounded-lg"
              />
              <img
                src="https://img.pokemondb.net/artwork/avif/venusaur.avif"
                alt=""
                className="aspect-square w-[120px] rounded-lg"
              />
            </div>

            <div className="flex justify-between gap-1">
              <p className="font-poppins text-lg">People</p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <p>144</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gray-200 p-6">
            <div className="mb-6">
              <img
                src="https://img.pokemondb.net/artwork/avif/venusaur-mega.avif"
                alt=""
                className="aspect-video w-[410px] rounded-2xl"
              />
            </div>

            <div className="mb-6 grid grid-cols-3 gap-2">
              <img
                src="https://img.pokemondb.net/artwork/avif/bulbasaur.avif"
                alt=""
                className="aspect-square w-[120px] rounded-lg"
              />
              <img
                src="https://img.pokemondb.net/artwork/avif/ivysaur.avif"
                alt=""
                className="aspect-square w-[120px] rounded-lg"
              />
              <img
                src="https://img.pokemondb.net/artwork/avif/venusaur.avif"
                alt=""
                className="aspect-square w-[120px] rounded-lg"
              />
            </div>

            <div className="flex justify-between">
              <p className="font-poppins text-lg">Nature</p>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <p>7k</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gray-200 p-6">
            <div className="mb-6">
              <img
                src="https://img.pokemondb.net/artwork/avif/venusaur-mega.avif"
                alt=""
                className="aspect-video w-[410px] rounded-2xl"
              />
            </div>

            <div className="mb-6 grid grid-cols-3 gap-2">
              <img
                src="https://img.pokemondb.net/artwork/avif/bulbasaur.avif"
                alt=""
                className="aspect-square w-[120px] rounded-lg"
              />
              <img
                src="https://img.pokemondb.net/artwork/avif/ivysaur.avif"
                alt=""
                className="aspect-square w-[120px] rounded-lg"
              />
              <img
                src="https://img.pokemondb.net/artwork/avif/venusaur.avif"
                alt=""
                className="aspect-square w-[120px] rounded-lg"
              />
            </div>

            <div className="flex justify-between gap-1">
              <p className="font-poppins text-lg">History</p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <p>431</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

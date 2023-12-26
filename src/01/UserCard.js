export default function UserCard() {
  return (
    <div className=" flex h-screen w-full items-center justify-center bg-[#F3F8FE]">
      <div className="font-poppins flex w-[36rem] justify-start gap-4 rounded-[25px] bg-white p-[50px] text-[#1C2B62]">
        {" "}
        <img
          className="h-32 w-32 rounded-full border-[16px] border-sky-50"
          src="https://img.pokemondb.net/artwork/avif/azumarill.avif"
        />
        <div className="space-y-8">
          <div>
            <h1 className="font-merriweather text-2xl font-bold ">
              David Grand
            </h1>
            <p className="mt-1 text-sm">3D Artist</p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1 text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                data-slot="icon"
                className="inline-block h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <p>4.7 Rating</p>
            </div>

            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                data-slot="icon"
                className="inline-block h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <p>4,447 Reviews</p>
            </div>

            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                data-slot="icon"
                className="inline-block h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <p>478 Students</p>
            </div>
          </div>

          <p className="pb-4 text-lg font-medium">
            David ;rant as been makin video ames for a livin for more tan 14
            years as a Desiner, Producer, Creative Director, and Executive
            Producer, creatin ames for console, mobile, PC and Facebook.
          </p>
          <button className="rounded-md border-2 p-2">Show more</button>
        </div>
      </div>
    </div>
  );
}

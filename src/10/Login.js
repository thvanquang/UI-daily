export default function Login() {
  return (
    <div className="flex w-full items-center justify-center bg-[#F8EFF4] p-8">
      <div className="rounded-3xl bg-white px-16 py-20 font-poppins text-[#1C2852]">
        <div className="flex w-[400px] flex-col items-center justify-center">
          <img
            src="https://img.pokemondb.net/artwork/avif/scizor-mega.avif"
            alt="avatar"
            className="mb-6 aspect-square w-[151px] rounded-full border-[1rem] border-[#F8F4FA]"
          />

          <p className="mb-4 text-base">Tina V. invited you to join</p>
          <h1 className="mb-4 text-2xl font-bold">Channel name</h1>
          <span className="mb-9 bg-[#F8F4FA] p-4 text-lg">
            46K Active user - 78K Total users
          </span>

          <div className="mb-8 text-lg ">
            <label htmlFor="username" className="mb-2 block">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="How do you like people to call you?"
              className="w-full rounded-lg border-2 border-[#CEA4B2] px-8 py-6 placeholder:text-[#405170]"
            ></input>
          </div>

          <div className="mb-12 flex text-base">
            <input
              type="checkbox"
              id="accept"
              className="h-6 w-8 appearance-none rounded-lg border-[1px] border-[#CEA4B2] checked:bg-[#A40865]"
            ></input>
            <label htmlFor="accept" className="ml-2">
              I have read and agree to the{" "}
              <button className="text-[#A40865] underline">
                Terms of service
              </button>{" "}
              and{" "}
              <button className="text-[#A40865] underline">
                Privacy policy
              </button>
              .
            </label>
          </div>

          <button className="w-full rounded-lg bg-[#A40865] p-4 text-white">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

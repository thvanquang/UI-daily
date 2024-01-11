export default function SignIn() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-300 p-16">
      <div className="relative w-[600px] rounded-3xl bg-white p-10 font-poppins text-[#1d284e]">
        <h1 className="mb-2 font-merriweather text-3xl font-black">
          You are signed out
        </h1>
        <p className="mb-10 text-base font-medium">
          Sign in to get the best experience
        </p>

        <div className="mb-4 flex gap-2">
          <button className="flex items-center gap-2 rounded-xl bg-[#1d284e] px-4 py-5 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            Continue with email
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-[#227bef] px-4 py-5 text-white">
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd"
              />
            </svg>{" "}
            Continue with Facebook
          </button>
        </div>

        <p className="w-[70%] text-xs">
          By continueing, you agree to our{" "}
          <button className="underline">Terms of Service</button> and
          acknowledge you've read our{" "}
          <button className="underline">Privacy Policy</button>.
        </p>
      </div>
    </div>
  );
}

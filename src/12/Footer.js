export default function Footer() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-300 p-8">
      <div className="grid h-full w-[90%] grid-cols-3 grid-rows-2 font-poppins text-gray-50">
        <div className="rounded-tl-3xl bg-[#FECDA6] p-10 pl-16 pt-20 ">
          <div className="mb-4 flex gap-2 text-xl font-bold">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <h1>Search</h1>
          </div>

          <div className="space-y-2">
            <p className="p-2 hover:bg-[#feb399]">SEO/Google Ads</p>
            <p className="p-2 hover:bg-[#feb399]">Youtube Ads</p>
            <p className="p-2 hover:bg-[#feb399]">Google shopping</p>
          </div>
        </div>

        <div className="bg-[#FB7A6B] p-10 pt-20">
          <div className="mb-4 flex gap-2 text-xl font-bold">
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
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
            <h1>CRO</h1>
          </div>

          <div className="space-y-2">
            <p className="p-2 hover:bg-[#BF4F51]">Analysis</p>
            <p className="p-2 hover:bg-[#BF4F51]">Multi variant testing</p>
            <p className="p-2 hover:bg-[#BF4F51]">Landing pages</p>
          </div>
        </div>

        <div className="rounded-tr-3xl bg-[#F7BF68] p-10 pt-20 ">
          <div className="mb-4 flex gap-2 text-xl font-bold">
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
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            <h1>Social Media</h1>
          </div>

          <div className="space-y-2">
            <p className="p-2 hover:bg-[#ED9121]">Facebook</p>
            <p className="p-2 hover:bg-[#ED9121]">Linkedln</p>
            <p className="p-2 hover:bg-[#ED9121]">Tik Tok</p>
          </div>
        </div>

        <div className="rounded-bl-3xl bg-[#F2BE22] p-10 pb-24 pl-16 text-[#4C545C]">
          <div className="mb-4 flex gap-2 text-xl font-bold">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <h1>Other services</h1>
          </div>
          <div className="space-y-2">
            <p className="p-2 hover:bg-[#FCF75E]">Marketing</p>
            <p className="p-2 hover:bg-[#FCF75E]">Digital tools</p>
            <p className="p-2 hover:bg-[#FCF75E]">Banner advertising</p>
          </div>
        </div>

        <div className="col-span-2 col-start-2 rounded-br-3xl bg-[#4C545C] p-10 pb-24">
          <div className="w-[60%]">
            <div className="mb-4 flex gap-2 text-xl font-bold">
              <h1>Do you want to increase your sales and reach your goalds?</h1>
            </div>

            <p className="mb-4">
              Schedule a free, no-obligation conversation with one of our
              experts to quickly improve the results of your business.
            </p>

            <button className="bg-white p-4 font-semibold text-[#4C545C] hover:bg-gray-300 hover:text-black">
              Book a conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

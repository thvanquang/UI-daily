const COMPANIES = [
  {
    name: "Dropbox",
    logo: "https://vi.wizcase.com/wp-content/uploads/2021/05/Dropbox-logo.png",
    link: "dropbox.com",
    accounts: "24",
  },
  {
    name: "Pinterest",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbnDPXZVtrOeUJABtNCx9cy7KsA_JqZACKw&usqp=CAU",
    link: "pinterest.com",
    accounts: "3",
  },
  {
    name: "Microsoft",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWxaPWhl6fWUJI0z5PHifIiekmjt_GMvaFw&usqp=CAU",
    link: "microsoft.com",
    accounts: "19",
  },
];

export default function CompanyList() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-300 p-8">
      <div className="w-[70rem] rounded-[36px] bg-white p-16 font-poppins">
        <div className="mb-6 flex items-center justify-between">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded-lg border-2 border-gray-200 px-4 py-4 pl-10"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute left-2.5 top-4 h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-9 w-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>

            <button className="rounded-full bg-[#8899E7] p-4 text-3xl font-medium text-white">
              IG
            </button>
          </div>
        </div>

        <div>
          <h1 className="mb-4 font-merriweather text-2xl font-black">
            Accounts
          </h1>

          <div className="flex flex-col gap-4">
            {COMPANIES.map((company) => {
              return (
                <div className="flex justify-between rounded-3xl p-4 hover:bg-[#FAF2FE]">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-white p-4">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-10 w-10"
                      />
                    </div>

                    <div>
                      <h2 className="font-merriweather text-xl font-bold">
                        {company.name}
                      </h2>
                      <a href={"https://www." + company.link}>{company.link}</a>
                    </div>
                  </div>

                  <p className="self-center">{company.accounts} accounts</p>

                  <button className="rounded-full bg-white px-6 py-2">
                    ...
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

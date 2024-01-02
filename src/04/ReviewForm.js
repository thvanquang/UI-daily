import { useState } from "react";

export default function ReviewForm() {
  const [reviewScore, setReviewScore] = useState(0);

  return (
    <div className="flex w-full items-center justify-center bg-gray-300 p-4">
      <div className="relative w-[42rem] space-y-8 rounded-[2.5rem] bg-white p-16 font-poppins text-[#121633]">
        <button className="absolute right-8 top-10 rounded-full bg-gray-200 p-2 text-gray-400">
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h1 className="font-merriweather text-2xl font-bold">Overall rating</h1>

        <div className="">
          <div className="mb-1 space-x-2">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <span
                key={star}
                className={`inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-sm border-2 border-gray-200 ${
                  star <= reviewScore ? "text-yellow-500" : "text-gray-400"
                } `}
                onClick={() => setReviewScore(star)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${
                    star <= reviewScore ? "fill-yellow-300" : "text-gray-400"
                  }  h-10 w-10`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </span>
            ))}
          </div>
          <p className="text-sm">Click to rate</p>
        </div>

        <div className="mb-8">
          <label htmlFor="Review title" className="block text-sm">
            Review title
          </label>
          <input
            id="Review title"
            type="text"
            placeholder="Example: Easy to use"
            className="w-full border-2 p-4"
          />
        </div>

        <h2>Would you recommend this product to a friend?</h2>
        <div className="flex gap-8">
          <div>
            <input
              className="mr-2 scale-150 accent-[#121633]"
              type="radio"
              id="yes"
              name="product"
              value="yes"
            ></input>
            <label htmlFor="yes">Yes</label>
          </div>
          <div>
            <input
              className="mr-2 scale-150 accent-[#121633]"
              type="radio"
              id="no"
              name="product"
              value="no"
            ></input>
            <label htmlFor="no">No</label>
          </div>
        </div>

        <div className="">
          <h2>Product review</h2>
          <textarea
            type="text"
            placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is..."
            className="w-full border-2 p-4"
          ></textarea>
        </div>

        <div className="flex gap-x-2">
          <div className="grow">
            <label htmlFor="Nickname">Nickname</label>
            <input
              id="Nickname"
              type="text"
              placeholder="Example: bob27"
              className="w-full border-2 p-4"
            ></input>
          </div>
          <div className="grow">
            <label htmlFor="Email address">
              Email address (will not be published)
            </label>
            <input
              id="Email address"
              type="text"
              placeholder="Example: your@email.com"
              className="w-full border-2 p-4"
            ></input>
          </div>
        </div>

        <div className="">
          <input
            className="mr-2 scale-150 accent-[#121633]"
            type="checkbox"
            id="accept"
            name="accept"
            value="accept"
          ></input>
          <label htmlFor="accept">I accept the terms and conditions</label>
        </div>

        <div className="text-sm font-medium">
          <p>
            You will be able to receive emails in connection with this review
            (eg if others comment on your review). All emails contain the option
            to unsubscribe. We can use the text and star rating from your review
            in other marketing.
          </p>
        </div>

        <button className="rounded-md bg-[#121633] p-4 font-poppins text-white">
          Submit product review
        </button>
      </div>
    </div>
  );
}

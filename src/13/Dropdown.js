import { useState } from "react";
import SearchBar from "../utility/SearchBar";

const FEATURES = ["All Products", "Photos", "Graphics", "Templates", "Plugins"];

export default function Dropdown() {
  const [isDropped, setIsDropped] = useState(false);
  const [clickedFeature, setClickedFeature] = useState("All Products");

  const dropClickHandler = () => {
    setIsDropped(!isDropped);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-300 p-16">
      <div className="absolute z-0 aspect-square w-[35%] rounded-3xl bg-[#99A8FF]"></div>
      <div className="z-10 flex w-[50%] gap-4 rounded-2xl bg-white p-6 font-poppins">
        <div className="relative flex items-center">
          <button
            className={`group w-[10rem] rounded-xl px-4 py-2 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400`}
            onClick={dropClickHandler}
          >
            {clickedFeature}

            {!isDropped ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 inline-block h-4 w-4 rounded-full group-hover:bg-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 inline-block h-4 w-4 rounded-full group-hover:bg-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            )}
          </button>

          {isDropped && (
            <div className="absolute top-[50px] flex w-[10rem] flex-col justify-center bg-white p-2 pt-4">
              {FEATURES.map((feature) => {
                return (
                  <button
                    key={feature}
                    onClick={() => {
                      setClickedFeature(feature);
                      setIsDropped(!isDropped);
                    }}
                    className="rounded-xl bg-white px-4 py-2 hover:bg-gray-300 active:bg-gray-400"
                  >
                    {feature}
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <SearchBar placeholder={"Search apps, plugins and more"} />
        {/* !!! i dont know why when click dropdown feature,
                the content of input decrease its width '8.5px'
                @.,@  */}
      </div>
    </div>
  );
}

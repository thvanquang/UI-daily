import SearchBar from "../utility/SearchBar";

const TAGS = [
  "Blender",
  "Browser",
  "cross-platform",
  "HoloLens",
  "Microsoft",
  "Mixed Reality",
  "modelling",
  "MR",
  "nodejs",
  "streamsocket",
  "unity",
  "unity3D",
  "unrealengine",
  "VR",
  "websockets",
];

const POSTS = [
  { title: "Azure Speech Studio for Mixed Reality", link: "" },
  { title: "HoloLens 2 Unreal Project Template", link: "" },
  { title: "Simplygon in Azure", link: "" },
  { title: "Blender in Azure", link: "" },
  { title: "AAD Login on HoloLens 2", link: "" },
];

export default function BlogComponents() {
  return (
    <div className="flex w-full items-center justify-center bg-[#F6E9F9] p-8">
      <div className="flex flex-col items-center space-y-4 font-poppins text-[#2A325E]">
        {/* Tags */}
        <div className="w-[668px] rounded-xl border-[10px] border-white bg-[#F6E9F9] p-8 shadow-2xl">
          <h1 className="mb-4 font-merriweather text-2xl font-bold">Tags</h1>
          <div className="flex flex-wrap gap-4">
            {TAGS.map((tag) => {
              return (
                <button
                  key={tag}
                  className="rounded-xl bg-white p-2 hover:bg-[#2A325E] hover:text-white"
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search bar */}
        <div className="flex w-[668px] gap-4 rounded-xl border-[10px] border-white bg-[#F6E9F9] p-8 shadow-2xl">
          <SearchBar
            placeholder={"Search articles, topics, etc."}
            style={"rounded-xl"}
          />
          <button className="rounded-xl bg-[#2A325E] p-4 text-white">
            Search
          </button>
        </div>

        {/* Recent posts */}
        <div className="w-[530px] space-y-4 rounded-xl border-[10px] border-white bg-[#F6E9F9] p-8 shadow-2xl">
          <h1 className="mb-4 font-merriweather text-2xl font-bold">
            Recent posts
          </h1>
          {POSTS.map((post) => {
            return (
              <p
                key={post.title}
                className="rounded-xl p-4 text-base font-semibold hover:bg-white"
              >
                {post.title}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

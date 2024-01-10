import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Progress() {
  const [progressInput, setProgressInput] = useState(0);

  const totalCourseSections = 42;

  const data = {
    labels: ["Completed", "Remaining Sections"],
    datasets: [
      {
        label: "",
        data: [progressInput, totalCourseSections - progressInput],
        backgroundColor: ["black", "gray"],
        borderColor: ["black", "gray"],
      },
    ],
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-300 p-16">
      <div className="absolute top-10 space-x-4">
        <label className="" htmlFor="progress">
          Input your progress:
        </label>
        <input
          type="number"
          id="progress"
          max="42"
          min="0"
          name="progress"
          value={progressInput}
          onChange={(e) => setProgressInput(e.target.value)}
        />
      </div>

      <div className="w-[50%] rounded-xl bg-white p-8 font-poppins shadow-2xl">
        <h1 className="mb-4 font-merriweather text-xl font-extrabold">
          Your progress
        </h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Doughnut data={data} />
            <p className="absolute left-[42%] top-[50%] text-2xl font-bold">
              {((progressInput / totalCourseSections) * 100).toFixed(0)}%
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              {progressInput} of 42 complete
            </h2>
            <p className="text-sm">Finish course to get certificate.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

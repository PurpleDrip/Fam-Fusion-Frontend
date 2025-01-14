import React, { useState } from "react";

const Result = ({ data }) => {
  const [pretty, setPretty] = useState(false);

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center">
        Oops, something went wrong.
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-20 min-w-max min-h-max bg-[#212121] text-xl poppins-regular relative">
        <h1>{`{`}</h1>
        <div className={pretty ? "ml-8" : ""}>
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="flex">
              <span className={pretty ? "w-72" : ""}>{`" ${key} "`}</span>:
              <span className={pretty ? "ml-8" : ""}>{`" ${value} "`}</span>
            </div>
          ))}
        </div>
        <h1>{`}`}</h1>
        <div className="border max-w-max px-4 py-2 rounded-2xl absolute top-7 right-7 text-lg flex items-center">
          <label htmlFor="pretty-checkbox" className="cursor-pointer">
            {pretty ? "Ugly Print" : "Pretty Print"}
          </label>
          <input
            id="pretty-checkbox"
            type="checkbox"
            className="ml-4 cursor-pointer"
            checked={pretty}
            onChange={() => setPretty(!pretty)}
          />
        </div>
      </div>
    </div>
  );
};

export default Result;

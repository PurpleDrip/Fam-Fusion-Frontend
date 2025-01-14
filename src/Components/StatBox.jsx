import React from "react";

const StatBox = ({ stat, classes, children }) => {
  return (
    <div
      className={`min-h-min min-w-min border bg-black text-white rounded-xl border-red-200 ${classes}`}
    >
      {children ? children : stat}
    </div>
  );
};

export default StatBox;

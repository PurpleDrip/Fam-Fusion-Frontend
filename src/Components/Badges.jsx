import React from "react";

const Badges = ({ value, id }) => {
  return (
    <div
      key={id}
      className="px-2 py-1 bg-green-400 font-sans font-semibold text-sm rounded-full text-black"
    >
      {value}
    </div>
  );
};

export default Badges;

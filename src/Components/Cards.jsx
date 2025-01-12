import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToLiked,
  addToViewed,
  removeFromLiked,
} from "../Features/profileSlice";

const Cards = ({ data, key }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      key={key}
      className="border-2 border-neutral h-[25rem] w-[20rem] flex flex-col items-center p-4 gap-2 relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow hover:border-accent"
    >
      {/* Profile Picture */}
      <div className="relative">
        <img
          src={data.imageUrl}
          alt="Child Profile"
          className="h-[12rem] w-[12rem] rounded-full object-cover shadow-md"
        />
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          {data.status}
        </span>
      </div>

      <h1 className="text-xl font-semibold">{data.name}</h1>
      <p className="text-sm text-gray-600">Loves drawing and outdoor games.</p>

      <div className="flex gap-2 mt-2 items-center">
        <h1 className="text-gray-400">Like this Profile?</h1>
        <button
          onClick={() => {
            setIsSaved(!isSaved);
            isSaved
              ? dispatch(removeFromLiked(data))
              : dispatch(addToLiked(data));
          }}
          className={`${isSaved ? "text-red-500" : "text-gray-400"} text-2xl `}
          title="Add to favourite"
        >
          <i className="fas fa-heart"></i>
        </button>
      </div>
      <button
        className="btn btn-accent mt-2 btn-outline btn-wide"
        onClick={() => {
          navigate("/profile");
          dispatch(addToViewed(data));
        }}
      >
        View Profile
      </button>

      {showInfo && (
        <div className="absolute inset-0 bg-white bg-opacity-90 p-4 flex flex-col gap-2 justify-center items-center text-center rounded-lg">
          <h2 className="text-lg font-bold text-black">Details</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Age: 7 years</li>
            <li>Gender: Female</li>
            <li>Location: California</li>
            <li>Health: No Known Conditions</li>
            <li>Hobbies: Drawing, Cycling</li>
          </ul>
          <button
            className="btn btn-secondary mt-4"
            onClick={() => setShowInfo(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;

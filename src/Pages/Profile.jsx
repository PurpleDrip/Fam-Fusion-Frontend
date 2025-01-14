import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TitleBar from "../Components/TitleBar";
import { useSelector } from "react-redux";
import Badges from "../Components/Badges";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  // Redux selectors
  const allProfiles = useSelector((state) => state.profile.allProfiles);
  const userID = useSelector((state) => state.user.id);
  const isValid = useSelector((state) => state.user.isValid);

  const navigate = useNavigate();

  useEffect(() => {
    if (allProfiles?.length > 0) {
      const foundProfile = allProfiles.find((p) => p.id === parseInt(id, 10));
      setProfile(foundProfile);
    }
  }, [id, allProfiles]);

  // Handle case where profile is not found
  if (!profile) {
    return (
      <div className="flex justify-center items-center h-screen">
        Profile not found.
      </div>
    );
  }

  const openChat = () => {
    navigate(`/chat/${userID}`);
  };

  const handleAdoptNow = () => {
    if (isValid) {
      toast("A request has been sent to the organization regarding adoption.");
    } else {
      toast("Please verify yourself first.");
      navigate("/verify");
    }
  };

  return (
    <>
      <TitleBar />
      <div className="h-[92.3vh] flex overflow-hidden poppins-medium">
        {/* Left Section */}
        <div className="w-1/3 flex flex-col items-center justify-center">
          <img
            src="https://picsum.photos/480"
            alt={profile.name}
            className="z-0 rounded-full bg-white w-[30rem] mb-8"
          />
          <h1 className="text-2xl">{profile.name}</h1>
          <h2>{profile.age} years old</h2>
          <h2>From {profile.from}</h2>
          <h2 className="text-3xl mt-4">
            {profile.gender === "Male" ? "👦" : "👧"}
          </h2>
        </div>

        {/* Right Section */}
        <div className="w-2/3 p-8 flex flex-col">
          <h1 className="text-2xl mb-4 text-primary">
            Organization Name:
            <span className="ml-4 text-white">{profile.organizationName}</span>
          </h1>
          <h2 className="text-2xl mb-4 text-primary">
            Organization Address:
            <span className="ml-4 text-white">
              {profile.organizationAddress}
            </span>
          </h2>
          <p className="text-2xl mb-4">
            <span className="text-primary">Words from the Kid:</span>{" "}
            {profile.textFromChild}
          </p>
          <h2 className="text-2xl mb-4 text-primary">
            Health Status:
            <span className="ml-4 text-white">{profile.health}</span>
          </h2>
          <div className="flex flex-wrap gap-4 items-center mb-8">
            <h2 className="text-2xl text-primary">Hobbies:</h2>
            {profile.hobbies.map((hobby, index) => (
              <Badges key={index} value={hobby} />
            ))}
          </div>
          <div className="flex gap-4 my-4">
            <button
              className="btn btn-secondary btn-wide btn-outline"
              onClick={openChat}
            >
              Message
            </button>
            <button className="btn btn-secondary btn-wide btn-outline">
              Voice Call
            </button>
            <button className="btn btn-secondary btn-wide btn-outline">
              Video Call
            </button>
          </div>
          <div className="flex justify-center mb-20 mt-auto">
            <button
              className="px-8 py-2 bg-white text-black border border-white rounded font-semibold hover:bg-black hover:text-white"
              onClick={handleAdoptNow}
            >
              Adopt Now
            </button>
          </div>
        </div>
      </div>

      {profile.isFavourite && (
        <div className="absolute top-32 right-20 z-50">
          <FaHeart color="red" size={30} />
        </div>
      )}
    </>
  );
};

export default Profile;

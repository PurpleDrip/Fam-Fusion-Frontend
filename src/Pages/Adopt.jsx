import React, { useEffect } from "react";
import ThemeController from "../Components/ThemeController";
import TitleBar from "../Components/TitleBar";
import AdoptHero from "../Components/AdoptHero";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Adopt = () => {
  const role = useSelector((state) => state.user.role);
  const navigate = Navigate();

  useEffect(() => {
    if (role !== "user") {
      navigate("/");
    }
  });

  return (
    <div>
      <TitleBar />
      <AdoptHero />
    </div>
  );
};

export default Adopt;

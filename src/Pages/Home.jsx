import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeController from "../Components/ThemeController";
import TitleBar from "../Components/TitleBar";
import Facts from "../Components/Facts";

function Home() {
  const role = useSelector((state) => state.user.role);
  const navigate = useNavigate();

  return (
    <>
      <TitleBar />
      <Facts />
    </>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeController from "../Components/ThemeController";
import TitleBar from "../Components/TitleBar";

function Home() {
  const role = useSelector((state) => state.user.role);
  const navigate = useNavigate();

  useEffect(() => {
    const roleBasedTheme = role === "user" ? "autumn" : "lemonade";
    document.documentElement.setAttribute("data-theme", roleBasedTheme);
  }, [role]);
  return (
    <div>
      <TitleBar />
    </div>
  );
}

export default Home;

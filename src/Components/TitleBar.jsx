import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutProfile } from "../Features/profileSlice";
import { logout as logoutUser } from "../Features/userSlice";
import axios from "axios";
import { toast } from "react-toastify";

const TitleBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isValid = useSelector((state) => state.user.isValid);
  const isRegistered = useSelector((state) => state.user.isRegistered);

  return (
    <div className="px-8 text-accent-content h-16 bg-accent flex items-center justify-between sticky top-4 z-10 rounded-3xl mx-8">
      <div>
        <a href="/home" className="text-4xl font-semibold">
          Fam Fusion
        </a>
      </div>
      <div className="flex gap-4">
        {isRegistered ? (
          <>
            <Link to="/likedprofiles" className="btn btn-sm btn-ghost">
              Liked Profiles
            </Link>
            <Link to="/history" className="btn btn-sm btn-ghost">
              History
            </Link>
            <Link
              className="btn btn-sm btn-primary"
              onClick={() => {
                !isValid ? navigate("/verify") : toast("Already Validated");
              }}
            >
              Get Verified
            </Link>
          </>
        ) : (
          <>
            <Link to="/user" className="btn btn-sm btn-ghost">
              Login
            </Link>
            <Link to="/register/user" className="btn btn-sm btn-ghost">
              Register
            </Link>
          </>
        )}

        <Link to="/adopt" className="btn btn-sm btn-primary">
          Adopt Now
        </Link>
        {isRegistered && (
          <Link
            className="btn btn-sm btn-ghost"
            onClick={() => {
              axios
                .post(
                  "http://localhost:3000/api/logout",
                  {},
                  { withCredentials: true }
                )
                .then((res) => {
                  console.log(res);
                  console.log("Cookies cleared");
                  dispatch(logoutProfile());
                  dispatch(logoutUser());
                  navigate("/");
                })
                .catch((err) => console.log(err));
            }}
          >
            Log Out
          </Link>
        )}
      </div>
    </div>
  );
};

export default TitleBar;

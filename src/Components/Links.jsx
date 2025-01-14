import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Features/organSlice";
import axios from "axios";

const Links = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isRegistered = useSelector((state) => state.organ.organisRegistered);
  return (
    <div className="flex items-center justify-center gap-4 px-8 poppins-regular">
      {!isRegistered ? (
        <>
          <Link className="btn btn-sm" to="/organ">
            Login
          </Link>
          <Link className="btn btn-sm" to="/register/organ">
            Register
          </Link>
        </>
      ) : (
        <>
          <Link className="btn btn-sm">My Wards</Link>
          <Link className="btn btn-sm" to="/verify">
            Verify Yourself
          </Link>
          <Link
            className="btn btn-sm"
            onClick={() => {
              axios
                .post(
                  "http://localhost:3000/api/logout",
                  {},
                  { withCredentials: true }
                )
                .then((res) => {
                  console.log(res);
                  dispatch(logout());
                  navigate("/");
                })
                .catch((err) => console.log(err));
            }}
          >
            Log Out
          </Link>
        </>
      )}
    </div>
  );
};

export default Links;

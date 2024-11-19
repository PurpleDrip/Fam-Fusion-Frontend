import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LoginOrgan = () => {
  const role = useSelector((state) => state.user.role);
  const navigate = useNavigate();
  useEffect(() => {
    if (role !== "organ") {
      navigate("/");
    }
  }, [role, navigate]);
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="form-container border p-8 rounded-xl">
        <form className="flex flex-col gap-8">
          <h1>Login Organization</h1>
          <input type="text" name="" placeholder="Username" />
          <input type="email" name="" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button type="submit">Submit</button>
          <Link to="/register/organ" className="mx-auto -mt-4">
            Dont have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginOrgan;

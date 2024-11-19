import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const role = useSelector((state) => state.user.role);
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "user") {
      navigate("/");
    }
  }, [role, navigate]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="form-container border p-8 rounded-xl">
        <form className="flex flex-col gap-8">
          <h1>Login</h1>
          <input type="text" name="" placeholder="Username" />
          <input type="email" name="" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button type="submit">Submit</button>
          <Link to="/register/user" className="mx-auto -mt-4">
            Don't have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

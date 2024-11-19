import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const RegisterOrgan = () => {
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
          <h1>Register Organization</h1>
          <input type="text" name="" placeholder="Organization Name" />
          <input type="email" name="" placeholder="Organization Email" />
          <textarea name="" id="" placeholder="Organization Address" />
          <input type="password" placeholder="Password" />
          <button type="submit">Submit</button>
          <Link to="/organ" className="mx-auto -mt-4">
            Already have an account??
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterOrgan;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
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
          <h1>Register</h1>
          <input type="text" name="" placeholder="Username" />
          <input type="email" name="" placeholder="Email" />
          <select name="" id="">
            <option value="Gender" selected disabled>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <textarea name="" id="" placeholder="Address" />
          <input type="password" placeholder="Password" />
          <button type="submit">Submit</button>
          <Link to="/user" className="mx-auto -mt-4">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;

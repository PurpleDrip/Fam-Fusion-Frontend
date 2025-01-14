import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { hasRegistered, setID, setUserName } from "../Features/userSlice";

const Register = () => {
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    gender: "Male",
    address: "",
    password: "",
  });
  const role = useSelector((state) => state.user.role);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (role !== "user") {
      navigate("/");
    }
  }, [role, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios
      .post("http://localhost:3000/api/register/user", formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        dispatch(setUserName(res.data.name));
        dispatch(hasRegistered());
        dispatch(setID(response.data.id));
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        setMsg(err.response.data.message);
      });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center text-black">
      <div className="form-container p-8 rounded-xl bg-secondary">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <h1 className="text-secondary-content text-3xl">REGISTER</h1>
          <label className="input input-bordered flex items-center gap-2">
            Username
            <input
              type="text"
              name="username"
              className="grow"
              placeholder="John Doe"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input
              type="email"
              name="email"
              className="grow"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <select
            name="gender"
            className="select select-bordered w-full max-w-xs"
            value={formData.gender}
            onChange={handleChange}
          >
            <option disabled selected>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <label className="form-control -mt-4">
            <div className="label">
              <span className="label-text text-primary-content">Address</span>
            </div>
            <textarea
              name="address"
              className="textarea textarea-bordered h-20"
              placeholder="22nd Street, Winston Road..."
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Password
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="johndoe123"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary text-primary-content"
          >
            Submit
          </button>
          <Link
            to="/user"
            className="mx-auto -mt-4 hover:underline text-primary-content"
          >
            Already have an account?
          </Link>
        </form>
        <h1 className="text-lg text-red-600 text-center">{msg}</h1>
      </div>
    </div>
  );
};

export default Register;

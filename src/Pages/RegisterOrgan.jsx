import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { hasRegistered, setorganName } from "../Features/organSlice";
import { setID } from "../Features/userSlice";

const RegisterOrgan = () => {
  const role = useSelector((state) => state.user.role);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  useEffect(() => {
    if (role !== "organ") {
      navigate("/");
    }
  }, [role, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:3000/api/register/organ", formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        dispatch(setorganName(res.data.name));
        dispatch(hasRegistered());
        dispatch(setID(res.data.id));
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center text-black">
      <div className="form-container p-8 rounded-xl bg-primary">
        <form className="flex flex-col gap-4 w-[18rem]" onSubmit={handleSubmit}>
          <h1 className="text-primary-content text-3xl">REGISTER</h1>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-primary-content">
                Organization Name
              </span>
            </div>
            <input
              type="text"
              placeholder="John Adoption Center"
              className="input input-bordered w-full max-w-xs"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-primary-content">
                Organization Email
              </span>
            </div>
            <input
              type="email"
              placeholder="johnadoption@gmail.com"
              className="input input-bordered w-full max-w-xs"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text text-primary-content">
                Organization Address
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Church Street, Behind Hard Rock Cafe."
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            ></textarea>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-primary-content">Password</span>
            </div>
            <input
              type="password"
              placeholder="johnadoption@123"
              className="input input-bordered w-full max-w-xs"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </label>
          <button
            type="submit"
            className="btn btn-accent text-secondary-content"
          >
            Submit
          </button>
          <Link
            to="/organ"
            className="mx-auto hover:underline text-primary-content"
          >
            Already have an account??
          </Link>
        </form>
        <h1 className="text-lg text-red-300 text-center">{msg}</h1>
      </div>
    </div>
  );
};

export default RegisterOrgan;

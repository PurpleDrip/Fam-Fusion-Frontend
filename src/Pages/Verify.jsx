import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "axios";
import Result from "./Result";
import { useDispatch } from "react-redux";
import { hasValidated } from "../Features/userSlice";

const Verify = () => {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(false);
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    encrypt: "",
    key: "",
    iv: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:3000/api/verify", formData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        dispatch(hasValidated());
        setData(response.data);
        setResult(true);
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      {result ? (
        <Result data={data} />
      ) : !show ? (
        <>
          <div className="px-20 py-8 bg-blue-500 ">
            <h1 className="text-2xl poppins-regular">
              Would u like to use One Card for Verification?
            </h1>
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                className="px-8 py-2 bg-black rounded"
                onClick={() => setShow(true)}
              >
                Yes
              </button>
              <button
                className="px-8 py-2 bg-black rounded"
                onClick={() => setShow(true)}
              >
                No
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-blue-500 min-h-max py-12 px-16">
            <h1 className="text-2xl text-center poppins-regular mb-8">
              Verifying using OneCard
            </h1>
            <form
              className="flex flex-col gap-4 text-black"
              onSubmit={submitHandler}
            >
              <input
                type="text"
                name="encrypt"
                placeholder="Encrypted Text"
                className="rounded px-8 py-2"
                value={formData.encrypt}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="key"
                placeholder="Key"
                className="rounded px-8 py-2"
                value={formData.key}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="iv"
                placeholder="IV"
                className="rounded px-8 py-2"
                value={formData.iv}
                onChange={handleInputChange}
              />
              <button className="bg-black max-w-min mx-auto px-8 py-2 rounded-xl mt-2 text-white">
                Submit
              </button>
            </form>
          </div>
        </>
      )}
      <div
        className="absolute top-20 left-20 cursor-pointer "
        onClick={() => navigate(-1)}
      >
        <IoMdArrowRoundBack size={36} />
      </div>
    </div>
  );
};

export default Verify;

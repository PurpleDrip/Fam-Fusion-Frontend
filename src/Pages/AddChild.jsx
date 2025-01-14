import React, { useState } from "react";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AddChild = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bio: "",
    description: "",
    race: "",
    nationality: "",
    healthStatus: "",
    hobbies: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:3000/api/profile/addprofile", formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        // Handle success
      })
      .catch((err) => {
        console.error(err);
        // Handle error
      });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-12 bg-secondary rounded-3xl min-h-min w-[30rem] flex flex-col">
        <h1 className="text-3xl mb-8 ml-4 poppins-regular">Add Child</h1>
        <form onSubmit={handleSubmit} className="flex flex-col text-black">
          <div className="flex flex-row justify-between">
            <div className="mb-4 w-1/2 pr-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder="Name of Child"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4 w-1/2 pl-2">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <input
                type="text"
                name="age"
                id="age"
                placeholder="Age of Child"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mb-4 w-1/2 pr-2">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Other</option>
              </select>
            </div>
            <div className="mb-4 w-1/2 pl-2">
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio
              </label>
              <textarea
                name="bio"
                id="bio"
                placeholder="Bio of Child"
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mb-4 w-1/2 pr-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="The Child likes too..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4 w-1/2 pl-2">
              <label
                htmlFor="race"
                className="block text-sm font-medium text-gray-700"
              >
                Race
              </label>
              <input
                type="text"
                name="race"
                id="race"
                placeholder="Race of Child"
                value={formData.race}
                onChange={(e) =>
                  setFormData({ ...formData, race: e.target.value })
                }
                className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mb-4 w-1/2 pr-2">
              <label
                htmlFor="nationality"
                className="block text-sm font-medium text-gray-700"
              >
                Nationality
              </label>
              <input
                type="text"
                name="nationality"
                id="nationality"
                placeholder="Nationality of Child"
                value={formData.nationality}
                onChange={(e) =>
                  setFormData({ ...formData, nationality: e.target.value })
                }
                className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4 w-1/2 pl-2">
              <label
                htmlFor="healthStatus"
                className="block text-sm font-medium text-gray-700"
              >
                Health Status
              </label>
              <input
                type="text"
                name="healthStatus"
                id="healthStatus"
                placeholder="Health Status of Child"
                value={formData.healthStatus}
                onChange={(e) =>
                  setFormData({ ...formData, healthStatus: e.target.value })
                }
                className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mb-4 w-1/2 pr-2">
              <label
                htmlFor="hobbies"
                className="block text-sm font-medium text-gray-700"
              >
                Hobbies
              </label>
              <textarea
                name="hobbies"
                id="hobbies"
                placeholder={`Enter Hobbies of child followed by a comma " , "`}
                value={formData.hobbies}
                onChange={(e) =>
                  setFormData({ ...formData, hobbies: e.target.value })
                }
                className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Child
          </button>
        </form>
      </div>
      <div
        className="absolute top-20 left-20 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        <IoMdArrowRoundBack size={36} />
      </div>
    </div>
  );
};

export default AddChild;

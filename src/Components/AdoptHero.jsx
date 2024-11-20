import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../Components/Cards";

const AdoptHero = () => {
  const [filters, setFilters] = useState({
    name: "",
    minAge: "",
    maxAge: "",
    gender: "",
    location: "",
    healthCondition: "",
    siblings: false,
    sortBy: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filters submitted:", filters);
    // Add your API or filter logic here
  };

  const handleReset = () => {
    setFilters({
      name: "",
      minAge: "",
      maxAge: "",
      gender: "",
      location: "",
      healthCondition: "",
      siblings: false,
      sortBy: "",
    });
  };

  return (
    <div className="flex min-h-screen mt-4 mx-8 gap-4">
      {/* Left Sidebar */}
      <div className="left w-1/4 p-4 sticky h-[70vh] flex items-center justify-center top-24">
        <div className="filter-container border p-4 w-full">
          <h1 className="text-3xl text-base-content mb-4">Filters</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name Filter */}
            <input
              type="text"
              name="name"
              value={filters.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="input input-bordered w-full"
            />

            {/* Age Range */}
            <div className="flex flex-col gap-2">
              <label className="text-base">Age Range:</label>
              <div className="flex items-center gap-4">
                <span className="text-sm w-2/5">Min Age: {filters.minAge}</span>
                <input
                  type="range"
                  name="minAge"
                  min="1"
                  max={filters.maxAge}
                  value={filters.minAge}
                  onChange={handleInputChange}
                  className="range range-primary w-full"
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-2/5">Max Age: {filters.maxAge}</span>
                <input
                  type="range"
                  name="maxAge"
                  min={filters.minAge}
                  max="80"
                  value={filters.maxAge}
                  onChange={handleInputChange}
                  className="range range-primary w-full"
                />
              </div>
            </div>

            {/* Gender Filter */}
            <select
              name="gender"
              value={filters.gender}
              onChange={handleInputChange}
              className="select select-bordered w-full"
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>

            {/* Location */}
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleInputChange}
              placeholder="Location/Nearest Orphanage"
              className="input input-bordered w-full"
            />

            {/* Health Conditions */}
            <select
              name="healthCondition"
              value={filters.healthCondition}
              onChange={handleInputChange}
              className="select select-bordered w-full"
            >
              <option value="">Health Condition</option>
              <option value="none">No Known Conditions</option>
              <option value="specialNeeds">Special Needs</option>
            </select>

            {/* Sibling Group */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="siblings"
                checked={filters.siblings}
                onChange={handleInputChange}
                className="checkbox"
              />
              Part of a sibling group
            </label>

            {/* Sort By */}
            <select
              name="sortBy"
              value={filters.sortBy}
              onChange={handleInputChange}
              className="select select-bordered w-full"
            >
              <option value="">Sort By</option>
              <option value="ageAsc">Age: Low to High</option>
              <option value="ageDesc">Age: High to Low</option>
              <option value="location">Location: Nearest First</option>
            </select>

            {/* Buttons */}
            <div className="flex gap-2">
              <button type="submit" className="btn btn-primary w-1/2">
                Apply
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-secondary w-1/2"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Center Content */}
      <div className="center w-1/2 min-h-[100vh] mt-8">
        <div className="card-container flex flex-wrap gap-8">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right w-1/4 sticky top-24 h-[85vh]  flex justify-center flex-col">
        <div className="right-container">
          <div className="right sticky top-0">
            {/* Profile */}
            <div className="p-4 border-b">
              <div className="flex items-center gap-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User Profile"
                  className="rounded-full w-12 h-12"
                />
                <div>
                  <h3 className="text-lg font-bold">User's Name</h3>
                  <button className="text-sm text-primary underline">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Random Generator */}
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold">Random Profile</h2>
              <div className="mt-2">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Random Profile"
                  className="rounded-lg w-full"
                />
                <h3 className="text-lg mt-2">👧 Sarah, 7 years</h3>
                <p className="text-sm">Location: California</p>
                <button className="btn btn-primary btn-sm mt-2">
                  View Profile
                </button>
              </div>
            </div>

            {/* History */}
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold">Recently Viewed</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <div className="flex justify-between items-center">
                    <span>👦 Ethan, 5 years</span>
                    <button className="text-sm text-primary underline">
                      View
                    </button>
                  </div>
                  <span className="text-xs text-gray-500">
                    Viewed 2 hours ago
                  </span>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <span>👧 Ava, 7 years</span>
                    <button className="text-sm text-primary underline">
                      View
                    </button>
                  </div>
                  <span className="text-xs text-gray-500">
                    Viewed yesterday
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptHero;

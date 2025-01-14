import React from "react";
import { useSelector } from "react-redux";
import StatBox from "../Components/StatBox";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Links from "../Components/Links";

const Dashboard = () => {
  const organName = useSelector((state) => state.organ.organName);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-12">
      <div className="flex items-center justify-between">
        <h1 className="h-[10%] text-5xl ml-12 poppins-light mb-4">
          Fam Fusion
        </h1>
        <Links />
      </div>

      <div className="min-h-[90%] border box-border rounded-xl p-12 flex flex-col">
        <div className="flex items-center justify-between relative">
          <div>
            <h1 className="text-3xl poppins-medium">
              Hello, {organName || "Organization Name"} !
            </h1>
            <h2 className="text-lg text-gray-500 ml-8">
              Last Loggin - Yesterday 3:10pm .
            </h2>
          </div>
          <div className="px-12 py-2 bg-white text-black border rounded absolute left-1/2 box-border cursor-pointer hover:bg-gray-300">
            Your Wards
          </div>
          <div
            className="p-2 border-2 rounded-full cursor-pointer hover:border-red-500"
            onClick={() => navigate("/notifications")}
          >
            <FaBell size={24} />
          </div>
        </div>
        <div className="flex flex-wrap min-h-max max-w-max gap-8 items-start justify-center mt-12">
          <StatBox
            stat={"In the Last 5 days 25 people have viewed your wards."}
            classes={"px-20 py-8 w-[20rem] text-center poppins-regular"}
          />
          <StatBox>
            <div className="m-4 rounded-3xl">
              <div className="stats shadow">
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">Downloads</div>
                  <div className="stat-value">31K</div>
                  <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">New Users</div>
                  <div className="stat-value">4,200</div>
                  <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                <div className="stat">
                  <div className="stat-figure text-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-8 w-8 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      ></path>
                    </svg>
                  </div>
                  <div className="stat-title">New Registers</div>
                  <div className="stat-value">1,200</div>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>
              <div className="px-12 py-3 bg-[#2c2b2b] border-[#2c2b2b] border max-w-max rounded-full mx-auto mt-4 cursor-pointer hover:bg-red-400 hover:text-black">
                Promote a Ward?
              </div>
            </div>
          </StatBox>
          <StatBox stat={"Add a Graph"} classes={"px-20 py-28"} />
          <StatBox>
            <div className="p-20">Random Stat</div>
          </StatBox>
          <StatBox>
            <div className="p-20">Random Stat</div>
          </StatBox>
          <StatBox>
            <div className="p-20">Random Stat</div>
          </StatBox>
          <StatBox>
            <div className="p-20">Random Stat</div>
          </StatBox>
        </div>
        <div className="mx-auto flex gap-8">
          <button
            className="text-xl mt-20 bg-red-400 text-black px-12 py-2 poppins-light rounded hover:bg-red-300"
            onClick={() => navigate("/addchild")}
          >
            Add a Ward
          </button>
          <button
            className="text-xl mt-20 bg-red-400 text-black px-12 py-2 poppins-light rounded hover:bg-red-300"
            onClick={() => navigate("/verify")}
          >
            Verify Yourself
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

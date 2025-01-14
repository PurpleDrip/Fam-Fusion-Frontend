import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RegisterOrgan from "./Pages/RegisterOrgan";
import LoginOrgan from "./Pages/LoginOrgan";
import Role from "./Pages/Role";
import Home from "./Pages/Home.jsx";
import Adopt from "./Pages/Adopt.jsx";
import Profile from "./Pages/Profile.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Chat from "./Pages/Chat.jsx";
import ChatORP from "./Pages/ChatOrg.jsx";
import LikedProfiles from "./Pages/LikedProfiles.jsx";
import AddChild from "./Pages/AddChild.jsx";
import Verify from "./Pages/Verify.jsx";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Role />} />
            <Route path="/user" element={<Login />} />
            <Route path="/organ" element={<LoginOrgan />} />
            <Route path="/register/user" element={<Register />} />
            <Route path="/register/organ" element={<RegisterOrgan />} />
            <Route path="/home" element={<Home />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notifications" element={<Dashboard />} />
            <Route path="/addchild" element={<AddChild />} />
            <Route path="/chat/:id" element={<Chat />} />
            <Route path="/chatorg" element={<ChatORP />} />
            <Route path="/likedprofiles" element={<LikedProfiles />} />
            <Route path="/history" element={<History />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/userSlice";
import profileReducer from "./Features/profileSlice";
import organSlice from "./Features/organSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    organ: organSlice,
  },
  devTools: process.env.NODE_ENV !== "production", // Enables devTools in non-production environments
});

export default store;

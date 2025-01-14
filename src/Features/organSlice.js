import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  organName: localStorage.getItem("organName") || "",
  organisRegistered: localStorage.getItem("organisRegistered") === "true",
  organisVerified: "",
};

const organSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setorganName: (state, action) => {
      state.organName = action.payload;
      localStorage.setItem("organName", action.payload);
    },
    hasRegistered: (state) => {
      state.organisRegistered = true;
      localStorage.setItem("organhasRegistered", true);
    },
    logout: (state) => {
      state.organName = "";
      state.organisRegistered = false;
      state.organisVerified = false;
      localStorage.clear();
    },
  },
});

export const { setorganName, hasRegistered, logout } = organSlice.actions;
export default organSlice.reducer;

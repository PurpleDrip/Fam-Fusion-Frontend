import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: localStorage.getItem("id") || "",
    role: localStorage.getItem("role") || null,
    isRegistered: localStorage.getItem("isRegistered") === "true",
    isValid: localStorage.getItem("isValid") === "true",
    userName: localStorage.getItem("userName") || "",
  },
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
      localStorage.setItem("role", action.payload);
    },
    hasRegistered: (state) => {
      state.isRegistered = true;
      localStorage.setItem("isRegistered", true);
    },
    hasValidated: (state) => {
      state.isValid = true;
      localStorage.setItem("isValid", true);
    },
    logout: (state) => {
      state.role = null;
      state.isRegistered = false;
      state.isValid = false;
      state.userName = "";
      state.id = "";
      localStorage.clear();
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
      localStorage.setItem("userName", action.payload);
    },
    setID: (state, action) => {
      state.id = action.payload;
      localStorage.setItem("id", action.payload);
    },
  },
});

export const {
  setUserRole,
  hasRegistered,
  hasValidated,
  logout,
  setUserName,
  setID,
} = userSlice.actions;
export default userSlice.reducer;

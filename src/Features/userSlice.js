import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    role: localStorage.getItem("role") || null,
    theme: localStorage.getItem("theme") || "dim",
  },
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
      localStorage.setItem("role", action.payload);
    },
  },
});

export const { setUserRole } = userSlice.actions;
export default userSlice.reducer;

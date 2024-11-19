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
      const theme = action.payload === "user" ? "autumn" : "lemonade";
      state.theme = theme;
      localStorage.setItem("role", action.payload);
      localStorage.setItem("theme", theme);
    },
    setUserTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { setUserRole, setUserTheme } = userSlice.actions;
export default userSlice.reducer;

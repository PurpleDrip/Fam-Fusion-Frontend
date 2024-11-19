const userSlice = createSlice({
  name: "user",
  initialState: {
    role: null,
    theme: "dim",
  },
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
      if (action.payload === "user") {
        state.theme = "autumn";
      } else if (action.payload === "organ") {
        state.theme = "lemonade";
      }
    },
    setUserTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setUserRole, setUserTheme } = userSlice.actions;
export default userSlice.reducer;

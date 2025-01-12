import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const initialState = {
  allProfiles: JSON.parse(localStorage.getItem("allProfiles")) || data,
  likedProfiles: JSON.parse(localStorage.getItem("likedProfiles")) || [],
  viewedProfiles: JSON.parse(localStorage.getItem("viewedProfiles")) || [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addToLiked: (state, action) => {
      // Ensure max length of 15 for likedProfiles
      const updatedLikedProfiles = [
        ...state.likedProfiles.slice(-14), // Keep the last 14 elements
        action.payload.profile, // Add the new profile
      ];
      state.likedProfiles = updatedLikedProfiles;
      localStorage.setItem(
        "likedProfiles",
        JSON.stringify(updatedLikedProfiles)
      );
    },
    addToViewed: (state, action) => {
      // Ensure max length of 30 for viewedProfiles
      const updatedViewedProfiles = [
        ...state.viewedProfiles.slice(-29), // Keep the last 29 elements
        action.payload.profile, // Add the new profile
      ];
      state.viewedProfiles = updatedViewedProfiles;
      localStorage.setItem(
        "viewedProfiles",
        JSON.stringify(updatedViewedProfiles)
      );
    },
    removeFromLiked: (state, action) => {
      const updatedLikedProfiles = state.likedProfiles.filter(
        (profile) => profile.id !== action.payload.id
      );
      state.likedProfiles = updatedLikedProfiles;
      localStorage.setItem(
        "likedProfiles",
        JSON.stringify(updatedLikedProfiles)
      );
    },
  },
});

export const { addToLiked, addToViewed, removeFromLiked } =
  profileSlice.actions;
export default profileSlice.reducer;

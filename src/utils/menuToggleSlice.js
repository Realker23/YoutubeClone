import {createSlice} from "@reduxjs/toolkit";

const menuToggleSlice = createSlice({
  name: "menuToggle",
  initialState: {
    isMenuOpen: true,
  },

  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export default menuToggleSlice.reducer;
export const {toggleMenu} = menuToggleSlice.actions;

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
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export default menuToggleSlice.reducer;
export const {toggleMenu, closeMenu} = menuToggleSlice.actions;

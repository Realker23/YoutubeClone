import {configureStore} from "@reduxjs/toolkit";
import menuToggleSlice from "./menuToggleSlice";

const store = configureStore({
  reducer: {
    menuToggle: menuToggleSlice,
  },
});

export default store;

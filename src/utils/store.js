import {configureStore} from "@reduxjs/toolkit";
import menuToggleSlice from "./menuToggleSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    menuToggle: menuToggleSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;

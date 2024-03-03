import {createSlice} from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, actions) => {
      state.message.splice(25, 1);
      state.message.unshift(actions.payload);
    },
  },
});

export default chatSlice.reducer;

export const {addMessage} = chatSlice.actions;

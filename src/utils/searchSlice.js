import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},

  reducers: {
    cacheResult: (state, action) => {
      return {...action.payload, ...state};
      /**
       * return {...state,...action.payload}
       * return Object.assign(action.payload,state)
       */
    },
  },
});

export const {cacheResult} = searchSlice.actions;
export default searchSlice.reducer;

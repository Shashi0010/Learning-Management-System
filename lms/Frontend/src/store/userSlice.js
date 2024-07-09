import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "Vicky" };
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loaduser: (state, actions) => {
      return actions.payload;
    },
    deleteUser: (state, actions) => {
      return null;
    },
  },
});

export default userSlice.reducer;
export const userSelector = (state) => state.name;
export const { loaduser } = userSlice.actions;

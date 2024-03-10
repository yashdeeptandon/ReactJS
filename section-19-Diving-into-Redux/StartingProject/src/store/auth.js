import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAthenticated = true;
    },
    logout(state) {
      state.isAthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;

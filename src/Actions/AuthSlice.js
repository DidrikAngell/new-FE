import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: null,
  account: null,
  wallet: null,
};

export const AuthSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    connected: (state, action) => {
      state.account = action.payload.account;
      state.isAuthenticated = true;
      state.wallet = action.payload.wallet;
    },
    disconnect: (state) => {
      state.account = null;
      state.isAuthenticated = null;
      state.wallet = null;
    },
  },
});

export const { connected, disconnect } = AuthSlice.actions;

export default AuthSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthen: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthen = true;
    },
    logout(state) {
      state.isAuthen = false;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
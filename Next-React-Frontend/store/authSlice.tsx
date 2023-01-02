import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from ".";

type authState = {
  token: string;
  user: any;
  isAuth: boolean;
};

const initialState: authState = {
  token: "",
  user: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    logout(state) {
      state.user = null;
      state.token = "";
      state.isAuth = false;
    },
  },
});

export const setUser = (data: any) => (dispatch: AppDispatch) => {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  dispatch(authSlice.actions.login({ user: data.user, token: data.token }));
};

export const logOutUser = () => (dispatch: AppDispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch(authSlice.actions.logout());
};

export const authActions = authSlice.actions;
export default authSlice;

import React from "react";
import classes from "./Auth.module.css";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Auth = (props) => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  return (
    <div className={classes.form}>
      <div className={classes.inputWrapper}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.inputWrapper}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </div>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Auth;

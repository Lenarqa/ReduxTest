import React from "react";
import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Header = (props) => {
  const dispath = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthen);

  const logoutHandler = () => {
    dispath(authActions.logout());
  };

  return (
    <header>
      <h1>Redux Auth</h1>
      {isAuth && (
        <div>
          <a href="#">My Products</a>
          <a href="#">My Sales</a>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;

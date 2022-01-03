import "./App.css";
import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector(state => state.auth.isAuthen);
  const content = isAuth ? <UserProfile /> : <Auth />;
  return (
    <Fragment>
      <Header />
      {content}
      <Counter />
    </Fragment>
  );
}

export default App;

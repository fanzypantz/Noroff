import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import News from "../pages/News";
import "../../App.css";

function Layout() {
  return (
    <Router>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/news"}>News</Link>
        <Link to={"/login"}>Login</Link>
      </nav>

      <Switch>
        <Route path={"/login"}>
          <Login />
        </Route>
        <Route path={"/news"}>
          <News />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Layout;

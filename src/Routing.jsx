import React from "react";
import "./Routing.css";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";

export default function Routing() {

  const history = useHistory();

  return (
    /* if passing a link for route navigation
    Import link from router dom 
    use <Link> tags and "to="/"" specify path */

    <div className="routing">
      <button onClick={() => history.push("/")}>Home</button>
      <button onClick={() => history.push("/about-us")}>About us</button>
      <button onClick={() => history.push("/contact-us")}>Contact us</button>

      <Switch>
          <Route path="/contact-us">
            <Contact/>
          </Route>
          <Route path="/about-us">
            <About/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
      </Switch>
    </div>
  );
}

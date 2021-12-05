import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import Comments from './Comments';
import "./index.css";
// import RenderCounter from './RenderCounter';
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Routing from "./Routing";
// import Maps from './Maps';
// import Spread from './Spread';
// import Users from './Users';
// import Workers from './Workers';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Maps/> */}
    {/* <Spread/> */}
    {/* <Workers/> */}
    {/* <Users/> */}
    {/* <RenderCounter/> */}
    {/* <Comments/> */}
    <Router>
      <Routing />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

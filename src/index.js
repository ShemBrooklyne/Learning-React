import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Maps from './Maps';
// import Spread from './Spread';
import Users from './Users';
// import Workers from './Workers';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Maps/> */}
    {/* <Spread/> */}
    {/* <Workers/> */}
    <Users/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

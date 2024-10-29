import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; //카운트1
// import App_usestate from './App_usestate' //카운트2
import App from './AppUseMeno'; //제곱근 구하기
import Api from './AppUseEffect'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Api />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

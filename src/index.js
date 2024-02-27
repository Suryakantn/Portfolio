import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import NoFound from './NoFound';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const CryptoJS = require('crypto-js');
getAlert();

function getAlert() {
  // var user1 = "Hi@123";
  // const decrypt = (data) => {
  //   try {
  //     return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
  //   } catch (error) {
  //     return null;
  //   }
  // };
  // const getCookie = (name) => {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(';').shift();
  // }
  // if (user1 === decrypt(getCookie('token'))) {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  // } else {
  //   var username = prompt('Please Log in. Username:', ' ');
  //   if (username === user1) {
  //     const encrypt = (text) => {
  //       return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
  //     };
  //     let encrypted = encrypt(username);
  //     var expires = (new Date(Date.now() + (1 * 60 * 1000)));
  //     document.cookie = `token=${encrypted}; max-age=1800; expires=` + expires + ";path=/;"
  //     root.render(
  //       <React.StrictMode>
  //         <App />
  //       </React.StrictMode>
  //     );
  //   }
  //   else {
  //     root.render(
  //       <React.StrictMode>
  //         <NoFound />
  //       </React.StrictMode>
  //     );
  //   }
  // }
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

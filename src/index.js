import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-90tgIj4-c7l2w6UrJRtTGS0r1gSMTOw",
  authDomain: "ecommerce-bikinis.firebaseapp.com",
  projectId: "ecommerce-bikinis",
  storageBucket: "ecommerce-bikinis.appspot.com",
  messagingSenderId: "182282759411",
  appId: "1:182282759411:web:05112fba89e1a53f109b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';

//import PackingList from './PackingList';
import reportWebVitals from './reportWebVitals';
//import 5 page
/*
import Home from './Home';
import Tarot from './Tarot';
import Dream from './Dream';
*/
//ส่วนเพิ่มเติม
import Footer from './Footer';
import Navbar from './Navbar';
//ส่วนเพิ่มเติม
import {HashRouter,Switch,Route,Routes,useParams,useHistory,Link,createBrowserRouter,RouterProvider} from "react-router-dom";

//import ReactDOM, {render} from 'react-dom';
//


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Navbar/>
      <App/>
      <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))  <App />
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));

/**
 * Register Service Worker
 */
function registerWorker() {
    function successHandler(reg) {console.log("Success: ", reg, "Scope is: ", reg.scope)};
    function errorHandler(err) {console.log( "ServiceWorker registration failed: ", err);}
    // Register the service worker in this script and log out success or failure
    navigator.serviceWorker.register("../sw.js").then(successHandler,errorHandler);
  };

  registerWorker();

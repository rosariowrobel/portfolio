import React from 'react';
import ReactDOM from 'react-dom';

//import css in order
import 'normalize.css';
//import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
//import './img/css/ionicons.css';
//import './img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';


//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import * as serviceWorker from './serviceWorker';

//import components
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Aboutme from './components/Aboutme.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import BackToTop from './components/Back-top.jsx';
import Preloader from './components/Preloader';



ReactDOM.render(
    <React.Fragment>
        <Navbar />
        <Home />
        <Aboutme />
        <Portfolio />
        <Contact />
        <BackToTop />
        <Preloader />
    </React.Fragment>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();










/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
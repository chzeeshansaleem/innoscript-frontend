import React, { useEffect } from 'react';
import './App.css';
import MyNavbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/404Page/NotFoundPage';
import AboutUs from './components/aboutUs/AboutUs';
import WebDevelopment from './components/services/webDevelopment/WebDevelopment';

const App = ()=> {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (

      <div>
    
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/web-development" element={<WebDevelopment/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  
      </div>

  );
}

export default App;

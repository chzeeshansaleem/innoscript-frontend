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
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollTop/ScrollTop';
import MobileApp from './components/services/mobile-app/MobileApp';
import CustomSoftware from './components/services/custom-software/CustomSoftware';
import Seo from './components/services/seo/Seo';
import UiUx from './components/services/uiux/UiUx';
import DevOps from './components/services/devOps/DevOps';

const App = ()=> {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (

      <div>
    <ScrollToTop/>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/web-development" element={<WebDevelopment/>}/>
        <Route path="/custom-software-development" element={<CustomSoftware />} />
        <Route path="/mobile-app-development" element={<MobileApp />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/ui-ux-designing" element={<UiUx />} />
        <Route path="/devops-services" element={<DevOps />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/> 
      </div>

  );
}

export default App;

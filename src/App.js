import React, { useEffect } from 'react';
import './App.css';
import MyNavbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/404Page/NotFoundPage';

const App = ()=> {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Home/>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFoundPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

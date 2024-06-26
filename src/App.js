import React from 'react';
import './App.css';
import MyNavbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/home/Home';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Home/>
    </div>
  );
}


export default App;

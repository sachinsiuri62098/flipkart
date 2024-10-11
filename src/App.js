import './App.css';
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from "./pages/HomePage"
import LoginPage from './pages/LoginPage';
import MobilesPage from './pages/MobilesPage';
import FashionPage from './pages/FashaionPage';
import ElectronicsPage from './pages/ElectronicsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' Component={HomePage} />
          <Route exact path='/login' Component={LoginPage} />
          <Route exact path='/mobiles' Component={MobilesPage} />
          <Route exact path='/fashion' Component={FashionPage} />
          <Route exact path='/electronics' Component={ElectronicsPage} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

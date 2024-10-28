import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './homepage/HomePage';
import LoginPage from './pages/LoginPage';
import MobilesPage from './pages/MobilesPage';
import CartPage from './pages/Cart';
import Error_404 from './pages/Error_404';
import ElectronicsPage from './pages/ElectronicsPage';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Header />
        <ScrollTop />
        <Routes>
          <Route exact path='/' Component={HomePage} />
          <Route exact path='/login' Component={LoginPage} />
          <Route exact path='/mobiles' Component={MobilesPage} />
          <Route exact path='/electronics' Component={ElectronicsPage} />
          <Route exact path='/productdetails/:id' Component={ProductDetails} />
          <Route exact path='/cart' Component={CartPage} />
          <Route path='*' Component={Error_404} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// ScrollToTop.js
const ScrollTop = () => {
  const { pathname } = useLocation();
  console.log(pathname)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MobilesPage from './pages/MobilesPage';
import CartPage from './pages/Cart';
import Error_404 from './pages/Error_404';
import ElectronicsPage from './pages/ElectronicsPage';
import ProductDetails from './components/productdetails/ProductDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={HomePage} />
          <Route exact path='/login' Component={LoginPage} />
          <Route exact path='/mobiles' Component={MobilesPage} />
          <Route exact path='/electronics' Component={ElectronicsPage} />
          <Route exact path='/productdetails/:id' Component={ProductDetails} />
          <Route exact path='/cart' Component={CartPage} />
          <Route path='*' Component={Error_404} />
        </Routes>
      </Router>
    </>
  );
}

export default App;



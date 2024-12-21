import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Wishlist from './components/Wishlist'; // Import Wishlist component
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/wishlist" element={<Wishlist />} /> {/* Add route for Wishlist */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

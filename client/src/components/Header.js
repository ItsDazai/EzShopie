import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { logout, isAuthenticated, user } = useAuth0(); // Get user information
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate('/profile'); // You might want to pass user data to profile page
    }
  };

  return (
    <header className="header">
      <h1 className="logo">EzShopie</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li>
            {isAuthenticated ? (
              <button onClick={handleProfileClick} className="profile-icon-button">
                <FontAwesomeIcon icon={faUser} />
              </button>
            ) : (
              <Link to="/login">Log In</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import { WishlistProvider } from './context/WishlistContext'; // Import WishlistProvider

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <CartProvider>
      <WishlistProvider> {/* Wrap App with WishlistProvider */}
        <App />
      </WishlistProvider>
    </CartProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

import React, { createContext, useState } from 'react';

// Create a Context
export const WishlistContext = createContext();

// Create a Provider Component
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => {
      if (!prevItems.find((i) => i.id === item.id)) {
        return [...prevItems, item];
      }
      return prevItems; // Prevent duplicates
    });
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

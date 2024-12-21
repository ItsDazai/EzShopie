import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext); // Access addToCart function
  const { addToWishlist } = useContext(WishlistContext); // Access addToWishlist function

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-name">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button 
        onClick={() => addToCart({ 
          id: product.id, 
          name: product.title, 
          image: product.image, 
          price: product.price 
        })} 
        className="add-to-cart-button">
        Add to Cart
      </button>
      <button 
        onClick={() => addToWishlist({ 
          id: product.id, 
          name: product.title, 
          image: product.image, 
          price: product.price 
        })} 
        className="add-to-wishlist-button"> {/* Ensure this class is applied */}
        Add to Wishlist
      </button>
    </div>
  );
};

export default Product;

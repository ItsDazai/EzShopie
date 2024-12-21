import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext); // Access addToCart function

  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlistItems.map(item => (
            <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
              <div style={{ flexGrow: 1 }}>
                <h3>{item.name}</h3> {/* Display product name */}
                <p>Price: ${item.price}</p> {/* Display product price */}
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => addToCart(item)} style={{ marginRight: '10px' }}>Add to Cart</button>
                <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;

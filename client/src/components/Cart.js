import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
  // Generate a random delivery charge between 10 and 30
  const deliveryCharge = Math.floor(Math.random() * (30 - 10 + 1)) + 10;

  // Calculate final total including delivery charge
  const finalTotal = totalPrice + deliveryCharge;

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
              <div style={{ flexGrow: 1 }}>
                <h3>{item.name}</h3> {/* Display product name */}
                <p>Price: ${item.price}</p> {/* Display product price */}
                <p>Quantity: {item.quantity}</p> {/* Display quantity */}
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px' }}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {/* Display Total Price and Delivery Charge */}
      {cartItems.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <h3>Delivery Charge: ${deliveryCharge.toFixed(2)}</h3>
          <h2>Final Total: ${finalTotal.toFixed(2)}</h2>
          {/* Checkout Button */}
          <button onClick={() => console.log('Proceed to Checkout')} className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;

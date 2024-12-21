// src/components/Checkout.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <p>Your cart is empty. Please add items to your cart before checking out.</p>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      <h3>Order Summary</h3>
      <div className="checkout-summary">
        {cartItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.image} alt={item.title} className="checkout-item-image" />
            <div className="checkout-item-details">
              <h4>{item.title}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      {/* Here you could add billing details form */}
      <button className="checkout-button">Complete Purchase</button>
    </div>
  );
};

export default Checkout;

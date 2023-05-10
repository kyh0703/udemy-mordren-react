import React, { useContext } from 'react';

import './Checkout.scss';
import { CartContext } from '../../contexts/CartContext';

import CheckOutItem from '../../components/checkout/CheckOutItem';

function Checkout(props) {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Descriptionn</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  );
}

export default Checkout;

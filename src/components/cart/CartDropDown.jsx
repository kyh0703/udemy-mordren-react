import React from 'react';

import Button from '../button/Button';

import './CartDropDown.scss';

const CartDropdown = () => (
  <div className='cart-dropdown-container'>
    <div className='cart-items' />
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;

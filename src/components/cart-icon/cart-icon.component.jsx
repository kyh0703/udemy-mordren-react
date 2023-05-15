import React, { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

function CartIcon(props) {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;

import { CART_ACTION_TYPES } from './cart.types';

const CATEGORY_INITAIL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CATEGORY_INITAIL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};

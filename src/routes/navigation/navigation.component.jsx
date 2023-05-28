import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.util';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

function Navigation(props) {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
}

export default Navigation;

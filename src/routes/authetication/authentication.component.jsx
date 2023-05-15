import React from 'react';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthContainer } from './authentication.styles';

function SignIn(props) {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
}

export default SignIn;

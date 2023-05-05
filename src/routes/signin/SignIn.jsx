import React from 'react';
import {
  signInWithgGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/Firebase';

function SignIn(props) {
  const logGoogleUser = async () => {
    const { user } = await signInWithgGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in google</button>
    </div>
  );
}

export default SignIn;

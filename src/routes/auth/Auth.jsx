import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/Firebase';

import './Auth.scss';
import SignUpForm from '../../components/signup/SignUpForm';
import SignInForm from '../../components/signin/SignInForm';

function SignIn(props) {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className='auth-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default SignIn;

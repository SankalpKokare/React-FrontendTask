
import { useAuth0 } from '@auth0/auth0-react';

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  );
};

export default SignIn;

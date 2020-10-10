import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  return (
    <div className='auth'>
      <div className='auth__container'>
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            name='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={() => console.log('login')}
            type='submit'
            className='auth__signInButton'
          >
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          onClick={() => history.push('/signup')}
          className='auth__registerButton'
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Signin;

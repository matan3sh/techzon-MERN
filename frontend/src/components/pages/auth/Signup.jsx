import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const history = useHistory();

  return (
    <div className='auth'>
      <div className='auth__container'>
        <h1>Sign Up</h1>
        <form>
          <h5>Username</h5>
          <input
            name='username'
            type='text'
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <h5>Email</h5>
          <input
            name='email'
            type='email'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <h5>Password</h5>
          <input
            name='password'
            type='password'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <h5>Confirm Password</h5>
          <input
            name='confirmPassword'
            type='password'
            value={user.confirmPassword}
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
          />
          <button
            onClick={() => console.log('login')}
            type='submit'
            className='auth__signInButton'
          >
            Sign Up
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          onClick={() => history.push('/signin')}
          className='auth__registerButton'
        >
          Sign Into your Account
        </button>
      </div>
    </div>
  );
};

export default Signup;

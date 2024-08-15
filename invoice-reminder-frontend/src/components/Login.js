import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';  // useNavigate instead of useHistory
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();  // useNavigate instead of useHistory

  const responseGoogle = async (response) => {
    try {
      const { credential } = response;
      // Send the token to the backend to validate and create a session
      const res = await axios.post('/auth/google/callback', {
        token: credential,
      });

      // Store user info in local storage
      localStorage.setItem('user', JSON.stringify(res.data));

      navigate('/invoices');  // navigate instead of history.push
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div>
        <h2>Login</h2>
        <GoogleLogin
          onSuccess={responseGoogle}
          onError={() => {
            console.error('Login Failed');
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;

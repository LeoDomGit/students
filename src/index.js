import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GoogleOAuthProvider clientId="161063259833-smgqmto3hh82f08fvjcqs3b1volfinkf.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);


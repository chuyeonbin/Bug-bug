import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import LoginAuth from './service/auth';

const loginAuth = new LoginAuth();

ReactDOM.render(
  <React.StrictMode>
    <App loginAuth={loginAuth} />
  </React.StrictMode>,
  document.getElementById('root')
);

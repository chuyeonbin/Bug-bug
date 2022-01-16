import React from 'react';

function LoginModal({ loginAuth, onModal }) {
  const onLogin = event => {
    loginAuth.login(event.target.name);
  };
  return (
    <div>
      <button name="github" onClick={onLogin}>
        Github 로그인
      </button>
      <button name="google" onClick={onLogin}>
        Google 로그인
      </button>
      <button name="facebook" onClick={onLogin}>
        Facebook 로그인
      </button>
    </div>
  );
}

export default LoginModal;

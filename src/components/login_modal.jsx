import React from 'react';

function LoginModal({ onModal }) {
  return (
    <div>
      <button onClick={onModal}>X</button>
      <button>Github 로그인</button>
      <button>Google 로그인</button>
      <button>Naver 로그인</button>
    </div>
  );
}

export default LoginModal;

import React, { useState } from 'react';
import LoginModal from './login_modal';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header>
      <img src="/logo.png" alt="logo" width="50px" />
      <h1>Bug-bug</h1>
      <button onClick={handleModal}>로그인</button>
      {showModal && <LoginModal onModal={handleModal} />}
    </header>
  );
}

export default Header;

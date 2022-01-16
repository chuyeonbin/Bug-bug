import React, { useEffect, useState } from 'react';
import { auth } from '../service/firebase';
import LoginModal from './login_modal';

function Header({ loginAuth }) {
  const [showModal, setShowModal] = useState(false);
  const [inout, setInout] = useState(true);

  const handleClickModal = () => {
    setShowModal(!showModal);
  };

  const onLogOut = () => {
    loginAuth.logOut();
  };

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setShowModal(false);
        setInout(false);
      } else {
        setInout(true);
      }
    });
  }, []);

  return (
    <header>
      <img src="/logo.png" alt="logo" width="50px" />
      <h1>Bug-bug</h1>
      {inout === true ? (
        <button onClick={handleClickModal}>로그인</button>
      ) : (
        <button onClick={onLogOut}>로그아웃</button>
      )}
      {showModal && (
        <LoginModal loginAuth={loginAuth} onModal={handleClickModal} />
      )}
    </header>
  );
}

export default Header;

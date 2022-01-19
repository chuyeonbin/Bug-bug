import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { auth } from '../service/firebase';
import LoginModal from './login_modal';

const StyledHeader = styled.header`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  font-size: 22px;
  background: none;
  cursor: pointer;
`;

const Header = ({ loginAuth }) => {
  const [showModal, setShowModal] = useState(false);
  const [inout, setInout] = useState(true);

  const handleClickModal = onOff => {
    setShowModal(onOff);
  };

  const onLogOut = () => {
    loginAuth.logOut();
  };

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setShowModal(false);
        setInout(false);
      } else {
        setInout(true);
      }
    });
  }, []);

  return (
    <StyledHeader>
      <StyledLogo>
        <img src="/logo.png" alt="logo" width="50px" />
        <h1>Bug-bug</h1>
      </StyledLogo>
      {inout === true ? (
        <StyledButton onClick={() => handleClickModal(true)}>
          로그인
        </StyledButton>
      ) : (
        <>
          <StyledButton onClick={onLogOut}>로그아웃</StyledButton>
        </>
      )}
      {showModal && (
        <LoginModal loginAuth={loginAuth} handleClickModal={handleClickModal} />
      )}
    </StyledHeader>
  );
};

export default Header;

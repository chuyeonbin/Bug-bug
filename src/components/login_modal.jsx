import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledLoginModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
`;

const StyledButton = styled.button`
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid grey;
  background: ${props => props.color || 'white'};
  cursor: pointer;
`;

const LoginModal = ({ loginAuth, handleClickModal }) => {
  const onLogin = event => {
    loginAuth.login(event.target.name);
  };
  return (
    <Wrapper>
      <StyledLoginModal>
        <StyledButton color="#272e33" name="github" onClick={onLogin}>
          Github 로그인
        </StyledButton>
        <StyledButton name="google" onClick={onLogin}>
          Google 로그인
        </StyledButton>
        <StyledButton color="#1569DA" name="facebook" onClick={onLogin}>
          Facebook 로그인
        </StyledButton>
        <StyledButton name="close" onClick={() => handleClickModal(false)}>
          X
        </StyledButton>
      </StyledLoginModal>
    </Wrapper>
  );
};

export default LoginModal;

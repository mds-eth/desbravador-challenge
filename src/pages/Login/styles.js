import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  background-color: #2b2b2b;
`;

export const LoginContainer = styled.div`
  width: 480px;
  height: 380px; 
  padding: 20px 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  @media(max-width: 680px) {
    width: 85%;
  }
`;

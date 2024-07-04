import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`;

export const LoginContainer = styled.div`
  width: 480px;
  height: auto;
  padding: 20px 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: #2b2b2b;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
      box-sizing: border-box;
    }

    input:focus {
      outline: none;
      border-color: #007BFF;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }

  @media(max-width: 680px) {
    width: 85%;
    padding: 20px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  width: 100%;
  
`;

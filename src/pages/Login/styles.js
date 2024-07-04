import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 480px;
  height: 380px; 
  padding: 20px 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #2b2b2b;
  display: flex;
  flex-direction: column;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  @media(max-width: 680px){
    width: 85%;
  }
`
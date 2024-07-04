import styled from 'styled-components';

export const HeaderComponent = styled.header`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: end;
  position: fixed;
  top: 0;
  background-color: #242424;

  svg{
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin-right: 20px;
  }
`;
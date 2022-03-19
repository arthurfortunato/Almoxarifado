import styled from 'styled-components';

export const ButtonContainerStyled = styled.button`
  background: #901b41;
  border-radius: 8px;
  width: 100%;
  height: 60px;

  color: #fff;
  border: none;
  
  font: bold 16px "Nunito", sans-serif;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    filter: brightness(1.3);
  }
`
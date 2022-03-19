import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: #1A202C;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 40px;

  .registeredProducts {
    background: #38A169;

    &:hover {
      background: #2F855A;
    }
  }
`

export const BodyContainer = styled.main`
  display: flex;
  justify-content: space-between;
`

export const InputContainer = styled.main`
  width: 90%;
  margin: 40px;
`

export const Label = styled.label`
  display: flex;
  padding-bottom: 20px;
  font: 500 1.5rem "Nunito", sans-serif;
  color: #fff;
  p {
    color: red;
  }
`

export const Buttons = styled.div`
 padding-left: 40px;

 .edit {
    background: #D69E2E;
    &:hover {
      opacity: 0.8;
    }
 }

 .cancel {
   background: #E53E3E; 

   &: hover {
     background: #C53030;

    }
 }
`


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

  @media(max-width: 1000px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media(max-width: 840px) {
    button {
      display: none
    }
    justify-content: center;
    padding: 20px;
  }
`

export const BodyContainer = styled.main`
  display: flex;
  justify-content: space-between;

  @media(max-width: 740px) {
    flex-direction: column;
  }
`

export const InputContainer = styled.main`
  width: 90%;
  margin: 40px;

  @media(max-width: 740px) {
    width: 95%;
    margin: 10px;
  }
`

export const Label = styled.label`
  display: flex;
  padding-bottom: 20px;
  font: 500 1.5rem "Nunito", sans-serif;
  color: #fff;
  p {
    color: red;
  }

  @media(max-width: 740px) {
    padding-bottom: 10px;
    font-size: 1.2rem;
  }
`

export const Buttons = styled.div`
 padding-left: 40px;

 .cancel {
   background: #E53E3E; 

   &: hover {
     background: #C53030;

    }
 }

 @media(max-width: 740px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 10px;
  }
`


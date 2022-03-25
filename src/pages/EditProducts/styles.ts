import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: #fff;
`;

export const Header = styled.header`
  padding: 100px 40px 50px 0;
  h1 {
    font-size: 3rem;
    text-align: center;
    color: #1a202c;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const BodyContainer = styled.main`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

export const InputContainer = styled.main`
  width: 40%;

  @media (max-width: 740px) {
    width: 95%;
    margin: 10px;
  }
`;

export const Label = styled.label`
  display: flex;
  padding-bottom: 10px;
  font: 500 1.5rem "Nunito", sans-serif;
  color: #1a202c;
  p {
    color: red;
  }

  @media (max-width: 740px) {
    padding-bottom: 10px;
    font-size: 1.2rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  padding-left: 40px;
  margin: 40px;
  width: 30%;

  button {
    height: 100px;
    width: 250px;
    font-size: 1.3rem;
  }

  .edit {
    background: #ecc94b;
    &:hover {
      background: #d69e2e;
    }
  }

  .cancel {
    background: #e53e3e;
    margin-left: 20px;

    &: hover {
      background: #c53030;
    }
  }

  @media (max-width: 740px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 10px;
  }
`;

export const TextareaStyled = styled.textarea`
    border-radius: 5px;
    color: #29292e;
    font-size: 1.2rem;
    font-weight: 400;
    border: 1px solid gray;
    width: 100%;
    padding:5px 10px;
    outline: 0;
`;

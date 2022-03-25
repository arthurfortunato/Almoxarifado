import styled from "styled-components";

export const ButtonModal = styled.button`
  border: 0;
  cursor: pointer;
  background: #fff;
  color: #901b41;
  font: 700 1rem "Roboto", sans-serif;
  padding-left: 10px;
`;

export const HeaderModalStyled = styled.header`
  background: #901b41;
  color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;


  div {
    display: flex;
    align-items: center;
    margin-left: 20px;

    h2 {
      font: 700 1.3rem "Roboto", sans-serif;
      margin-left: 15px;
    }  
  }

  button {
    background: #901b41;
    border: 0;
    color: #a2a2a2;
    cursor: pointer;
  }

  @media (max-width: 730px) {
    display: none;
  }
`;

export const BodyModalStyled = styled.main`
  
  margin: 30px;
  border-radius: 30px;
  padding: 20px;
  background: rgba(144, 27, 65, 0.1);

  h2 {
    font: 500 1.3rem "Roboto", sans-serif;
    padding-bottom: 10px;
    color: #901b41;
  }

  @media (max-width: 730px) {
    background: #fff;
  }
`;

export const InputModalStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 90%;

    @media (max-width: 730px) {
      width: 100%;
    }
  }

  label {
    font: 500 0.9rem "Roboto", sans-serif;
    color: #901b41;
  }

  select {
    width: calc(100% - 28px);
    height: 50px;
    padding-left: 16px;
    border-radius: 8px;
    border: 1px solid gray;
    background: #fff;
    margin-bottom: 16px;
    outline: 0;
    font: 400 0.9rem "Roboto", sans-serif;
    cursor: pointer;

    @media (max-width: 730px) {
      width: 100%;
    }
  }

  @media (max-width: 730px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

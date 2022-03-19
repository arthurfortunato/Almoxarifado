import styled from 'styled-components';

export const ContainerStyled = styled.main`
  display: flex;
`
export const AsideContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 150px;
  background: #901b41;

  @media(max-width: 735px) {
      display: none
    }
`

export const AsideBodyWelcome = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  strong {
      max-width: 500px;
      font: 700 4rem "Roboto", sans-serif;
      color: #f8f8f8;

      @media(max-width: 1190px) {
      transition: 1.8s all;
      font-size: 3rem;
    }
    }
    
    p {
      max-width: 700px;
      font: 400 1.3rem "Nunito", sans-serif;
      color: #f8f8f8;
      padding: 20px;

      @media(max-width: 1190px) {
      transition: 1.8s all;
      font-size: 1rem;
    }
    }
`

export const AsideBodyLogo = styled.aside`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .secti {
    width: 200px;
    height: 80px;
    padding: 20px;

    @media(max-width: 1190px) {
      transition: 1.8s all;
      width: 150px;
      height: 50px;
    }
  }
  
  .faperj {
    width: 200px;
    height: 80px;
    padding: 20px;

    @media(max-width: 1190px) {
      transition: 1.8s all;
      width: 150px;
      height: 50px;
    }
  }
`

export const BodyContainerStyled = styled.main`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 100px;
`

export const LoginStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    padding: 20px;
    h2 {
      font: 400 1.3rem "Roboto", sans-serif;
      color: #29292e;
      padding-bottom: 20px;

      @media(max-width: 1190px) {
      transition: 1.8s all;
      font-size: 1rem;
    }
    }
    label {
      font: 500 1rem "Nunito", sans-serif;
      padding-left: 5px;
      color: #29292e;
    }
  }
`
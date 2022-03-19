import styled from 'styled-components';

export const Container = styled.div`
    height: 3.2rem;
    background: #fff;
    border: 1px solid #a8a8b3;
    border-radius: 5px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    
    input {
      color: #29292e;
      font-size: 1.2rem;
      font-weight: 400;
      background: transparent;
      border: 0;
      width: 100%;
      padding:0 20px;
      outline: 0;
    }

    input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active  {
        -webkit-box-shadow: 0 0 0 30px white inset;
    }
`;
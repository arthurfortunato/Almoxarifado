import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: #1A202C;
`;

export const Header = styled.header`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;


  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: #fff;
  }

  button {
    padding: 12px 24px;
  }

  @media(max-width: 930px) {
    h1 {
      font-size: 1.2rem;
    }
  }
  @media(max-width: 715px) {
    h1 {
      display: none;
    }
    justify-content: flex-end;
    button {
      font-size: 1rem;
    }
  }
`
export const BodyContainer = styled.main`
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`

export const Table = styled.table`
 width: 90%;
 text-align: left;
 border-collapse: collapse;
 margin-top: 50px;

 thead th {
   color: #485564;
   font-weight: normal;
   font-size: 1.2rem;
   padding: 1rem 2rem;
   text-align: left;
  }

  tbody tr {
    transition: 0.3s;
    &:hover {
      background: #485564;
    }
  }
  
  tbody td {
  border-top: 1px solid #485564;
  color: #fff;
  font-weight: normal;
  padding: 1rem 2rem;
 }

 td button {
   display: flex;
   align-items: center;
   padding: 12px 15px;
 
   border: 0;
   border-radius: 5px;
   cursor: pointer;
   transition: 0.4s;
  }

  .edit {
    background: #ECC94B;
    &:hover {
      background: #D69E2E;
    }
 }
  .delete {
    background: #e53e3e;
    &:hover {
      background: #C53030;
    }
 }
`




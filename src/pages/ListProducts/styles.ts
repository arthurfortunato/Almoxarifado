import styled from 'styled-components';

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
`

export const BodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  `
  
  export const Table = styled.table`
  width: 60%;
  text-align: left;
  border-collapse: collapse;
  margin-top: 50px;
  
  thead th {
    color: #1a202c;
    font-weight: normal;
    font-size: 1rem;
    padding: 1rem 2rem;
    text-align: left;
  }
  
  tbody tr {
    transition: 0.6s;
    &:hover {
      background: rgba(144, 27, 65, 0.5);
    }
  }
  
  tbody td {
    border-top: 1px solid #485564;
    color: #1a202c;
    font-size: 0.8rem;
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




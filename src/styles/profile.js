import styled from 'styled-components';

const Wrapper = styled.section`align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  strong {
    margin: 30px auto;
  }

  a {
    text-decoration: none;

    & + a {
      margin-bottom: 10px;

      /* margin-top: 10px; */
    }
  }

  button {
    align-items: center;
    background: #289ea8;
    border: 0;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    display: flex;
    font-family: Poppins , sans-serif;
    font-weight: 400;
    gap: 16px;
    height: 2.5rem;
    justify-content: center;
    line-height: 1;
    margin-bottom: 1.5rem;
    margin-top: auto;
    max-width: 250px;
    min-width: 230px;
    padding: 0 32px;
    text-transform: lowercase;
    transition: filter 0.2s;

    /* & + button {
      margin-bottom: 1.5rem;
    } */

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    &:not( :disabled ):hover {
      filter: brightness(0.9);
    }

    & + :last-child {
      background: #c10644;
      margin-bottom: 50px;
    }
  }

`;

export default Wrapper;

import styled from 'styled-components';

const RecipesContainer = styled.div`align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 57px auto 0;
  max-width: 1180px;
  position: relative;
  transition: opacity 400ms ease;
  z-index: 0;

  @media only screen and ( max-width : 479px ) {
    margin-top: 25px;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export default RecipesContainer;

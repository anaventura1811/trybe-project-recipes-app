import styled from 'styled-components';

const CarouselWrapper = styled.div`background-color: white;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin: 0 auto;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  /* max-width: calc(100vw); */

  /* scroll-behavior: smooth; */
  width: 100%;

  .card-grid {
    padding: 0;

    div li {
      list-style-type: none;

      div {
        margin: 0 10px 9px auto;
      }
    }

    img {
      object-fit: cover;
    }
  }
`;

export const CarouselCardContainer = styled.div`align-content: normal;
  align-items: center;
  bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 80px;
  max-width: 100%;

  a {
    color: black;
    text-decoration: none;
  }
`;

export default CarouselWrapper;

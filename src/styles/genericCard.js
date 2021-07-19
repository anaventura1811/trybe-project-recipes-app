import styled from 'styled-components';

const CardContainer = styled.div`margin: 8px 8px 32px;
  min-height: 150px;
  outline: 0;
  position: relative;
  width: 8rem;

  .img-wrapper {
    border-radius: 4px;
    height: 0;
    overflow: hidden;
    padding-bottom: 100%;
    position: relative;

    img {
      bottom: auto;
      height: 100%;
      left: auto;
      min-width: 100%;
      object-fit: cover;
      position: absolute;
      right: 50%;
      top: 0;
      transform: translateX(50%);
      width: auto;
    }
  }

  .card-info {
    align-content: center;
    align-items: center;
    display: flex;
    flex-wrap: nowrap;
    font-size: 0.9rem;
    justify-content: center;
    margin: 10px auto 6px;
    z-index: 2;
  }

  @media only screen and ( max-width : 767px ) {
    align-items: center;
    margin: 0 auto;
  }
`;

export default CardContainer;

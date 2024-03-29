import styled from "styled-components";

export const EcommercePageStyles = styled.div`
  .card:hover {
    @media (min-width: 991px) {
      transform: scale(1.1);
    }
  }

  .btn-group {
    position: sticky;
    top: 63px;
    z-index: 1;
    width: 100%;

    @media (min-width: 991px) {
      top: 74px;
    }
  }

  .main-bx {
    padding-top: 63px;

    @media (min-width: 991px) {
      padding-top: 74px;
    }

    .carousel.slide {
      margin-top: 20px;
    }
  }
`;

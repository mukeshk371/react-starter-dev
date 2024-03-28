import styled from "styled-components";

export const EcommerceCarouselStyles = styled.div`
  .carousel-caption {
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
    left: 0;
    bottom: 0;
  }

  .carousel-inner {
    border-radius: 10px;
  }

  img {
    height: 250px;

    @media(min-width: 991px) {
      height: 400px;
    }
  }
`;

import styled from "styled-components";

export const OffcanvasStyles = styled.div`
  .offcanvas {
    position: fixed;
    top: 0;
    left: -100%;
    height: 100%;
    width: 300px;
    background-color: #fff;
    transition: left 0.3s ease-in-out;

    &.open {
      left: 0;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .content {
      padding: 20px;
      h2 {
        margin-top: 0;
      }
    }

    .closeButton {
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      background: none;
      cursor: pointer;
    }
  }
`;

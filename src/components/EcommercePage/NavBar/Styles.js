import styled from "styled-components";

export const NavBarStyles = styled.div`
  .navbar {
    position: fixed;
    width: 100%;
  }

  form {
    position: relative;

    > svg {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      color: #000;
    }
  }
`;

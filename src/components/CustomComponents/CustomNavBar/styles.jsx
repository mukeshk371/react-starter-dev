import styled from "styled-components";

export const CustomNavBarStyles = styled.div`
  .navbarCustom {
    background-color: #cff4fc;
    height: 62px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;

    a {
      display: flex;
      align-items: center;
      color: rgb(33, 37, 41);
      font-size: 20px;
      text-decoration: none;
    }

    > div {
      height: 100%;
      margin-left: 16px;
      padding: 0 16px;
      cursor: pointer;
      font-weight: 600;
      display: flex;
      align-items: center;
    }
  }

  .activeTab {
    background-color: #f0f0f0;
  }
`;

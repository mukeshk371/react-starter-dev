import styled from "styled-components";

export const NavbarTabsActiveOnScrollStyles = styled.div`
  .my-navbar {
    background-color: #333;
    overflow: hidden;

    .my-navbar-menu {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;

      .my-navbar-item {
        padding: 15px;
        color: white;

        &:hover {
          background-color: #555;
        }

        &.my-active {
          background-color: #555;
        }
      }
    }
  }

  .my-dropdown {
    position: relative;

    .my-dropbtn {
      background-color: inherit;
      color: white;
      padding: 15px;
      border: none;
      cursor: pointer;
    }

    .my-dropdown-content {
      display: none;
      position: absolute;
      background-color: #333;
      min-width: 160px;
      z-index: 1;

      div {
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        display: block;

        &:hover {
          background-color: #555;
        }
      }
    }

    &:hover {
      .my-dropdown-content {
        display: block;
      }
    }
  }
`;

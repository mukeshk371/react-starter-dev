import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavbarLogo = styled.div`
  color: white;
  font-size: 24px;
`;

export const NavbarItems = styled.ul`
  display: flex;
  list-style-type: none;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const NavbarItem = styled.li`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
`;

export const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  background-color: #333;
  padding: 10px;
  margin-top: 5px;
  list-style-type: none;
  z-index: 1;

  ${(props) => props.open && `
    display: block;
  `}
`;

export const DropdownItem = styled.li`
  margin-bottom: 5px;
`;

export const DropdownLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

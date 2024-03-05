import React, { useState } from 'react';
import {
  NavbarContainer,
  NavbarLogo,
  NavbarItems,
  NavbarItem,
  NavbarLink,
  HamburgerMenu,
  DropdownMenu,
  DropdownItem,
  DropdownLink
} from './Styles';

const CustomNavbarDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <NavbarContainer>
      <NavbarLogo>Logo</NavbarLogo>
      <NavbarItems>
        <NavbarItem>
          <NavbarLink href="#">Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink
            onClick={() => handleDropdownClick(1)}
          >
            Dropdown 1
          </NavbarLink>
          <DropdownMenu open={openDropdown === 1}>
            <DropdownItem><DropdownLink href="#">Dropdown 1 Option 1</DropdownLink></DropdownItem>
            <DropdownItem><DropdownLink href="#">Dropdown 1 Option 2</DropdownLink></DropdownItem>
            <DropdownItem><DropdownLink href="#">Dropdown 1 Option 3</DropdownLink></DropdownItem>
          </DropdownMenu>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink
            onClick={() => handleDropdownClick(2)}
          >
            Dropdown 2
          </NavbarLink>
          <DropdownMenu open={openDropdown === 2}>
            <DropdownItem><DropdownLink href="#">Dropdown 2 Option 1</DropdownLink></DropdownItem>
            <DropdownItem><DropdownLink href="#">Dropdown 2 Option 2</DropdownLink></DropdownItem>
            <DropdownItem><DropdownLink href="#">Dropdown 2 Option 3</DropdownLink></DropdownItem>
          </DropdownMenu>
        </NavbarItem>
      </NavbarItems>
      <HamburgerMenu onClick={() => setOpenDropdown(null)}>☰</HamburgerMenu>
    </NavbarContainer>
  );
};

export default CustomNavbarDropdown;

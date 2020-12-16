import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import './Home.css'

    const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor : '#262431'}} dark expand="md">
        <NavbarBrand href="/">Job Portol</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav  className="ml-auto" navbar >
            <NavItem   >
              <NavLink style={{color : 'white'}} href="/components/">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color : 'white' ,}} href="https://github.com/reactstrap/reactstrap">Register</NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

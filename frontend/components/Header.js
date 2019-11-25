import React, { useState } from 'react';
 import {APP_NAME} from '../config'
 import Link from 'next/link'
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
  DropdownItem
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen);
  } 

  return (

    <div>
      <Navbar color="light" light expand="md">
      
              <Link href="/">
              <NavLink className="font-weight-bold">
            <a>{APP_NAME}</a>
            </NavLink>
            </Link>
           

         

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>

            <NavItem> 
              <Link href="/signup">
              <NavLink>
            <a>Signup</a>
            </NavLink>
            </Link>
            </NavItem>
            <NavItem> 
              <Link href="/signin">
              <NavLink>
            <a>Signin</a>
            </NavLink>
            </Link>
            </NavItem>

            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>

  );
}

export default Header;
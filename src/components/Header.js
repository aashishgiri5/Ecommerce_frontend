import React, { Fragment } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { isAunthenticated } from './backend/Auth';

function Header() {
  const isLoggedIn=isAunthenticated();
  console.log(isLoggedIn)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

  <Navbar.Brand href="#home">TechNova-ecommerce</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="/aboutus">About Us</Nav.Link>
       <Nav.Link href="/adminDashboard">Admin</Nav.Link>
       {!isLoggedIn &&(
         <Fragment>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
         </Fragment>
       )}

      <Nav.Link href="/products">Products</Nav.Link>
       <Nav.Link href="/category">Category</Nav.Link>
      <NavDropdown title="User Options" id="collasible-nav-dropdown">
{isLoggedIn&&(<NavDropdown.Item href="/logout">Logout</NavDropdown.Item>)}
        
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>

</Navbar>
        </div>
      
    )
}

export default Header

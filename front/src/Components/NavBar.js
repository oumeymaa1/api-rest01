import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">MERN APP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
            <Nav.Link href="/*">Error</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
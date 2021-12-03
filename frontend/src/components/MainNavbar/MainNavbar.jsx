import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartModal from '../Cart/CartModal'

const MainNavbar = ({ handleCategoryButton, username }) => {

    const handleClick = () => handleCategoryButton();

    if (!username) {
        username = 'Guest';
    }

    return (
        <Navbar bg="light" expand="lg" className="d-flex">
            <Navbar.Brand href="/index.html" className="ms-4">Hi {username}, Welcome to Rainforest!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto h3">
                    <Nav.Link href="/index.html">Home</Nav.Link>
                    <Nav.Link onClick={handleClick}>Categories</Nav.Link>
                </Nav>
                <CartModal />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNavbar

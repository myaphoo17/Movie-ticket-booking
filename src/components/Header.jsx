import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <Navbar expand="lg" fixed="top" className="my-navbar">
            <Container>
                <Navbar.Brand href="#" className="myTheatreBrand">📽️ My Theatre</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;

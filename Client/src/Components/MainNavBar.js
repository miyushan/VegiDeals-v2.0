import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CommonStyles.css';
import { Navbar, Nav, Container } from "react-bootstrap";

function MainNavBar() {
    const [scroll, setScroll] = useState(true);

    const style = {
        backgroundColor: "#202020",
        // animation: "ease-out"
    }

    const onScroll = () => {
        // console.log(window.scrollY);
        if (window.scrollY > 40) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }
    window.addEventListener('scroll', onScroll);

    return (

            <Navbar collapseOnSelect style={scroll ? style : null} className="b_outer-nav " expand="sm"  variant="dark">
                <Container>
                    <Navbar.Brand className="b_header-brand-name" href="home">VegiDeals</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="home" className='b_nav-title nav-home d-block'>HOME</Nav.Link>
                            <Nav.Link href="products" className='b_nav-title nav-products'>PRODUCTS</Nav.Link>
                            <Nav.Link href="cart" className='b_nav-title nav-cart'>CART</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    );
}

export default MainNavBar;

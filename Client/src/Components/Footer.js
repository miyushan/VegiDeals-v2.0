import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

import { ReactComponent as Fb } from '../Media/facebook-f-brands.svg';
import { ReactComponent as Whtsp } from '../Media/whatsapp-brands.svg';

function Footer() {
    return (
        <>
            <div className="b_footer-outer">
                <Container>
                    <Row className="align-items-start">
                        <Col sm={6} className="b_footer-1 order-2 order-sm-1 mb-2 mb-sm-0">
                            <a className="b_brand-name" href="/home">VegiDeals</a>
                        </Col>
                        <Col sm={6} className="b_footer-2 order-1 order-sm-2 d-flex mt-5 mb-4 mt-sm-0 mb-sm-0">
                            <div className='b_footer-2-1'>
                                <div className="b_quick-links mb-2 mb-sm-0">QUICK LINKS</div>
                                <div><a className="b_quick-link-item" href="home">HOME</a></div>
                                <div><a className="b_quick-link-item" href="products">PRODUCTS</a></div>
                                <div><a className="b_quick-link-item" href="cart">CART</a></div>
                                {/* <div><a className="b_quick-link-item" href="about-us">ABOUT US</a></div>
                                <div><a className="b_quick-link-item" href="contact-us">CONTACT US</a></div>
                                <div><a className="b_quick-link-item" href="branches">BRANCHES</a></div> */}
                            </div>
                        </Col>
                        {/* </Row> */}

                        <Col sm={12} className='order-4 order-sm-3'>
                            <hr />
                        </Col>

                        {/* <Row className="align-items-start"> */}
                        <Col sm={9} className="b_footer-4 order-5 order-sm-4 b_copyright mb-4 mb-sm-0">Copyright © 2021 All Rights Reserved by<br />Miyushan</Col>
                        <Col sm={3} className="b_footer-5 order-3 order-sm-5 b_copyright d-flex mb-4 mb-sm-0">
                            <a href="#" className='b_button'><Whtsp className="b_sign-out-btn" height="18px" /></a>
                            <a href="#" className="b_button"><Fb height="18px" /></a>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}

export default Footer;
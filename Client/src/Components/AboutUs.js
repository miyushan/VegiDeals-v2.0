import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from "react-bootstrap";

import DBoy from '../Media/deliveryBoy.png';

function AboutUs() {
    return (
        <>
            <div id="aboutUs" className="b_aboutUs-container">
                <Container className="b_add-curser">

                    <Row className='justify-content-center align-items-center'>
                        <Col sm>
                            <Col sm className='text-center'>
                                <img className="b_shopImage" src={DBoy} alt="shop" />
                            </Col>
                        </Col>
                        <Col>
                            <Col>
                                <div className="b_aboutUs-col-1">About Us</div>
                            </Col>
                            <Col className="b_aboutUs-description">
                                We are VegiDeals and here to fulfill your needs of Vegetables virtually. You can visit our site, choose whatever you need, and get them to your doorstep with our efficient service. We are a team that considers client satisfaction. So you can feel the best food ordering experience.
                            </Col>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    );
}

export default AboutUs;
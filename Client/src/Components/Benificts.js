import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CommonStyles.css';
import { Container, Row, Col } from "react-bootstrap";

import { ReactComponent as Fast } from '../Media/shipping-fast-solid.svg';
import { ReactComponent as Online } from '../Media/clock-solid.svg';
import { ReactComponent as Caring } from '../Media/award-solid.svg';
import { ReactComponent as Fresh } from '../Media/carrot-solid.svg';
import { ReactComponent as Quick } from '../Media/phone-solid.svg';


function Benificts() {
    return (
        <>

            <Container className="b_outer-benificts" fluid>
                <Row xs={1} sm={2} md={3} lg={5} className="g-3 g-lg-5">
                    <Col className='d-block align-content-center'>
                        <Row><Fast className="b_benifict-icon" /></Row>
                        <div className="add-curser text-center text-white">Fast Delivery</div>
                    </Col>
                    <Col className='d-block align-content-center'>
                        <Row><Online className="b_benifict-icon" /></Row>
                        <div className="add-curser text-center text-white">24 * 7 Service</div>
                    </Col>
                    <Col className='d-block align-content-center'>
                        <Row><Caring className="b_benifict-icon" /></Row>
                        <div className="add-curser text-center text-white">Friendly Customer Care</div>
                    </Col>
                    <Col className='d-block align-content-center'>
                        <Row><Fresh className="b_benifict-icon" /></Row>
                        <div className="add-curser text-center text-white">Fresh Vegetables</div>
                    </Col>
                    <Col className='d-block align-content-center'>
                        <Row><Quick className="b_benifict-icon" /></Row>
                        <div className="add-curser text-center text-white">Quick Response</div>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Benificts;
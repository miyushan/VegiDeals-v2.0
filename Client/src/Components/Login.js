import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CommonStyles.css';
import { Col, Container, Row, Button } from "react-bootstrap";
import LoginForm from '../Components/LoginForm';
import { ReactComponent as Admin } from '../Media/icons/users-cog-solid.svg';

function Login() {
    return (
        <>
            <Container id="login" fluid>
                <Row>
                    <Col xs={12} md={6} className="b_login-left d-flex align-items-center justify-content-center">
                        <h1 className="b_login-header">Online Vegetable<br />Ordering System</h1>
                        <div className="b_admin_login">
                            <a href="db/login"><Admin className="b_admin-login-icon" height="20px" /></a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="b_login-right d-flex align-items-center justify-content-center">

                        <Row className="b_login-row">
                            <Col className="d-block justify-content-center">
                                <div className="b_login-title b_login-title-1 b_add-curser">Welcome to VegiDeals</div>
                                <div className="b_login-title b_login-title-2 b_add-curser">We make you smart</div>
                                <LoginForm />
                            </Col>
                        </Row>

                        <div className="b_create-account">
                            <Button href="register" className="b_create-account-btn" type="submit" variant="success">Create A New Account</Button>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default Login;

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CommonStyles.css';
import { Col, Container, Row, Button } from "react-bootstrap";
import DataBaseLoginForm from '../Components/DataBaseLoginForm';
// import { ReactComponent as Admin } from '../Media/icons/users-cog-solid.svg';

function DataBaseLogin() {
    return (
        <>
            <Container id="dbLogin" fluid>
                <Row className="b_db_admin_login align-items-center">
                    <Col className="d-block b_admin-login">
                        <div className="b_login-title b_login-title-1 b_add-curser">VegiDeals</div>
                        <div className="b_login-title b_login-title-2 b_add-curser">Administrator Login</div>
                        <Row className="justify-content-center align-items-center">
                            <Row className="justify-content-center align-items-center">
                                <DataBaseLoginForm />
                            </Row>
                        </Row>
                    </Col>
                </Row>

                <div className="b_create-account">
                    <Button href="/login" className="b_create-account-btn" type="submit" variant="success">Customer Login</Button>
                </div>
            </Container>
        </>
    );
}

export default DataBaseLogin;

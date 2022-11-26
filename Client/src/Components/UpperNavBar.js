import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CommonStyles.css';
import { Container, Button, Col } from "react-bootstrap";
import { ReactComponent as SignOut } from '../Media/sign-out-alt-solid.svg';
// import { UserContext } from '../Context/UserContext';

function UpperNavBar() {

    // const { setIsLogedIn } = useContext(UserContext);

    const [userName, setUserName] = useState('');
    const [gender, setGender] = useState('');
    const [branchName, setBranchName] = useState('');

    useEffect(() => {

        try {
            //get data in the session
            let data = localStorage.getItem('userDetails');
            data = JSON.parse(data);
            // console.log("Successful Login!");

            setUserName(data.firstName);
            setGender(data.gender);
            setBranchName(data.branchName);
        }
        catch (err) {
            console.log('Need to loged in');
        }

    }, [])

    const statement = () => {
        if (gender === 'Male') {
            return 'Mr.';
        } else if (gender === 'Female') {
            return 'Mrs/Miss.';
        }
    }

    const clearUser = () => {
        // setIsLogedIn(false);

        localStorage.removeItem('userDetails');
        localStorage.removeItem('cartDetails');
        setUserName('');
        setGender('');
        setBranchName('');
    }

    return (
        <div className='d-flex b_navbar-u'>
            <Container className="d-flex justify-content-center align-items-center">
                <Col className="b_add-curser b_nav-title-1">{branchName}</Col>
                <Col className="text-center b_nav-title-1">Welcome {statement()} {userName}</Col>
                <Col className="b_nav-title-1 d-flex justify-content-end">
                    <Button onClick={clearUser} href="login" className="b_log-out-btn" variant="success">
                        <SignOut className="sign-out-btn" style={{marginRight: '3px'}} height="12px" />Log Out
                    </Button>
                </Col>
            </Container>
        </div >
    );


}

export default UpperNavBar;




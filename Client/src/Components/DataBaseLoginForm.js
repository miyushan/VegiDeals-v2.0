import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CommonStyles.css';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../Context/UserContext';

import { Form, Button } from "react-bootstrap";

export default function DataBaseLoginForm() {
    const navigate = useNavigate();

    const { setIsLogedIn } = useContext(UserContext);

    const [contactNumber, setContactNumber] = useState('');
    const [password, setPassword] = useState('');

    const loginNumber = process.env.REACT_APP_LOGIN_NUMBER;
    const loginPW = process.env.REACT_APP_LOGIN_PW;

    const onChangeContactNumber = (e) => {
        setContactNumber(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        // customers.forEach(customer => {
        console.log(loginNumber, loginPW);

        if (contactNumber === loginNumber && password === loginPW) {
            navigate('/db/branch');
            console.log("DB Login success!");

            //Session object
            let admin = {
                admin_contactNumber: contactNumber
            }

            setIsLogedIn(true);

            //Add the session
            localStorage.setItem('adminUserDetails', JSON.stringify(admin));
        } else if (contactNumber === '' && password !== '') {
            alert('Phone number is required!');
        } else if (contactNumber === '' && password === '') {
            alert('Login fields are empty!');
        } else if (contactNumber === loginNumber && password !== loginPW) {
            if (password === '') {
                alert('Password is Empty!');
            } else {
                alert('Password is wrong!');
            }
        } else {
            alert('Invalid Login!')
        }

        // })
    }



    return (
        <>
            <Form className="b_admin_login-form" onSubmit={onSubmit} method="post">

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Control className="login-input" type="text" placeholder="Phone Number" variant="success" name="contactNumber" value={contactNumber} onChange={onChangeContactNumber} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className="login-input" type="password" placeholder="Password" variant="success" name="password" value={password} onChange={onChangePassword} />
                </Form.Group>

                <Button href="" className="login-submit-btn login-input" type="submit" variant="success">LOG IN</Button>

            </Form>
        </>
    );


}




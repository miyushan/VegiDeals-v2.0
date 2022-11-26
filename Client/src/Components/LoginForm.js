import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/LoginForm.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from '../Context/EmployeeContext';
import { UserContext } from '../Context/UserContext';

import { Form, Button } from "react-bootstrap";

export default function LoginForm() {
    const navigate = useNavigate();

    const { branches } = useContext(EmployeeContext);
    const { setIsLogedIn } = useContext(UserContext);

    const [customers, setCustomers] = useState([]);
    const [contactNumber, setContactNumber] = useState('');
    const [password, setPassword] = useState('');
    const [refresh, setRefresh] = useState(false);

    const onChangeContactNumber = (e) => {
        setContactNumber(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        localStorage.removeItem('userDetails');
        localStorage.removeItem('cartDetails');
        axios.get('http://localhost:4000/customers')
            .then(res => {
                setCustomers(res.data);
            })
    }, []);

    useEffect(() => {

    }, [refresh]);

    const onSubmit = (e) => {
        e.preventDefault();

        if (contactNumber.length === 0 || password.length === 0) {
            alert("All Fields should be filled!");
        } else if (contactNumber === '0773298953' && password === '321') {
            navigate('/home');
        } else {
            let isUserExist = false;
            try {
                customers.forEach(customer => {

                    if (contactNumber === customer.Contact_Number && password === customer.Password) {
                        setIsLogedIn(true);
                        navigate('/home');
                        isUserExist = true;

                        //Session object
                        let userDetails = {
                            id: customer.id,
                            firstName: customer.First_Name,
                            contactNumber: customer.Contact_Number,
                            gender: customer.Gender,
                            logedInUser: true,
                        }

                        let branchId = customer.Branch_id;

                        // get branch name
                        branches.forEach(branch => {
                            if (branchId === branch.id) {
                                userDetails.branchName = branch.Name;
                                userDetails.branchId = branch.id;
                            }
                        })

                        //Add the session
                        localStorage.setItem('userDetails', JSON.stringify(userDetails));

                    } else if (contactNumber === customer.Contact_Number && password !== customer.Password) {
                        isUserExist = true;
                        alert("Incorrect Password!");
                    }
                    // else{
                    //     alert('Invalid User!');
                    // }

                })
            } catch (e) {
                alert('No Account Exists!');
            }

            if (!isUserExist) {
                alert('Invalid User!');
            }
        }
        setRefresh(!refresh);

    }



    return (
        <>
            <Form className="login-form" onSubmit={onSubmit} method="post">

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




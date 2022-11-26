import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { ReactComponent as Back } from '../../Media/icons/caret-left-solid.svg';
import axios from 'axios';
import './NewDeliveryPerson.css';


function NewDeliveryPerson() {

    const [deliveryPerson, setDeliveryPerson] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [branchName, setBranchName] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    let [isOldDPerson, setIsOldDPerson] = useState(false);
    let [isDPersonAdded, setIsDPersonAdded] = useState(false);


    useEffect(() => {
        console.log('useEffect')
        axios.get('http://localhost:4000/delivery-persons')
            .then(res => res.data)
            .then((res) => {
                setDeliveryPerson(res);
                setIsOldDPerson(false);
            })
    }, [isDPersonAdded]);

    const checkNewProduct = () => {
        deliveryPerson.forEach(dPerson => {

            if (contactNumber === dPerson.Contact_Number) {
                isOldDPerson = true;
                console.log("isOldDeliveryPerson\t" + isOldDPerson);
                console.log("Old DeliveryPerson");
            }

        })

        if (isOldDPerson === false) {
            axios.post('http://localhost:4000/delivery-persons', {
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                salary: salary,
                contactNumber: contactNumber,
                branchName: branchName,
                password: password,
                address: address,
            })

                .then(() => {
                    console.log("New Product created");
                    setFirstName('');
                    setLastName('');
                    setGender('');
                    setSalary('');
                    setContactNumber('')
                    setBranchName('')
                    setPassword('')
                    setAddress('')
                    setIsDPersonAdded(true)
                });
        }
    }

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }
    const onChangeGender = (e) => {
        setGender(e.target.value);
    }
    const onChangeSalary = (e) => {
        setSalary(e.target.value);
    }
    const onChangeContactNumber = (e) => {
        setContactNumber(e.target.value);
    }
    const onChangeBranchName = (e) => {
        setBranchName(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    }



    const onSubmit = (e) => {
        console.log(deliveryPerson)
        e.preventDefault();
        checkNewProduct();
    }

    return (
        <>
            <div>
                <Container className="db-container d-flex justify-content-center align-items-center">

                    <Form className="db-form" onSubmit={onSubmit} method="post">
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupFirstName">
                                    <Form.Label className="db-form-label">First Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="First Name" value={firstName} onChange={onChangeFirstName} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupLastName">
                                    <Form.Label className="db-form-label">Last Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="Last Name" value={lastName} onChange={onChangeLastName} />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupGender">
                                    <Form.Label className="db-form-label">Gender</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="Gender" value={gender} onChange={onChangeGender} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupSalary">
                                    <Form.Label className="db-form-label">Salary</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="Last Name" value={salary} onChange={onChangeSalary} />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupContactNumber">
                                    <Form.Label className="db-form-label">Contact Number</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="First Name" value={contactNumber} onChange={onChangeContactNumber} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupBranchName">
                                    <Form.Label className="db-form-label">Branch Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="Branch Name" value={branchName} onChange={onChangeBranchName} />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupPassword">
                                    <Form.Label className="db-form-label">Password</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="Password" value={password} onChange={onChangePassword} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupAddress">
                                    <Form.Label className="db-form-label">Address</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="Address" value={address} onChange={onChangeAddress} />
                                </Form.Group>
                            </Col>

                        </Row>

                        <Button className="login-submit-btn login-input mt-2 btn-db" variant="success" type="submit">
                            Submit
                        </Button>



                    </Form>
                </Container>

                <div className="add-new back-to-p">
                    <Col className="text-center">
                        <Row className=""><a className="d-flex justify-content-center align-items-center new-p" variant="success" href="/db/delivery-person"><Back className="btn-add-new btn-p-back" height="36px" /></a></Row>
                    </Col>

                </div>

            </div>

        </>
    );
}

export default NewDeliveryPerson;
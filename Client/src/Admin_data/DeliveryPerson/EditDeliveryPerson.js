import React, { useState, useEffect, useContext } from 'react';
// import { Route, Redirect } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { ReactComponent as Back } from '../../Media/icons/caret-left-solid.svg';
import axios from 'axios';
import { EmployeeContext } from '../../Context/EmployeeContext';


export default function EditDiliveryPerson() {
    const { deliveryPersons } = useContext(EmployeeContext);
    const { id } = useParams();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [branchName, setBranchName] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');


    //store initial product data
    const [initialFirstName, setInitialFirstName] = useState('');
    const [initialLastName, setInitialLastName] = useState('');
    const [initialGender, setInitialGender] = useState('');
    const [initialSalary, setInitialSalary] = useState('');
    const [initialContactNumber, setInitialContactNumber] = useState('');
    const [initialBranchName, setInitialBranchName] = useState('');
    const [initialPassword, setInitialPassword] = useState('');
    const [initialAddress, setInitialAddress] = useState('');

    // const [goBack, setGoBack] = useState(false);
    const dPersonId = id;

    useEffect(() => {
        deliveryPersons.forEach((dPerson) => {
            if (dPerson.id === dPersonId) {
                setInitialFirstName(dPerson.First_Name);
                setInitialLastName(dPerson.Last_Name);
                setInitialGender(dPerson.Gender);
                setInitialSalary(dPerson.Salary);
                setInitialContactNumber(dPerson.Contact_Number);
                setInitialBranchName(dPerson.Branch_Name);
                setInitialPassword(dPerson.Password);
                setInitialAddress(dPerson.Address);
                setFirstName(dPerson.First_Name);
                setLastName(dPerson.Last_Name);
                setGender(dPerson.Gender);
                setSalary(dPerson.Salary);
                setContactNumber(dPerson.Contact_Number);
                setBranchName(dPerson.Branch_Name);
                setPassword(dPerson.Password);
                setAddress(dPerson.Address);
            }
        })
    }, [deliveryPersons, dPersonId]);

    const checkAnyChanges = () => {
        if ((firstName.length !== 0 && lastName.length !== 0 && gender.length !== 0 && salary.length !== 0 && contactNumber.length !== 0 && branchName.length !== 0 && password.length !== 0 && address.length !== 0)) {
            let isDPersonsExist = false;

            if (firstName === initialFirstName && lastName === initialLastName && gender === initialGender && salary === initialSalary && contactNumber === initialContactNumber && branchName === initialBranchName && password === initialPassword && address === initialAddress) {
                alert('Delivery Person Already Exists !');
                isDPersonsExist = true;
            }
            else {
                isDPersonsExist = false;
            }

            if (!isDPersonsExist) {
                return true;
            } else {
                return false;
            }
        } else {
            alert('Please fill the fields!');
            return false;
        }
    }
    const changeDeliveryPersonDetails = () => {
        //change Delivery Person data
        if (checkAnyChanges()) {
            axios.post('http://localhost/database_project/update_DeliveryPerson.php', {
                id: dPersonId,
                First_Name: firstName,
                Last_Name: lastName,
                Gender: gender,
                Salary: salary,
                Contact_Number: contactNumber,
                Branch_Name: branchName,
                Password: password,
                Address: address,
            })
                .then(() => {
                    alert('Delivery Person is Updated Successfully!');
                    // setGoBack(true);
                    setInitialFirstName(firstName);
                    setInitialLastName(lastName);
                    setInitialGender(gender);
                    setInitialSalary(salary);
                    setInitialContactNumber(contactNumber);
                    setInitialBranchName(branchName);
                    setInitialPassword(password);
                    setInitialAddress(address);

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
        e.preventDefault();
        changeDeliveryPersonDetails();
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
                                    <Form.Control className="db-input" variant="success" type="text" value={firstName} onChange={onChangeFirstName} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupLastName">
                                    <Form.Label className="db-form-label">Last Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={lastName} onChange={onChangeLastName} />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupGender">
                                    <Form.Label className="db-form-label">Gender</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={gender} onChange={onChangeGender} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupSalary">
                                    <Form.Label className="db-form-label">Salary</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={salary} onChange={onChangeSalary} />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupContactNumber">
                                    <Form.Label className="db-form-label">Contact Number</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={contactNumber} onChange={onChangeContactNumber} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupBranchName">
                                    <Form.Label className="db-form-label">Branch Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={branchName} onChange={onChangeBranchName} />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupPassword">
                                    <Form.Label className="db-form-label">Password</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={password} onChange={onChangePassword} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupAddress">
                                    <Form.Label className="db-form-label">Address</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={address} onChange={onChangeAddress} />
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
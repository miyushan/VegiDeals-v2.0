import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import axios from 'axios';
import '../commonStyles.css'
import './EditCustomer.css';
import { EmployeeContext } from '../../Context/EmployeeContext';
import { ReactComponent as Back } from '../../Media/icons/caret-left-solid.svg';
import { ReactComponent as LOGOUT } from '../../Media/icons/right-from-bracket-solid.svg';


function EditCustomer() {
    const navigate = useNavigate();

    const { customers, branches } = useContext(EmployeeContext);
    const { id } = useParams();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [branchName, setBranchName] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');


    //store initial product data
    const [initialFirstName, setInitialFirstName] = useState('');
    const [initialLastName, setInitialLastName] = useState('');
    const [initialGender, setInitialGender] = useState('');
    const [initialContactNumber, setInitialContactNumber] = useState('');
    const [initialBranchName, setInitialBranchName] = useState('');
    const [initialPassword, setInitialPassword] = useState('');
    const [initialAddress, setInitialAddress] = useState('');

    const customerId = id;

    useEffect(() => {
        customers.forEach((customer) => {
            if (customer.id.toString() === customerId) {
                setInitialFirstName(customer.First_Name);
                setInitialLastName(customer.Last_Name);
                setInitialGender(customer.Gender);
                setInitialContactNumber(customer.Contact_Number);
                setInitialPassword(customer.Password);
                setInitialAddress(customer.Address);
                setFirstName(customer.First_Name);
                setLastName(customer.Last_Name);
                setGender(customer.Gender);
                setContactNumber(customer.Contact_Number);
                setPassword(customer.Password);
                setAddress(customer.Address);

                branches.forEach((branch) => {
                    // console.log(customer.Branch_id, branch.id)
                    if (customer.Branch_id === branch.id) {
                        console.log(branch.Name)
                        setInitialBranchName(branch.Name);
                        setBranchName(branch.Name);
                    }
                })

            }
        })
    }, [customers, customerId, branches]);

    const checkAnyChanges = () => {
        if ((firstName.length !== 0 && lastName.length !== 0 && gender.length !== 0 && contactNumber.length !== 0 && branchName.length !== 0 && password.length !== 0)) {
            let iscustomerExist = false;

            if (firstName === initialFirstName && lastName === initialLastName && gender === initialGender && contactNumber === initialContactNumber && branchName === initialBranchName && password === initialPassword && address === initialAddress) {
                alert('Customer Already Exists !');
                iscustomerExist = true;
            }
            else {
                iscustomerExist = false;
            }

            if (!iscustomerExist) {
                return true;
            } else {
                return false;
            }
        } else {
            alert('Please fill the required fields!');
            return false;
        }
    }


    const changeCustomerDetails = () => {
        //change customer data
        if (checkAnyChanges()) {

            let branchid;

            branches.forEach((branch) => {
                if (branchName === branch.Name) {
                    branchid = branch.id;
                }
            })
            // console.log(branchid)
            axios.put(`http://localhost:4000/customer/${customerId}`, {
                id: customerId,
                First_Name: firstName,
                Last_Name: lastName,
                Gender: gender,
                Contact_Number: contactNumber,
                Branch_id: branchid,
                Password: password,
                Address: address,
            })
                .then(() => {
                    alert('Customer Updated Successfully!');
                    navigate('/db/customer');
                    setInitialFirstName(firstName);
                    setInitialLastName(lastName);
                    setInitialGender(gender);
                    setInitialContactNumber(contactNumber);
                    setInitialBranchName(branchName);
                    setInitialPassword(password);
                    setInitialAddress(address);
                });
        }
    }

    const adminLogOut = () => {
        localStorage.removeItem('adminUserDetails');
        navigate('/db');
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
        changeCustomerDetails();
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
                                <Form.Group className="mb-4" controlId="formGroupStockWeight">
                                    <Form.Label className="db-form-label">Gender</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={gender} onChange={onChangeGender} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupPricePerKilogram">
                                    <Form.Label className="db-form-label">Contact Number</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={contactNumber} onChange={onChangeContactNumber} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupBranchName">
                                    <Form.Label className="db-form-label">Branch Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={branchName} onChange={onChangeBranchName} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupPassword">
                                    <Form.Label className="db-form-label">Password</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="password" value={password} onChange={onChangePassword} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
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

                <div className="add-log-out ">
                    <button onClick={adminLogOut} type="button" className="btn btn-warning"><LOGOUT className="btn-log-out" height="15px" style={{ marginRight: "10px" }} /><span className="fw-bold text-danger">Log Out</span></button>
                </div>

                <div className="add-new back-to-p">
                    <Col className="text-center">
                        <Row className=""><a className="d-flex justify-content-center align-items-center new-p" variant="success" href="/db/customer"><Back className="btn-add-new btn-p-back" height="36px" /></a></Row>
                    </Col>
                </div>

            </div>

        </>
    );
}

export default EditCustomer;
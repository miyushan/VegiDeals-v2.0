import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { ReactComponent as Back } from '../../Media/icons/caret-left-solid.svg';
import { ReactComponent as LOGOUT } from '../../Media/icons/right-from-bracket-solid.svg';
import axios from 'axios';
import '../commonStyles.css'
import './NewBranch.css';
import { EmployeeContext } from '../../Context/EmployeeContext';

function NewBranch() {
    const navigate = useNavigate();
    const { branches } = useContext(EmployeeContext);

    const [branchName, setBranchName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');

    const checkAnyChanges = () => {
        let isBranchExist = false;

        if (branchName === '') {
            alert('Branch name is Empty !');
            return false;
        } else if (contactNumber === '' || address === '') {
            alert('All fields are Required !');
            return false;
        } else {
            branches.forEach((branch) => {
                if (branch.Name === branchName) {
                    alert('Branch Already Exists !');
                    isBranchExist = true;
                }
            })
            if (!isBranchExist) {
                return true;
            } else {
                return false;
            }
        }
    }

    const addNewBranch = () => {
        //change branch data
        if (checkAnyChanges()) {
            axios.post('http://localhost:4000/branches', {
                contactNumber: contactNumber,
                name: branchName,
                address: address,
            })
                .then(() => {
                    alert('New Branch is Added Successfully!');
                    setContactNumber('');
                    setBranchName('');
                    setAddress('');
                });
        }
    }

    const adminLogOut = () => {
        localStorage.removeItem('adminUserDetails');
        navigate('/db');
    }

    const onChangeBranchName = (e) => {
        setBranchName(e.target.value);
    }

    const onChangeContactNumber = (e) => {
        setContactNumber(e.target.value);
    }

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addNewBranch();
    }

    return (
        <>
            <div>
                <Container className="db-container d-flex justify-content-center align-items-center">

                    <Form className="db-form" onSubmit={onSubmit} method="post">
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupBranchName">
                                    <Form.Label className="db-form-label">Branch Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={branchName} onChange={onChangeBranchName} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupContactNumber">
                                    <Form.Label className="db-form-label">Contact Number</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={contactNumber} onChange={onChangeContactNumber} />
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
                        <Row className=""><a className="d-flex justify-content-center align-items-center new-p" variant="success" href="/db/branch"><Back className="btn-add-new btn-p-back" height="36px" /></a></Row>
                    </Col>

                </div>

            </div>

        </>
    );
}

export default NewBranch;
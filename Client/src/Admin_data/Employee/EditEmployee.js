import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { ReactComponent as LOGOUT } from '../../Media/icons/right-from-bracket-solid.svg';
import { ReactComponent as Back } from '../../Media/icons/caret-left-solid.svg';
import axios from 'axios';
import { EmployeeContext } from '../../Context/EmployeeContext';
import '../commonStyles.css'


export default function EditEmployee() {
    const navigate = useNavigate();

    const { employees, branches } = useContext(EmployeeContext);
    const { id } = useParams();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [branchName, setBranchName] = useState('');
    const [address, setAddress] = useState('');


    //store initial product data
    const [initialFirstName, setInitialFirstName] = useState('');
    const [initialLastName, setInitialLastName] = useState('');
    const [initialGender, setInitialGender] = useState('');
    const [initialSalary, setInitialSalary] = useState('');
    const [initialContactNumber, setInitialContactNumber] = useState('');
    const [initialBranchName, setInitialBranchName] = useState('');
    const [initialAddress, setInitialAddress] = useState('');

    const managerId = id;

    useEffect(() => {
        employees.forEach((manager) => {
            if (manager.id.toString() === managerId) {
                setInitialFirstName(manager.First_Name);
                setInitialLastName(manager.Last_Name);
                setInitialGender(manager.Gender);
                setInitialSalary(manager.Salary);
                setInitialContactNumber(manager.Contact_Number);
                setInitialAddress(manager.Address);
                setFirstName(manager.First_Name);
                setLastName(manager.Last_Name);
                setGender(manager.Gender);
                setSalary(manager.Salary);
                setContactNumber(manager.Contact_Number);
                setAddress(manager.Address);

                branches.forEach((branch) => {
                    // console.log(customer.Branch_id, branch.id)
                    if (manager.Branch_id === branch.id) {
                        // console.log(branch.Name )
                        setInitialBranchName(branch.id);
                        setBranchName(branch.id);
                    }
                })
            }
        })
    }, [employees, managerId, branches]);

    const checkAnyChanges = () => {
        if ((firstName.length !== 0 && lastName.length !== 0 && gender.length !== 0 && salary.length !== 0 && contactNumber.length !== 0 && branchName.length !== 0 && address.length !== 0)) {
            let isManagerExist = false;

            if (firstName === initialFirstName && lastName === initialLastName && gender === initialGender && salary === initialSalary && contactNumber === initialContactNumber && branchName === initialBranchName && address === initialAddress) {
                alert('Employee Already Exists !');
                isManagerExist = true;
            }
            else {
                isManagerExist = false;
            }

            if (!isManagerExist) {
                return true;
            } else {
                return false;
            }
        } else {
            alert('Please fill the fields!');
            return false;
        }
    }


    const changeManagerDetails = () => {
        //change employee data
        if (checkAnyChanges()) {

            let branchid;

            branches.forEach((branch) => {
                if (branchName === branch.Name) {
                    branchid = branch.id;
                }
            })

            axios.put(`http://localhost:4000/employee/${managerId}`, {
                id: managerId,
                First_Name: firstName,
                Last_Name: lastName,
                Gender: gender,
                Salary: salary,
                Contact_Number: contactNumber,
                Branch_id: branchid,
                Address: address,
            })
                .then(() => {
                    alert('Employee Updated Successfully!');
                    navigate('/db/employee');
                    setInitialFirstName(firstName);
                    setInitialLastName(lastName);
                    setInitialGender(gender);
                    setInitialSalary(salary);
                    setInitialContactNumber(contactNumber);
                    setInitialBranchName(branchName);
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

    const onChangeSalary = (e) => {
        setSalary(e.target.value);
    }

    const onChangeContactNumber = (e) => {
        setContactNumber(e.target.value);
    }

    const onChangeBranchName = (e) => {
        setBranchName(e.target.value);
    }

    // const onChangePassword = (e) => {
    //     setPassword(e.target.value);
    // }

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        changeManagerDetails();
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
                                    <Form.Label className="db-form-label">Branch Id</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={branchName} onChange={onChangeBranchName} />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            {/* <Col>
                                <Form.Group className="mb-4" controlId="formGroupPassword">
                                    <Form.Label className="db-form-label">Password</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" value={password} onChange={onChangePassword}/>
                                </Form.Group>
                            </Col> */}
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
                        <Row className=""><a className="d-flex justify-content-center align-items-center new-p" variant="success" href="/db/employee"><Back className="btn-add-new btn-p-back" height="36px" /></a></Row>
                    </Col>
                </div>

            </div>

        </>
    );
}
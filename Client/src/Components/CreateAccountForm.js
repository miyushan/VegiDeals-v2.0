import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CreateAccountForm.css';
import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import axios from 'axios';
import { Hint } from 'react-autocomplete-hint';
import { EmployeeContext } from '../Context/EmployeeContext';
// import { faObjectGroup } from '@fortawesome/free-solid-svg-icons';
// import CustomerDetails from '../Admin_data/CustomerDetails';

export default function CreateAccountForm() {
    const navigate = useNavigate();

    const { branches } = useContext(EmployeeContext);

    const [hintData, setHintData] = useState([])

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('Male');
    const [contactNumber, setContactNumber] = useState('');
    const [branchName, setBranchName] = useState('');
    const [password, setPassword] = useState('');

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const onChangeGender = (gender) => {
        setGender(gender);
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

    const checkNewUser = () => {
        axios.get('http://localhost:4000/customers')
            .then(res => res.data)
            .then((res) => {

                let isNewNumber = true;

                try {
                    res.forEach(phone => {
                        if (contactNumber === phone.Contact_Number) {
                            isNewNumber = false;
                        }
                    })
                } catch (e) {

                }

                if (firstName.length === 0 || lastName.length === 0 || gender.length === 0 || contactNumber.length === 0 || branchName.length === 0 || password.length === 0) {
                    alert("All Fields should be filled!");
                } else {
                    if (isNewNumber === true) {
                        let obj = {
                            firstName: firstName,
                            lastName: lastName,
                            gender: gender,
                            contactNumber: contactNumber,
                            password: password,
                            isRegistered: false
                        }
                        // const obj_json = JSON.stringify(obj);

                        // get id of the branch
                        branches.forEach(branch => {
                            if (branch.Name.toUpperCase() === branchName.toUpperCase()) {
                                obj.Branch_id = branch.id;
                            }
                        })

                        // pass new account details to db
                        axios.post('http://localhost:4000/customers', obj)
                            .then(res => {
                                console.log("New Account created");
                                setFirstName('');
                                setLastName('');
                                setGender('');
                                setContactNumber('');
                                setBranchName('');
                                setPassword('');
                                navigate('/login');
                            });
                    } else {
                        isNewNumber = true;
                        alert("User already Exist!");
                    }
                }

            });
    }

    const onSubmit = (e) => {
        // console.log(gender)
        e.preventDefault();
        checkNewUser();
    }

    useEffect(() => {
        let tempBranchArr = [];

        branches.forEach(branch => {
            let obj = branch.name;
            tempBranchArr.push(obj);
        })
        setHintData(tempBranchArr);
    }, [branches])

    // box-shadow: 0 0 0 0.25rem rgb(60 153 110 / 50%);




    return (
        <>
            <Form className="login-form" onSubmit={onSubmit} method="post">

                <Form.Group className="mb-3 " controlId="formBasicFirstName">
                    <Form.Control className="login-input" type="text" placeholder="First name" name="firstName" value={firstName} onChange={onChangeFirstName} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Control className="login-input" type="text" placeholder="Last name" name="lastName" value={lastName} onChange={onChangeLastName} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>


                <DropdownButton className="mb-3 dropdown-btn" title={gender} variant="success">
                    <Dropdown.Item onClick={() => onChangeGender('Male')} className="login-input-drop dropdown-btn-item">Male</Dropdown.Item>
                    <Dropdown.Item onClick={() => onChangeGender('Female')} className="login-input-drop dropdown-btn-item">Female</Dropdown.Item>
                </DropdownButton>
                {/* <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Control className="login-input" type="text" placeholder="Gender" name="gender"  value={gender} onChange={onChangeGender}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group> */}

                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Control className="login-input" type="text" placeholder="Phone Number" name="contactNumber" value={contactNumber} onChange={onChangeContactNumber} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Hint options={hintData} allowTabFill>
                    <input className='input-with-hint mb-3 login-input' value={branchName} onChange={onChangeBranchName} placeholder="Branch Name" variant="success" />
                </Hint>
                {/* <Form.Group className="mb-3" controlId="formBasicBranchName">
                <Form.Control className="login-input" type="text" placeholder="Branch Name" name="branchName"  value={branchName} onChange={onChangeBranchName}/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group> */}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className="login-input" type="password" placeholder="Password" name="password" value={password} onChange={onChangePassword} />
                </Form.Group>

                <Button href="" className="login-submit-btn login-input" type="submit" name="createNewAccount" variant="success">CREATE ACCOUNT</Button>


            </Form>
        </>
    )


}




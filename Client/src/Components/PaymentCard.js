import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { CartContext } from '../Context/CartContext';
import { EmployeeContext } from '../Context/EmployeeContext';
import { Form, Container, Button, Row, Col } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";

function PaymentCard() {
    const navigate = useNavigate();

    const { totalWeight, setCartProducts, priceWithDiscount } = useContext(CartContext);
    const { managers, orders } = useContext(EmployeeContext);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [date, setDate] = useState('');
    const [cvv, setcvc] = useState('');
    const [btnDisable, setBtnDisable] = useState(true);
    const [branch, setBranch] = useState('');
    const [customerId, setCustomerId] = useState('');

    // let dPersonId;
    let managerId;



    useEffect(() => {
        try {
            let cartData = localStorage.getItem('cartDetails');
            cartData = JSON.parse(cartData);

            if (!cartData || cartData.length === 0) {
                setBtnDisable(true);
            } else {
                setBtnDisable(false);
            }

            //get user details
            let userData = localStorage.getItem('userDetails');
            userData = JSON.parse(userData);
            setBranch(userData.branchId);
            setCustomerId(userData.id);
        } catch (e) {

        }

    }, [])


    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    }

    const onChangeCardNumber = (e) => {
        setCardNumber(e.target.value);
    }

    const onChangeDate = (e) => {
        setDate(e.target.value);
    }

    const onChangecvv = (e) => {
        setcvc(e.target.value);
    }

    //find related Manager and Delivery Person relater to buyers Branch 
    const findRelatedEmployees = () => {
        // let tempDPsersons = [];
        let tempManagers = [];

        // //to get D Persons in same branch
        // deliveryPersons.forEach(person => {
        //     if(person.Branch_Name === branch){
        //         tempDPsersons.push(parseFloat(person.id));
        //     }
        // })
        // console.log(tempDPsersons);
        // dPersonId = tempDPsersons[ Math.floor(Math.random()*tempDPsersons.length) ];
        // console.log(dPersonId);

        //to get Managers in same branch
        managers.forEach(person => {
            console.log(person.Branch_id, branch);
            if (person.Branch_id === branch && person.manager_id !== null) {
                tempManagers.push(parseFloat(person.manager_id));
            }
        })
        console.log(tempManagers);
        managerId = tempManagers[Math.floor(Math.random() * tempManagers.length)];
        console.log(managerId);
    }

    const addtoOrderList = () => {
        setCartProducts([]);
        findRelatedEmployees();
        const orderId = orders[orders.length - 1].id + 1;
        axios.post('http://localhost:4000/orders', {
            id: orderId,
            quantity: totalWeight,
            cost: priceWithDiscount,
            customerId: customerId,
            managerId: managerId,
            // deliveryPersonId: dPersonId,
        })
            .then(() => {
                let orderItems = localStorage.getItem('cartDetails');

                axios.post('http://localhost:4000/order-items', {
                    orderItems,
                    orderId
                })
                localStorage.removeItem('cartDetails');

                alert('Order is successfully done!');
                setName('');
                setAddress('');
                setCardNumber('');
                setDate('');
                setcvc('');
                navigate('/home');

                //add address to customer table
                axios.put(`http://localhost:4000/customer-address/${customerId}`, {
                    id: customerId,
                    Address: address,
                });
            });
    }

    const onPayNow = (e) => {
        e.preventDefault();
        if (name && address && cardNumber && date && cvv) {
            addtoOrderList();
            findRelatedEmployees();
        } else {
            alert('Please fill the required fields')
        }
    }

    return (
        <>
            <Container className="b_form-container">
                <Form className="b_payment-form" onSubmit={onPayNow} method="post">
                    <Row className="mt-1 mb-4">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label className="b_payment-field-title">Name On The Card</Form.Label>
                            <Form.Control className="b_login-input b_btn-square" type="text" placeholder="Your Name" name="contactNumber" value={name} onChange={onChangeName} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-4" controlId="formGridAddress">
                        <Form.Label className="b_payment-field-title">Address</Form.Label>
                        <Form.Control className="b_login-input b_btn-square" placeholder="Your Address" value={address} onChange={onChangeAddress} />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formGridCardNumber">
                        <Form.Label className="b_payment-field-title">Card Number</Form.Label>
                        <Form.Control className="b_login-input b_btn-square" placeholder="0000-0000-0000-0000" value={cardNumber} onChange={onChangeCardNumber} />
                    </Form.Group>

                    <Row className="mb-4">
                        <Col xs={5}>
                            <Form.Group controlId="formGridExpireDate">
                                <Form.Label className="b_payment-field-title">Expiration Date</Form.Label>
                                <Form.Control className="b_login-input b_btn-square" placeholder="00/00" value={date} onChange={onChangeDate} />
                            </Form.Group>
                        </Col>
                        <Col xs={{ span: 4, offset: 3 }}>
                            <Form.Group controlId="formGridCVV">
                                <Form.Label className="b_payment-field-title">CVV</Form.Label>
                                <Form.Control className="b_login-input b_btn-square" placeholder="123" value={cvv} onChange={onChangecvv} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <div className="mb-1">
                        <Button disabled={btnDisable} className="b_login-submit-btn b_login-input b_pay-now-btn" type="submit" variant="success">PAY NOW</Button>
                    </div>

                </Form>


            </Container>

        </>
    );
}

export default PaymentCard;
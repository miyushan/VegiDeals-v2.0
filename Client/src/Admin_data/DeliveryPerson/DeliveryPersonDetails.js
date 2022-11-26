import React, { useState, useEffect } from 'react';
import './DeliveryPersonDetails.css';
import { Table, ButtonGroup, Button, Breadcrumb, Col, Row } from "react-bootstrap";
import axios from 'axios';
import Modal from '../../Components/Model'
import { ReactComponent as Edit } from '../../Media/icons/edit-regular.svg';
import { ReactComponent as Delete } from '../../Media/icons/trash-alt-regular.svg';
import { ReactComponent as New } from '../../Media/icons/plus-solid.svg';
// import { ReactComponent as Admin } from '../../Media/icons/users-cog-solid.svg';

function DeliveryPersonDetails() {

    const [show, setShow] = useState();

    let [customers, setCustomers] = useState([]);
    // const [reload, setReload] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:4000/delivery-persons')
            .then(res => {
                setCustomers(res.data);
            })
    }, []);


    const deleteCustomer = (customer_id) => {
        setShow(true);
        console.log("Customer Record is Deleted");

        axios.get('http://localhost/database_project/delete_DeliveryPerson.php?id=' + customer_id)
            .then(res => {
                console.log(res);
                // setReload(true);
            })

    }


    return (
        <>
            <div className="db-c-bg">

                {/* <Container className="db-c-container"> */}
                <div className="text-center"><h1 className="title">Delivery Person Records</h1></div>
                <div>
                    <Breadcrumb className="bred-c">
                        <Breadcrumb.Item href="/db/branch"><span className="bred-items">Branch Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/products"><span className="bred-items">Product Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/manager"><span className="bred-items">Manager Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/customer"><span className="bred-items">Customer Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item active><span className="bred-items">Delivery Person Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/order"><span className="bred-items">Order Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/order-items"><span className="bred-items">Order Item Records</span></Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <Table className="table-c" striped bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Salary (Rs)</th>
                            <th>C. Number</th>
                            <th>Branch Name</th>
                            <th>Password</th>
                            <th>Address</th>
                            <th>Posting_Date</th>
                            <th>Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => {
                            return (
                                <tr key={customer.id}>
                                    <td className="r-margin text-r">{customer.id}</td>
                                    <td className="r-margin">{customer.First_Name}</td>
                                    <td className="r-margin">{customer.Last_Name}</td>
                                    <td className="r-margin">{customer.Gender}</td>
                                    <td className="r-margin">{customer.Salary}</td>
                                    <td className="r-margin text-center">{customer.Contact_Number}</td>
                                    <td className="r-margin">{customer.Branch_Name}</td>
                                    <td className="r-margin">{customer.Password}</td>
                                    <td className="r-margin"><div>{customer.Address}</div></td>
                                    <td className="r-margin text-center"><div>{customer.Posting_Date}</div></td>
                                    <td className="r-margin text-center">
                                        <ButtonGroup aria-label="Basic example">
                                            <Button href={"delivery-person/edit/" + customer.id} className="btn-edit" variant="warning"><Edit className="edit-p" height="15px" /></Button>
                                            <Button href="/db/delivery-person" className="btn-delete" onClick={() => deleteCustomer(customer.id)} variant="danger"><Delete className="delete-p" height="15px" /></Button>
                                            {/* <Button href="/db/delivery-person" className="btn-delete" onClick={()=>handleShow()} variant="danger"><Delete className="delete-p" height="15px"/></Button> */}

                                            <Modal show={show} />
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                {/* </Container> */}
                <div className="add-new ">
                    <Col className="text-center">
                        <Row><p className="mb-1" style={{ color: 'white' }}>New Delivery Person</p></Row>
                        <Row className="justify-content-center align-items-center"><a className="d-flex justify-content-center align-items-center new-p" variant="success" href="delivery-person/add"><New className="btn-add-new" height="20px" /></a></Row>
                    </Col>
                </div>

                {/* <div className="add-new-2 ">
                    <Col className="text-center">
                        <a href="/db/login" className="admin-login-btn"><Admin className="admin-login-icon" height="25px"/></a>
                    </Col>     
                </div> */}
            </div>



        </>
    );

}

export default DeliveryPersonDetails;

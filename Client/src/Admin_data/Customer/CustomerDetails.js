import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import '../commonStyles.css'
import './CustomerDetails.css';
import { Table, ButtonGroup, Button, Breadcrumb } from "react-bootstrap";
import axios from 'axios';
import { ReactComponent as Edit } from '../../Media/icons/edit-regular.svg';
import { ReactComponent as Delete } from '../../Media/icons/trash-alt-regular.svg';
// import { ReactComponent as Admin } from '../../Media/icons/users-cog-solid.svg';
import { ReactComponent as LOGOUT } from '../../Media/icons/right-from-bracket-solid.svg';

import { EmployeeContext } from '../../Context/EmployeeContext';

function CustomerDetails() {
    const navigate = useNavigate();

    const { customers } = useContext(EmployeeContext);

    let [customerArr, setCustomerArr] = useState([]);
    // const [reload, setReload] = useState(false);

    useEffect(() => {
        setCustomerArr(customers)
    }, [customers]);

    const deleteCustomer = (customer_id) => {
        axios.delete(`http://localhost:4000/customer/${customer_id}`)
            .then(res => {
                alert('Customer is Deleted!!');
                window.location.reload(false);
            })
    }

    const adminLogOut = () => {
        localStorage.removeItem('adminUserDetails');
        navigate('/db');
    }

    return (
        <>

            <div className="db-c-bg">

                {/* <Container className="db-c-container"> */}
                <div className="text-center"><h1 className="title">Customer Records</h1></div>
                <div>
                    <Breadcrumb className="bred-c">
                        <Breadcrumb.Item href="/db/branch"><span className="bred-items">Branch Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/products"><span className="bred-items">Product Records</span></Breadcrumb.Item>
                        {/* <Breadcrumb.Item href="/db/manager"><span className="bred-items">Manager Records</span></Breadcrumb.Item> */}
                        <Breadcrumb.Item href="/db/employee"><span className="bred-items">Employee Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item active><span className="bred-items">Customer Records</span></Breadcrumb.Item>
                        {/* <Breadcrumb.Item href="/db/delivery-person"><span className="bred-items">Delivery Person Records</span></Breadcrumb.Item> */}
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
                            <th>C. Number</th>
                            <th>Branch Id</th>
                            <th>Password</th>
                            <th>Address</th>
                            <th>Posting_Date</th>
                            <th>Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerArr.map((customer) => {
                            return (
                                <tr key={customer.id}>
                                    <td className="r-margin text-r">{customer.id}</td>
                                    <td className="r-margin">{customer.First_Name}</td>
                                    <td className="r-margin">{customer.Last_Name}</td>
                                    <td className="r-margin">{customer.Gender}</td>
                                    <td className="r-margin text-center">{customer.Contact_Number}</td>
                                    <td className="r-margin">{customer.Branch_id}</td>
                                    <td className="r-margin">{customer.Password}</td>
                                    <td className="r-margin"><div>{customer.Address}</div></td>
                                    <td className="r-margin text-center"><div>{customer.Posting_Date}</div></td>
                                    <td className="r-margin text-center">
                                        <ButtonGroup aria-label="Basic example">
                                            <Button href={"customer/edit/" + customer.id} className="btn-edit" variant="warning"><Edit className="edit-p" height="15px" /></Button>
                                            <Button href="" className="btn-delete" onClick={() => deleteCustomer(customer.id)} variant="danger"><Delete className="delete-p" height="15px" /></Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                <div className="add-log-out ">
                    <button onClick={adminLogOut} type="button" className="btn btn-warning"><LOGOUT className="btn-log-out" height="15px" style={{ marginRight: "10px" }} /><span className="fw-bold text-danger">Log Out</span></button>
                </div>

                {/* <div className="add-new-2 ">
                    <Col className="text-center">
                        <a href="/db/login" className="admin-login-btn"><Admin className="admin-login-icon" height="25px" /></a>
                    </Col>
                </div> */}

                {/* </Container> */}

            </div>



        </>
    );


}

export default CustomerDetails;

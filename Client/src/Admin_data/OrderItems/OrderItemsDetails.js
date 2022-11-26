import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import '../commonStyles.css'
import './OrderItemsDetails.css';
import { Table, ButtonGroup, Button, Breadcrumb } from "react-bootstrap";
import axios from 'axios';
// import { ReactComponent as Edit } from '../../Media/icons/edit-regular.svg';
import { ReactComponent as Delete } from '../../Media/icons/trash-alt-regular.svg';
// import { ReactComponent as New } from '../../Media/icons/plus-solid.svg';

import { EmployeeContext } from '../../Context/EmployeeContext';
// import { ReactComponent as Admin } from '../../Media/icons/users-cog-solid.svg';
import { ReactComponent as LOGOUT } from '../../Media/icons/right-from-bracket-solid.svg';

function OrderItemsDetails() {
    const navigate = useNavigate();
    const { orderItems } = useContext(EmployeeContext);

    const [orderArr, setOrderArr] = useState([]);
    // const [reload, setReload] = useState(false);

    useEffect(() => {
        try {
            setOrderArr(orderItems);
        } catch {

        }
    }, [orderItems]);

    const deleteCustomer = (Product_id, Order_id) => {
        axios.delete(`http://localhost:4000/delete-order-item`, {
            data: {
                Product_id: Product_id,
                Order_id: Order_id
            }
        })
            .then(res => {
                alert('Order Item Record is Deleted!!');
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

                <div className="text-center"><h1 className="title">Order Records</h1></div>
                <div>
                    <Breadcrumb className="bred-c">
                        <Breadcrumb.Item href="/db/branch"><span className="bred-items">Branch Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/products"><span className="bred-items">Product Records</span></Breadcrumb.Item>
                        {/* <Breadcrumb.Item href="/db/manager"><span className="bred-items">Manager Records</span></Breadcrumb.Item> */}
                        <Breadcrumb.Item href="/db/employee"><span className="bred-items">Employee Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/customer"><span className="bred-items">Customer Records</span></Breadcrumb.Item>
                        {/* <Breadcrumb.Item href="/db/delivery-person"><span className="bred-items">Delivery Person Records</span></Breadcrumb.Item> */}
                        <Breadcrumb.Item href="/db/order"><span className="bred-items">Order Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item active><span className="bred-items">Order Item Records</span></Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                {/* <Container className="db-p-container"> */}

                <Table className="table-c order-table" striped bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Quantity (Kg)</th>
                            <th>Cost (Rs)</th>
                            <th>Product ID</th>
                            <th>Order ID</th>
                            <th>Posting Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderArr.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td className="text-r"><div>{product.id}</div></td>
                                    <td className="text-r">{product.weight}</td>
                                    <td className="text-r">{product.cost}</td>
                                    <td className="text-r">{product.Product_id}</td>
                                    <td className="text-r">{product.Order_id}</td>
                                    <td className="text-center">{product.Posting_Date}</td>
                                    <td className="text-center">
                                        <ButtonGroup aria-label="Basic example">
                                            {/* <Button href={"/db/order/edit/"+product.id} className="btn-edit"variant="warning"><Edit className="edit-p" height="15px"/></Button> */}
                                            <Button href="" className="btn-delete" onClick={() => deleteCustomer(product.Product_id, product.Order_id)} variant="danger"><Delete className="delete-p" height="15px" /></Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                {/* </Container> */}

                {/* <div className="add-new ">
                    <Col className="text-center">
                        <Row><p className="mb-1" style={{color: 'white'}}>New Order</p></Row>
                        <Row className="justify-content-center align-items-center"><a className="d-flex justify-content-center align-items-center new-p"variant="success" href="branch/add"><New className="btn-add-new" height="20px"/></a></Row>
                    </Col>     
                </div> */}

                <div className="add-log-out ">
                    <button onClick={adminLogOut} type="button" className="btn btn-warning"><LOGOUT className="btn-log-out" height="15px" style={{ marginRight: "10px" }} /><span className="fw-bold text-danger">Log Out</span></button>
                </div>

                {/* <div className="add-new-2 ">
                    <Col className="text-center">
                        <a href="/db/login" className="admin-login-btn"><Admin className="admin-login-icon" height="25px" /></a>
                    </Col>
                </div> */}
            </div>

        </>
    );


}

export default OrderItemsDetails;

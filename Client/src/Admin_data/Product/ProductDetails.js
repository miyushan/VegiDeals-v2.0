import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import './ProductDetails.css';
import '../commonStyles.css'
import { Table, Container, ButtonGroup, Button, Breadcrumb, Col, Row } from "react-bootstrap";
import axios from 'axios';
import { ReactComponent as Edit } from '../../Media/icons/edit-regular.svg';
import { ReactComponent as Delete } from '../../Media/icons/trash-alt-regular.svg';
import { ReactComponent as New } from '../../Media/icons/plus-solid.svg';
import { ReactComponent as LOGOUT } from '../../Media/icons/right-from-bracket-solid.svg';

import { ProductContext } from '../../Context/ProductContext';
// import { ReactComponent as Admin } from '../../Media/icons/users-cog-solid.svg';

function ProductDetails() {
    const navigate = useNavigate();

    const { products } = useContext(ProductContext);

    const [productArr, setProductArr] = useState([]);

    useEffect(() => {
        setProductArr(products)
        console.log(products);
    }, [products]);

    const deleteCustomer = (customer_id) => {

        axios.delete(`http://localhost:4000/products/${customer_id}`)
            .then(res => {
                alert('Product is Deleted!!');
                window.location.reload(false);
            })

    }

    const adminLogOut = () => {
        localStorage.removeItem('adminUserDetails');
        navigate('/db');
    }


    return (
        <>
            <div className="db-bg">
                <div className="text-center"><h1 className="title">Product Records</h1></div>
                <div>
                    <Breadcrumb className="bred">
                        <Breadcrumb.Item href="/db/branch"><span className="bred-items">Branch Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item active><span className="bred-items">Product Records</span></Breadcrumb.Item>
                        {/* <Breadcrumb.Item href="/db/manager"><span className="bred-items">Manager Records</span></Breadcrumb.Item> */}
                        <Breadcrumb.Item href="/db/employee"><span className="bred-items">Employee Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/customer"><span className="bred-items">Customer Records</span></Breadcrumb.Item>
                        {/* <Breadcrumb.Item href="/db/delivery-person"><span className="bred-items">Delivery Person Records</span></Breadcrumb.Item> */}
                        <Breadcrumb.Item href="/db/order"><span className="bred-items">Order Records</span></Breadcrumb.Item>
                        <Breadcrumb.Item href="/db/order-items"><span className="bred-items">Order Item Records</span></Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <Container className="db-p-container">

                    <Table className="table-p" striped bordered>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Stock Weight (Kg)</th>
                                <th>Price Per Kg (Rs/Kg)</th>
                                <th>Posting Date</th>
                                <th>Edit / Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productArr.map((product) => {
                                return (
                                    <tr key={product.id}>
                                        <td className="p-data-1 text-r"><div>{product.id}</div></td>
                                        <td className="p-data-2">{product.Name}</td>
                                        <td className="p-data-3 text-r">{product.Weight}</td>
                                        <td className="p-data-4 text-r">{product.Price}</td>
                                        <td className="p-data-5 text-center">{product.Posting_Date}</td>
                                        <td className="p-data-6 text-center">
                                            <ButtonGroup aria-label="Basic example">
                                                <Button href={"products/edit/" + product.id} prname="hello" className="btn-edit" variant="warning"><Edit className="edit-p" height="15px" /></Button>
                                                <Button href="/db/products" className="btn-delete" onClick={() => deleteCustomer(product.id)} variant="danger"><Delete className="delete-p" height="15px" /></Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>

                </Container>

                <div className="add-log-out ">
                    <button onClick={adminLogOut} type="button" className="btn btn-warning"><LOGOUT className="btn-log-out" height="15px" style={{ marginRight: "10px" }} /><span className="fw-bold text-danger">Log Out</span></button>
                </div>

                <div className="add-new ">
                    <Col className="text-center">
                        <Row><p className="mb-1" style={{ color: 'white' }}>New Product</p></Row>
                        <Row className="justify-content-center align-items-center"><a className="d-flex justify-content-center align-items-center new-p" variant="success" href="products/add"><New className="btn-add-new" height="20px" /></a></Row>
                    </Col>
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

export default ProductDetails;

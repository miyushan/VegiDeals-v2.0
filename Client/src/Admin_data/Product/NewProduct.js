import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { ReactComponent as Back } from '../../Media/icons/caret-left-solid.svg';
import axios from 'axios';
import './NewProduct.css';
import '../commonStyles.css'
import { ReactComponent as LOGOUT } from '../../Media/icons/right-from-bracket-solid.svg';


function NewProduct() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [totalStockWeight, setTotalStockWeight] = useState('');
    const [pricePerKilogram, setPricePerKilogram] = useState('');
    let [isProductAdded, setIsProductAdded] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:4000/products')
            .then(res => res.data)
            .then((res) => {
                setProducts(res);
            })
    }, [isProductAdded]);

    const checkNewProduct = () => {
        let isOldProduct = false;

        if (productName === '') {
            alert('Product name is Empty !');
        } else if (totalStockWeight === '' || pricePerKilogram === '') {
            alert('All fields are Required !');
        } else {

            products.forEach(product => {
                if (productName === product.Name) {
                    isOldProduct = true;
                }
            })

            if (isOldProduct === false) {
                axios.post('http://localhost:4000/products', {
                    productName: productName,
                    totalStockWeight: totalStockWeight,
                    pricePerKilogram: pricePerKilogram,
                })
                    .then(() => {
                        alert('New Product is created Successfully!');
                        setProductName('');
                        setPricePerKilogram('');
                        setTotalStockWeight('');
                        setIsProductAdded(true);
                    });
            } else if (isOldProduct === true) {
                alert('Product already exists!');
            }

        }


    }

    const adminLogOut = () => {
        localStorage.removeItem('adminUserDetails');
        navigate('/db');
    }

    const onChangeProductName = (e) => {
        setProductName(e.target.value);
    }

    const onChangeTotalStockWeight = (e) => {
        setTotalStockWeight(e.target.value);
    }

    const onChangePricePerKilogram = (e) => {
        setPricePerKilogram(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        checkNewProduct();
    }

    return (
        <>
            <div>
                <Container className="db-container d-flex justify-content-center align-items-center">

                    <Form className="db-form" onSubmit={onSubmit} method="post" encType="multipart/form-data">
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupProductName">
                                    <Form.Label className="db-form-label">Product Name</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="New Product" value={productName} onChange={onChangeProductName} />
                                </Form.Group>
                            </Col>
                            {/* <Col>
                                <Form.Group className="mb-4"  controlId="formFile">
                                    <Form.Label className="db-form-label">Product Image</Form.Label>
                                    <Form.Control className="insert-image" type="file" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row> */}
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupStockWeight">
                                    <Form.Label className="db-form-label">Total Stock Weight</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="Weight" value={totalStockWeight} onChange={onChangeTotalStockWeight} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" controlId="formGroupPricePerKilogram">
                                    <Form.Label className="db-form-label">Price Per Kilogram</Form.Label>
                                    <Form.Control className="db-input" variant="success" type="text" placeholder="Price Per Kg" value={pricePerKilogram} onChange={onChangePricePerKilogram} />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Button className="login-submit-btn mt-2 login-input btn-db" variant="success" type="submit">
                            Submit
                        </Button>



                    </Form>
                </Container>

                <div className="add-log-out ">
                    <button onClick={adminLogOut} type="button" className="btn btn-warning"><LOGOUT className="btn-log-out" height="15px" style={{ marginRight: "10px" }} /><span className="fw-bold text-danger">Log Out</span></button>
                </div>

                <div className="add-new back-to-p">
                    <Col className="text-center">
                        <Row className=""><a className="d-flex justify-content-center align-items-center new-p" variant="success" href="/db/products"><Back className="btn-add-new btn-p-back" height="36px" /></a></Row>
                    </Col>
                </div>

            </div>

        </>
    );
}

export default NewProduct;
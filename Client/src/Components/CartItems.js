import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import './styles/CartItems.css';
import { Row, Col, Container, Button } from "react-bootstrap";
import { ReactComponent as BackToCart } from '../Media/arrow-alt-circle-left-solid.svg';

import CartTable from './CartTable';
import PaymentCard from './PaymentCard';
import { CartContext } from '../Context/CartContext';

function CartItems() {
    const { cartProducts, totalPrice, priceWithDiscount } = useContext(CartContext);
    const discount = 5;

    return (
        <>
            {/* if statement */}
            {cartProducts.length === 0 ? <div>

                <div className="no-item text-center">No Items To Display</div>

            </div> : <div>

                <div className="text-center cart-title add-curser">Shopping Cart</div>
                <CartTable />

                <Container className="cartDetail-container">
                    <Row className="">
                        <Col className="cartDetail-column d-flex flex-column mt-auto">
                            <Button href="products" className="d-block login-submit-btn login-input btn-continue" type="submit" >
                                <BackToCart className="sign-out-btn align-content-center backtocart-btn" height="15px" />Back To Shopping
                            </Button>
                        </Col>
                        <Col className="cartDetail-column"></Col>
                        <Col className="cartDetail-column cartDetail-column-3 d-flex flex-column">
                            <Row className="cartDetail-column-2 mt-2 add-curser">
                                <Col className="d-flex justify-content-end">Sub Total: </Col>
                                <Col className="d-flex justify-content-end priceDetails"><div className="pricePadding">Rs {totalPrice.toFixed(2)}</div></Col>
                            </Row>
                            <Row className="cartDetail-column-2 add-curser">
                                <Col className="d-flex justify-content-end">Discount: </Col>
                                <Col className="d-flex justify-content-end priceDetails"><div className="pricePadding">{discount.toFixed(2)}%</div></Col>
                            </Row>
                            <Row className="cartDetail-column-2 mb-0 add-curser">
                                <Col className="d-flex justify-content-end">Total: </Col>
                                <Col className="d-flex justify-content-end priceDetails priceColor"><div className="pricePadding">Rs {priceWithDiscount}</div></Col>
                            </Row>
                        </Col>
                        {/* <Col className="cartDetail-column"></Col> */}
                    </Row>
                </Container>

            </div>}
            {/* end of if statement */}

            <div className="text-center cart-title add-curser">Payment Informartion</div>

            <PaymentCard />
        </>
    );
}

export default CartItems;
import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/GoToCart.css';
import { Button } from "react-bootstrap";

import { CartContext } from '../Context/CartContext';
import { ReactComponent as Cart } from '../Media/shopping-cart-solid.svg';

function GoToCart() {
    const { cartProducts } = useContext(CartContext);

    return (

        <div className="b_cart b_to-cart-btn">
            <Button href="cart" className="b_ignore-btn" variant="success"><Cart className="b_cart-icon" height="35px" /></Button>
            {cartProducts.length !== 0 ? <div>
                <div className="b_cartProductExist"><div className="b_cartProductCountRel"></div></div>
                <div className="b_cartProductCount">{cartProducts.length}</div>
            </div> : null}
        </div>

    );
}

export default GoToCart;

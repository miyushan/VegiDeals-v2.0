import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CartTable.css';
import { Col, Row } from "react-bootstrap";
import { CartContext } from '../Context/CartContext';
import './styles/CartTableRow.css';
import { ReactComponent as Remove } from '../Media/icons/remove-from-cart.svg';
import { ReactComponent as Reduce } from '../Media/icons/reduce.svg';
import { ReactComponent as Increase } from '../Media/icons/increase.svg';

function CartTableRow(props) {

    const { removeFromCart, changeCartQuantity } = useContext(CartContext);

    const [quantity, setQuantity] = useState(Math.round(props.weight * 1e2) / 1e2);
    const [price, setPrice] = useState(Math.round(props.price * 1e2) / 1e2);
    const [maxWeight] = useState(parseFloat(props.maxWeight));

    const increase = () => {
        if (maxWeight > quantity && quantity > 0) {
            const tempP = Math.round((price + (0.1 * props.pricePKg)) * 1e2) / 1e2;
            const tempQ = Math.round((quantity + 0.1) * 1e2) / 1e2
            setPrice(tempP);
            setQuantity(tempQ);
            changeCartQuantity(props.id, tempP, tempQ);
        }
    }

    const reduce = () => {
        if (maxWeight > quantity && quantity > 0.1) {
            const tempP = Math.round((price - (0.1 * props.pricePKg)) * 1e2) / 1e2;
            const tempQ = Math.round((quantity - 0.1) * 1e2) / 1e2
            setPrice(tempP);
            setQuantity(tempQ);
            changeCartQuantity(props.id, tempP, tempQ);
        }
    }

    return (
        <>
            <td className="id-column">{props.id}</td>
            <td className="left-image"><img src={props.image} alt="product" className="img-product" />{props.name}</td>
            <td className="add-reduce">
                <Row>
                    <Col className="cart-icons "><Reduce onClick={() => { reduce() }} className="success change-weight" height="22px" /></Col>
                    <Col className="cart-icons"><Increase onClick={() => { increase() }} className="success change-weight" height="22px" /></Col>
                </Row>
            </td>
            <td>{props.weight} Kg</td>
            <td className="red-cart">
                <Remove className="success remove-from-cart" onClick={(e) => { removeFromCart(props.id); e.preventDefault(); }} height="22px" />
            </td>
            <td className="price-col">{props.price.toFixed(2)}</td>

        </>
    );

}

export default CartTableRow;
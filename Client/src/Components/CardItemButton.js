import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from "react-bootstrap";
import { CartContext } from '../Context/CartContext';

export default function CardItemButton (props){
    const { addToCart, isAddedToCart } = useContext(CartContext);

    let buttonStyle;

    isAddedToCart ? buttonStyle = {
        backgroundColor: "rgb(8, 155, 8)",
        color: "rgb(255, 255, 255)"
    } : buttonStyle = {
        // backgroundColor: "rgb(8, 155, 8)",
        // color: "rgb(255, 255, 255)"
    }

    
    
    return(
        <>
            
            <Button onClick={()=>{addToCart(props.id, parseFloat(props.Price))}} style={buttonStyle} variant="success" className="b_btn-cart" >Add To Cart</Button>
             
        </>   
    )
    
    

}

import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CartTable.css';
import CartTableRow from './CartTableRow';
import {Table, Container} from "react-bootstrap";
import { CartContext } from '../Context/CartContext';
import { ProductContext } from '../Context/ProductContext';

function CartTable () {

    const { cartProducts } = useContext(CartContext);
    const { productArr } = useContext(ProductContext);

    const getItem = (id) => {
        const numOfImages = productArr.length;

        if(numOfImages>id){
            return productArr[id];
        }else{
            return productArr[0];
        }
    }

    return(
        <>
            <Container className="b_table-container d_add-curser">

                {cartProducts.length === 0 ?
                    <div className="b_no-item">No Items To Display</div>
                :
                    <Table className="b_cart-shadow" striped bordered hover>
                        <thead className="b_table-head text-center">
                            <tr className="">
                                <th className=" b_table-column-1">Product ID</th>
                                <th className=" b_table-column-2">Product</th>
                                <th className=" b_table-column-3">Set Quantity</th>
                                <th className=" b_table-column-4">Quantity</th>
                                <th className=" b_table-column-5">Remove</th>
                                <th className=" b_table-column-6">Price (Rs)</th>
                            </tr>
                        </thead>
                        
                        <tbody className="b_table-body text-center">
                            {cartProducts.map((product) =>{
                                return (
                                    <tr key={product.id}>
                                        <CartTableRow image={getItem(product.id)} name={product.Name} price={product.CartPrice} pricePKg={product.Price} maxWeight={product.Weight} weight={product.CartWeight} id={product.id}/>
                                    </tr>
                                )  
                            })}
                        </tbody>
                    </Table>
                }
                

            </Container>
            
        </>
    );
    
}

export default CartTable;
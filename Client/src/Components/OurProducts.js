import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/OurProducts.css';
import { Row, Col, Container } from "react-bootstrap";
import CardItem from './CardItem';
import { ProductContext } from '../Context/ProductContext';
// import { CartContext } from '../Context/CartContext';

// import item0 from '../Media/product-images/1_carrot.png';

function OurProducts() {

    const { products } = useContext(ProductContext);

    // const { isSelected } = useContext(CartContext);

    // const addToCartBtnStyle = (val) => {
    //     console.log(val);
    //     if(val){
    //         return '#f00';
    //     }
    // }


    return (
        <>
            <div className="our-product-bg">
                <Container className="outer-products">
                    <Row className="product-row-1 add-curser">
                        <Col>Our Products</Col>
                    </Row>

                    <Row className="product-row-2">
                        {products.map((product) => {
                            return (
                                <Col key={product.id} className="product-column">
                                    <CardItem
                                        id={product.id}
                                        Name={product.Name}
                                        Weight={product.Weight}
                                        Price={product.Price}
                                    // image={item0}
                                    // productImages={productImages}
                                    // color={addToCartBtnStyle(isSelected)}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>

        </>
    );


}

export default OurProducts;
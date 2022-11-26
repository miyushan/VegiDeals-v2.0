import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from "react-bootstrap";
import CardItem from './CardItem';
import { ProductContext } from '../Context/ProductContext';

function PopularItems () {

    const { popularProducts } = useContext(ProductContext);
    const [popularProductArr, setPopularProductArr] = useState([]);

    useEffect(() => {
        let popularPro =popularProducts.sort(() => Math.random() - Math.random()).slice(0, 4)
        setPopularProductArr(popularPro)
    }, [popularProducts]);

    // const popular = [
    //     {id: '7', Name: 'Red Onion', Price: '455.2'},
    //     {id: '1', Name: 'Carrot', Price: '220'},
    //     {id: '10', Name: 'Green Chilies', Price: '475.25'},
    //     {id: '5', Name: 'Potatoes', Price: '220'},
    // ]

    return(
        <div>
            <Container className="b_outer-popular">
                <div className="b_row-1 text-center">Popular Items</div>
                <Row className="b_row-2 mx-auto">
                    {popularProductArr.map((product) =>{
                        return (
                            <Col key={product.id} className="product-column">
                                <CardItem
                                    id={product.id}
                                    Name={product.Name}
                                    Weight={product.Weight}
                                    Price={product.Price}
                                    // color={addToCartBtnStyle(isSelected)}
                                />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
        
    );
      

}

export default PopularItems;
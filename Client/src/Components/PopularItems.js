import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from "react-bootstrap";
import CardItem from './CardItem';
import { ProductContext } from '../Context/ProductContext';

function PopularItems () {

    const { popularProducts } = useContext(ProductContext);
    const [popularProductArr, setPopularProductArr] = useState([]);
    // const popularProductArr = [];

    useEffect(() => {
        // let popularPro =popularProducts.sort(() => Math.random() - Math.random()).slice(0, 4)
        // let popularPro =popularProducts.sort(() => Math.random() - Math.random()).slice(0, 4)
        // setPopularProductArr(popularProducts)
        // console.log(popularProducts)
        for (let i = 0; i < popularProducts.length; i++) {
            if(popularProducts[i].id===1 || popularProducts[i].id===5 || popularProducts[i].id===3 || popularProducts[i].id===2){
                // popularProductArr.push(popularProducts[i]);
                setPopularProductArr(prevArray => [...prevArray, popularProducts[i]])

        //         // console.log(popularProducts[i])
            }
        }
        // if(popularProducts[i])
        // console.log(popularProductArr)
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
                    {/* {console.log(popularProductArr)} */}
                    {popularProductArr.map((product) =>{
                        
                        // {console.log(product[0].id)}
                        return (
                            // {product.id===1|| product.id===5 || product.id===3 || product.id===2 &&
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
import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Row, Col, Button} from "react-bootstrap";
import { CartContext } from '../Context/CartContext';
import { ProductContext } from '../Context/ProductContext';

export default function CardItem (props){
    const [buttonStyle, setButtonStyle] = useState({});
    const [isButtonSelected, setisButtonSelected] = useState(false);
    const [cartBtnText, setCartBtnText] = useState('Add To Cart');

    const { addToCart } = useContext(CartContext);
    const { productArr } = useContext(ProductContext);

    useEffect(()=>{
        try{
            let cartData = localStorage.getItem('cartDetails');
            cartData = JSON.parse(cartData);

            cartData.forEach(item=>{
                if(item.Name === props.Name){
                    setButtonStyle({
                        backgroundColor: '#3B3737',
                        color: '#fff'
                    });
                    setCartBtnText('Remove');
                    setisButtonSelected(true);
                }
            })
        }catch(err){
            // console.log(err);
            console.log('Item is not in the cart');
        }
    },[props.Name])

    
    

    const changeBtn = () =>{
        if(isButtonSelected===false){
            setButtonStyle({
                backgroundColor: '#3B3737',
                color: '#fff'
            });
            setCartBtnText('Remove');
            setisButtonSelected(true);
        }else{
            setButtonStyle({});
            setisButtonSelected(false);
            setCartBtnText('Add To Cart');
        }
    }

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
            <Card className="b_card-item b_add-curser" style={{ width: '210px' }}>
                <Card.Img className="b_card-image" variant="top" src={getItem(props.id)} alt="Product Image"/>
                <Card.Body className="">
                    <Card.Title className="b_card-title">{props.Name}</Card.Title>
                    <Container className="b_item-con">
                        <Row>
                            <Col className="text-left">1 Kg</Col>
                            <Col className="text-left">Rs. {props.Price}</Col>
                        </Row>
                    </Container>
                    <Button onClick={()=>{addToCart(props.id, parseFloat(props.Price)); changeBtn();}} style={buttonStyle} variant="success" className="b_btn-cart" >{cartBtnText}</Button>
                </Card.Body>
            </Card>
        </>   
    )
    
    

}



















// export default class CardItem extends Component {

//     constructor(props) {
//         super(props);
//         this.onClick = this.onClick.bind(this);

//         this.state = {
//             clickedItems: []
//         }
//     }

    
//     onClick(key) {
//         console.log(key);
//         this.temp = this.clickedItems.concat(key);
//         this.setState=({
//             clickedItems : this.temp
//         })
//         // // this.clickedItems.push(key);
//         // console.log(this.clickedItems);

//     }


//     render(props){
//         return(
//             <>
//                 <Card className="card-item add-curser" style={{ width: '210px' }}>
//                     <Card.Img className="card-image" variant="top" src={this.props.image}/>
//                     <Card.Body className="body-cart">
//                         <Card.Title className="card-title">{this.props.Name}</Card.Title>
//                         <Container className="item-con">
//                             <Row>
//                                 <Col className="weight">{this.props.Weight} Kg</Col>
//                                 <Col className="price">Rs. {this.props.Price}</Col>
//                             </Row>
//                         </Container>
//                         <Button onClick={()=>{this.onClick(this.props.Name)}} className="btn-cart">Add To Cart</Button>
//                     </Card.Body>
//                 </Card>
//             </>   
//         )
//     }
    
    

// }

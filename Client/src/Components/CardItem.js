import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { ProductContext } from "../Context/ProductContext";
import { ReactComponent as Reduce } from "../Media/icons/reduce.svg";
import { ReactComponent as Increase } from "../Media/icons/increase.svg";

export default function CardItem (props){
    const [buttonStyle, setButtonStyle] = useState({});
    const [isButtonSelected, setisButtonSelected] = useState(false);
    const [cartBtnText, setCartBtnText] = useState('Add To Cart');

    const { addToCart } = useContext(CartContext);
    const { productArr } = useContext(ProductContext);
    
    const { changeCartQuantity } = useContext(CartContext);

    let [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(props.Price);
    const maxWeight = parseFloat(props.Weight);

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
                    setQuantity(item.CartWeight);
                    setPrice(item.CartPrice);
                }
            })
        }catch(err){
            // console.log(err);
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
            setQuantity(1);
            setPrice(props.Price);
        }
    }


  const getItem = (id) => {
    const numOfImages = productArr.length;

    if (numOfImages > id) {
      return productArr[id];
    } else {
      return productArr[0];
    }
  };

    const increase = () => {
        if (maxWeight > quantity && quantity > 0) {
            const tempP = Math.round((props.Price * (quantity + 0.1)) * 1e2) / 1e2;
            const tempQ = Math.round((quantity + 0.1) * 1e2) / 1e2
            setPrice(tempP);
            setQuantity(tempQ);
            changeCartQuantity(props.id, tempP, tempQ);
        }
    }

    const reduce = () => {
        if (maxWeight > quantity && quantity > 0.1) {
            const tempP = Math.round((props.Price * (quantity - 0.1)) * 1e2) / 1e2;
            const tempQ = Math.round((quantity - 0.1) * 1e2) / 1e2
            setPrice(tempP);
            setQuantity(tempQ);
            changeCartQuantity(props.id, tempP, tempQ);
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
                            <Col className="text-right">Rs. {props.Price.toFixed(2)}</Col>
                            
                        </Row>
                   
                        {/* if added to cart */}
                        {isButtonSelected ? <div>
                            <div className='break'></div>
                            <Row>
                                <Col className="text-left">Quantity</Col>
                                <br />
                                <Col className="text-right" style={{fontWeight: 'bold'}}>{quantity} Kg</Col>
                            </Row>
                            <Row style={{paddingTop:'10px', marginBottom:'10px'}}>
                                <Col></Col>
                                <Col>
                                    <Row>
                                        <Col className="cart-icons text-end" ><Reduce onClick={() => { reduce() }} className="success change-weight" style={{fill:"#8B0000"}} height="22px" /></Col>
                                        <Col className="cart-icons text-center"><Increase onClick={() => { increase() }} className="success change-weight" style={{fill:"#006402"}} height="22px" /></Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row style={{marginTop:"8px"}}>
                                <Col className="text-left">Price</Col>
                                <br />
                                <Col className="text-right" style={{fontWeight: 'bold'}}>Rs. {price.toFixed(2)}</Col>
                            </Row>
                            </div> : null
                        }
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

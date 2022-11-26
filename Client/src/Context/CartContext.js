import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

function CartContextProvider(props) {

    const [products, setProducts] = useState([]);           //whole products
    const [cartProducts, setCartProducts] = useState([]);   //cart object
    let isExist = false;

    //use to get the total price and weight of cart items
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalWeight, setTotalWeight] = useState(0);
    const [priceWithDiscount, setPriceWithDiscount] = useState(0);
    const [isAddedToCart, setIsAddedToCart] = useState();
    const discount = 5;

    useEffect(() => {
        axios.get('http://localhost:4000/products')
            .then(res => {
                setProducts(res);
                // console.log(res);
            })
    }, [])

    useEffect(() => {
        let tempP = 0;
        let tempW = 0;
        let tempPWD = 0;
        try{
            let price = localStorage.getItem('cartDetails');
            price = JSON.parse(price);

            //check are there any items in the cart
            if (price === null) {
                setCartProducts([]);
            }
            else {
                setCartProducts(price);
            }

            price.forEach(item => {
                tempP = tempP + parseFloat(item.CartPrice);
                tempW = tempW + parseFloat(item.CartWeight);
                tempPWD = ((tempP * (100-discount))/100).toFixed( 2 );
                // console.log(tempPWD);
                setTotalPrice(tempP);
                setTotalWeight(tempW);
                setPriceWithDiscount(tempPWD);
            })
        }catch{
            // console.log('No products in the cart');
        }
    },[])


    //change selected item price and weight when change the quantity of a cart item
    const changeCartQuantity = (Id, price, weight) => {
        let tempP = 0;
        let tempW = 0;
        let tempPWD = 0;
        cartProducts.map(item => {
            if (item.id === Id) { 
                item.CartPrice = price;
                item.CartWeight = weight;
                return item;
            }else{
                return item;
            }
        })
        
        cartProducts.forEach(item => {
            tempP = tempP + Math.round(item.CartPrice * 1e2) / 1e2;
            tempW = tempW + item.CartWeight;
            tempPWD = ((tempP * (100-discount))/100).toFixed( 2 );
            setTotalPrice(tempP);
            setTotalWeight(tempW);
            setPriceWithDiscount(tempPWD);
        })

        //Add the session
        localStorage.setItem('cartDetails', JSON.stringify(cartProducts));
    }


    // check what kind of function call for the click
    const addToCart = (Id, cost) => {
        isExist = false;

        if (cartProducts.length === 0) {
            addItem(Id, cost);
        }
        else {
            cartProducts.forEach(product => {
                if (product.id === Id) {
                    isExist = true;
                }
            })
            if (isExist === false) {
                addItem(Id, cost);
                setIsAddedToCart(true);
            } else {
                removeFromCart(Id, cost);
                setIsAddedToCart(false);
            }
        }
    }
    //add a product to the cart
    const addItem = (Id, cost) => {

        let tempP = 0;
        let tempW = 0;
        let tempPWD = 0;

        Id = parseInt(Id)
        // console.log(products.data[0].id)
        const data = products.data.filter(product => {
            return product.id === Id
        })
        let newItems = [...cartProducts, data[0]]

        newItems = newItems.map(item => {
            if (item.id === Id) { 
                item.CartPrice = (item.Price)/2;
                item.CartWeight = 0.5;
                return item;
            }else{
                return item;
            }
        })

        newItems.forEach(item => {
            tempP = tempP + parseFloat(item.CartPrice).toFixed(2);
            tempW = tempW + parseFloat(item.CartWeight);
            tempPWD = ((tempP * (100-discount))/100).toFixed( 2 );
            setTotalPrice(tempP);
            setTotalWeight(tempW);
            setPriceWithDiscount(tempPWD);
        })

        setCartProducts(newItems);        
        console.log("Added product\t" + Id);
        localStorage.setItem('cartDetails', JSON.stringify(newItems));
    }
    //remove a product from the cart
    const removeFromCart = (Id) => {

        cartProducts.forEach(item => {
            if(item.id===Id) {
                const tempP = totalPrice-item.CartPrice.toFixed(2);
                const tempW = totalWeight-item.CartWeight;
                const tempPWD = ((tempP * (100-discount))/100).toFixed( 2 );
                setTotalPrice(tempP);
                setTotalWeight(tempW);
                setPriceWithDiscount(tempPWD);
            }
        })
        
        const data = cartProducts.filter(product => {
            return product.id !== Id;
        })

        console.log("Removed product\t" + Id);
        setCartProducts(data)

        //Add the session
        localStorage.setItem('cartDetails', JSON.stringify(data));

    }

    return (
        <CartContext.Provider value={{ addToCart, cartProducts, setCartProducts, removeFromCart, changeCartQuantity, totalPrice, totalWeight, priceWithDiscount, isAddedToCart }}>
            {props.children}
        </CartContext.Provider>
    );

}

export default CartContextProvider;
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

import item1 from '../Media/product-images/1_carrot.png';
import item2 from '../Media/product-images/1_Big_Onions.png';
import item3 from '../Media/product-images/1_tomatoes.png';
import item4 from '../Media/product-images/1_pumpkin.png';
import item5 from '../Media/product-images/1_potatoes.png';
import item6 from '../Media/product-images/1_Leeks.png';
import item7 from '../Media/product-images/1_Red Onions.png';
import item8 from '../Media/product-images/1_Cabbage.png';
import item9 from '../Media/product-images/1_Brinjals.png';
import item10 from '../Media/product-images/1_Green Chilies.png';
import item11 from '../Media/product-images/garlic.png';
import item12 from '../Media/product-images/Manioc.png';
import item13 from '../Media/product-images/Luffa .png';
import item14 from '../Media/product-images/Sweet Potato.png';
import item15 from '../Media/product-images/Ladies Fingers.png';
import item16 from '../Media/product-images/Capsicum.png';
import item17 from '../Media/product-images/Beet.png';
import item18 from '../Media/product-images/Bitter Gourd.png';
import item19 from '../Media/product-images/Lime.png';
import item20 from '../Media/product-images/Melon_Kekiri.png';
import item21 from '../Media/product-images/Broccoli.png';
import item22 from '../Media/product-images/Green Cucumber.png';
import item23 from '../Media/product-images/brinjal.png';
import item24 from '../Media/product-images/Bell Pepper Green.png';
import item25 from '../Media/product-images/Bell Pepper Yellow.png';
import item26 from '../Media/product-images/Thumba Karawila.png';
import item27 from '../Media/product-images/Onion Leaves.png';
import item28 from '../Media/product-images/Cauliflower.png';
import item29 from '../Media/product-images/ginger.png';
import item30 from '../Media/product-images/Winged bean-dambala.png';
import itempTemp from '../Media/product-images/tempProductImage.png'

export const ProductContext = createContext();

function ProductContextProvider(props) {

    const [products, setProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);
    const [productSelected, setProductSelected] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const productArr = [itempTemp, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19, item20, item21, item22, item23, item24, item25, item26, item27, item28, item29, item30];


    useEffect(() => {
        axios.get('http://localhost:4000/products')
            .then(res => {
                setProducts(res.data);
                axios.get('http://localhost:4000/products')
                    .then(res => {
                        setPopularProducts(res.data);
                    })
            })
    }, [])

    const handleAddProduct = (id) => {
        setProductSelected(!productSelected);
        setSelectedItems(id);
    }

    return (
        <ProductContext.Provider value={{ products, popularProducts, productSelected, selectedItems, handleAddProduct, productArr }}>
            {props.children}
        </ProductContext.Provider>
    );

}

export default ProductContextProvider;

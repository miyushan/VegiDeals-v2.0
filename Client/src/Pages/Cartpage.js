// import UpperNavBar from '../Components/UpperNavBar';
import React, { useEffect } from 'react';
import MainNavBar from '../Components/MainNavBar';
import CartItems from '../Components/CartItems';
import Footer from '../Components/Footer';

function Cartpage() {

    useEffect(() => {
        document.getElementsByClassName('nav-cart')[0].style.color = '#0f0';
    }, [])
    return (
        <>
            {/* <UpperNavBar /> */}
            <MainNavBar />
            <CartItems />
            <Footer />
        </>
    );
}

export default Cartpage;
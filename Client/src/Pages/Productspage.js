import React, { useState, useEffect } from 'react';
// import UpperNavBar from '../Components/UpperNavBar';
import MainNavBar from '../Components/MainNavBar';
import OurProducts from '../Components/OurProducts';
import HashLoader from 'react-spinners/HashLoader';
import Footer from '../Components/Footer';
import GoToCart from '../Components/GoToCart';

import '../Pages/Productspage.css';

function Productspage() {

    const [spinner, setSpinner] = useState(true);
    const [show, setShow] = useState(false);

    useEffect(() => {
        document.getElementsByClassName('nav-products')[0].style.color = '#0f0';
        setTimeout(() => {
            setSpinner(false);
            setShow(true);
        }, 2700)
    }, [])

    return (
        <>
            {spinner ?
                <div className="cliploader-div d-flex justify-content-center align-items-center">
                    <HashLoader className="cliploader" size={80} color={"0f0"} />
                </div>
                : null}
            <div style={{ display: show ? "block" : "none" }}>
                <div id="products">
                    {/* <UpperNavBar /> */}
                    <MainNavBar />
                    <OurProducts />
                    <Footer />
                    <GoToCart />
                </div>
            </div>
        </>
    );


}

export default Productspage;
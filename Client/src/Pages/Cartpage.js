// import UpperNavBar from '../Components/UpperNavBar';
import React, { useEffect } from 'react';
import MainNavBar from '../Components/MainNavBar';
import CartItems from '../Components/CartItems';
import Footer from '../Components/Footer';

function Cartpage() {

    useEffect(() => {
        document.getElementsByClassName('nav-cart')[0].style.color = '#0f0';
        setTimeout(() => {
            try {
              //get data in the session
              let data = localStorage.getItem("newUser");
              data = JSON.parse(data);
              if (data.selectedAProduct) {
                window.alert(
                    "You are almost done. Please recheck your orders and scroll down to do the payments. \nWith successfull payment, you can get your orders in 3-5 days. \nUser guidance is quiting. Thank you!"
                  )
                localStorage.removeItem("newUser");

              }
              // console.log("Successful Login!");
            } catch (err) {}

          }, 1000);
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
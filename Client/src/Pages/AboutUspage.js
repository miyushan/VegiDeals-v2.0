// import UpperNavBar from '../Components/UpperNavBar';
import React, { useEffect } from 'react';
import MainNavBar from '../Components/MainNavBar';
import Footer from '../Components/Footer';


function AboutUspage() {

    useEffect(() => {
        document.getElementsByClassName('nav-about')[0].style.color = '#0f0';
    }, [])

    return (
        <>
            <div id="about-us">
                {/* <UpperNavBar /> */}
                <MainNavBar />
                <h2 style={{ height: '600px' }}>About Us</h2>
                <Footer />
            </div>
        </>
    );
}

export default AboutUspage;
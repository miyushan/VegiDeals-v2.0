// import UpperNavBar from '../Components/UpperNavBar';
import React, { useEffect } from 'react';
import MainNavBar from '../Components/MainNavBar';
import Footer from '../Components/Footer';

function Branchespage() {

    useEffect(() => {
        document.getElementsByClassName('nav-branch')[0].style.color = '#0f0';
    }, [])

    return (
        <>
            <div id="branches">
                {/* <UpperNavBar /> */}
                <MainNavBar />
                <h2 style={{ height: '600px' }}>Branches</h2>
                <Footer />
            </div>
        </>
    );
}

export default Branchespage;
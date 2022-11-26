import { Container } from "react-bootstrap";
import HashLoader from 'react-spinners/HashLoader';
import React, { Component } from 'react';
import MainNavBar from '../Components/MainNavBar';
import UpperNavBar from '../Components/UpperNavBar';
import SearchBar from '../Components/SearchBar';
import MainCover from '../Components/MainCover';
import Benificts from '../Components/Benificts';
import PopularItems from '../Components/PopularItems';
import OurProducts from '../Components/OurProducts';
import AboutUs from '../Components/AboutUs';
import Footer from '../Components/Footer';
import GoToCart from '../Components/GoToCart';
import '../Pages/Homepage.css';

import Organic from '../Media/organicFoods.png';

class Homepage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // user : this.props.firstName
            spinner: true,
            show: false
        }
        this.componentDidMount = this.componentDidMount.bind(this);

    }

    componentDidMount() {
        document.getElementsByClassName('nav-home')[0].style.color = '#0f0';
        setTimeout(() => {
            this.setState({
                spinner: false,
                show: true
            })
        }, 2700)
    }

    render(props) {
        return (
            <>
                {this.state.spinner ?
                    <div className="cliploader-div d-flex justify-content-center align-items-center">
                        <HashLoader className="cliploader" size={80} color={"0f0"} />
                    </div>
                    : null}

                <div style={{ display: this.state.show ? "block" : "none" }}>
                    <div id="home">
                        <UpperNavBar />
                        <MainNavBar />
                        <SearchBar />
                        <MainCover />
                        <Benificts />
                        <PopularItems />
                        <OurProducts />
                        <AboutUs />
                        <Container className="d-flex justify-content-center">
                            <img className="organic" src={Organic} alt="shop" />
                        </Container>
                        {/* <GoUp /> */}
                        <Footer />
                        <GoToCart />
                    </div>
                </div>

            </>
        );
    }

}

export default Homepage;
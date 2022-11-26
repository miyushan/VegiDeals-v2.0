import React, { Component } from 'react';
import Login from '../Components/Login';
import HashLoader from 'react-spinners/HashLoader';
import './Loginpage.css'

class Loginpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            spinner: true,
            show: false
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                spinner: false,
                show: true
            })
        }, 2700)
    }

    render() {
        return (
            <>
                {this.state.spinner ?
                    <div className="cliploader-div d-flex justify-content-center align-items-center">
                        <HashLoader className="cliploader" size={80} color={"0f0"} />
                    </div>
                    : null}
                <div style={{ display: this.state.show ? "block" : "none" }}>
                    <Login />
                </div>
            </>
        );
    }

}

export default Loginpage;
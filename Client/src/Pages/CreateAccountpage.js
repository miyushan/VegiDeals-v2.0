import React, { Component } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import CreateAccount from '../Components/CreateAccount';

class CreateAccountpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            spinner: true,
            show: false
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                spinner: false,
                show: true
            })
        }, 2700)
    }

    onClick() {

    }

    render() {
        console.log(this.state.show)
        return (
            <>
                {this.state.spinner ?
                    <div className="cliploader-div d-flex justify-content-center align-items-center">
                        <HashLoader className="cliploader" size={80} color={"0f0"} />
                    </div>
                    : null}
                <div style={{ display: this.state.show ? "block" : "none" }}>
                    <CreateAccount />
                </div>
            </>
        );
    }
}

export default CreateAccountpage;
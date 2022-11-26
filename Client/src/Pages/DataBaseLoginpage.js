import React, { Component } from 'react';
import DataBaseLogin from '../Components/DataBaseLogin';
import HashLoader from 'react-spinners/HashLoader';
import './DataBaseLoginpage.css'

class DataBaseLoginpage extends Component {

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
        localStorage.removeItem('adminDetails');
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
                    <DataBaseLogin />
                </div>
            </>
        );
    }

}

export default DataBaseLoginpage;
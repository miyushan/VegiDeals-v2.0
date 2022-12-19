import React, { Component } from 'react';
import Login from '../Components/Login';
import HashLoader from 'react-spinners/HashLoader';
import './Loginpage.css'

class Loginpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            spinner: true,
            show: false,
            isNeedGuide: false
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
        setTimeout(() => {
            try {
                //get data in the session
                let data = localStorage.getItem('newUser');
                data = JSON.parse(data);
                if(data.isCreatedAcc){
                    
                    this.setState({
                        isNeedGuide: true,
                      
                    })
                }
                // console.log("Successful Login!");
         
            }
            catch (err) {
                
            }
 
        }, 3000)
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
                {this.state.isNeedGuide ? window.confirm("Now you can LogIn to the system using your mobile number and password.\n(If you want to exit from User Guide press 'Cancel')")?null: localStorage.removeItem('newUser'): null}
            </>
        );
    }

}

export default Loginpage;
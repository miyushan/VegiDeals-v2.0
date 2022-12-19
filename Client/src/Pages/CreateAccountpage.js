import React, { Component } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import CreateAccount from '../Components/CreateAccount';

class CreateAccountpage extends Component {

    constructor(props) {
        super(props);
      
        this.state = {
            spinner: true,
            show: false,
            isNeedGuide: false
    
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
        setTimeout(() => {
            try {
                //get data in the session
                let data = localStorage.getItem('newUser');
                data = JSON.parse(data);
                if(data.isNeedGuide){
                    
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

    onClick() {

    }

    render() {
        // console.log(this.state.show)
        return (
            <>
                {this.state.spinner ?
                    <div className="cliploader-div d-flex justify-content-center align-items-center">
                        <HashLoader className="cliploader" size={80} color={"0f0"} />
                    </div>
                    : null}
                <div style={{ display: this.state.show ? "block" : "none" }}>
                    <CreateAccount />
                    {console.log(this.state.isNeedGuide)}
                </div>
           
                {this.state.isNeedGuide ? window.confirm("Please fill these fields and Create an account.\n(If you want to exit from User Guide press 'Cancel')")?null: localStorage.removeItem('newUser'): null}
     
                {/* {this.state.isNeedGuide ? (this.setState({
                    isNeedGuide:false
                })
                , window.alert("You need to login first!")
               ): null} */}
            </>
        );
    }
}

export default CreateAccountpage;
import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const EmployeeContext = createContext();

function EmployeeContextProvider (props){
    
    // const [deliveryPersons, setDeliveryPersons] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [branches, setBranches] = useState([]);
    const [orders, setOrders] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [customers, setCustomers] = useState([]);
    // const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() =>{
        // axios.get('http://localhost:4000/delivery-persons')
        // .then (res =>{
        //     setDeliveryPersons(res.data);
            axios.get('http://localhost:4000/employees')
            .then (res =>{
                setEmployees(res.data);
                axios.get('http://localhost:4000/branches')
                .then (res =>{
                    setBranches(res.data);
                    axios.get('http://localhost:4000/orders')
                    .then (res =>{
                        setOrders(res.data);
                        axios.get('http://localhost:4000/customers')
                        .then (res =>{
                            setCustomers(res.data);
                            axios.get('http://localhost:4000/order-items')
                            .then (res =>{
                                setOrderItems(res.data);
                            })
                        })
                    })
                })
            })
        // })
    },[])

    return (
        <EmployeeContext.Provider value={{ employees, branches, orders, customers, orderItems }}>
            {props.children}
        </EmployeeContext.Provider>
    );
    
}
 
export default EmployeeContextProvider;

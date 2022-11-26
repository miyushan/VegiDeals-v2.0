import React, { createContext, useState } from 'react';

export const UserContext = createContext();

function UserContextProvider (props){
    
    const [isLogedIn, setIsLogedIn] = useState();

    return (
        <UserContext.Provider value={{isLogedIn, setIsLogedIn}}>
            {props.children}
        </UserContext.Provider>
    );
    
}
 
export default UserContextProvider;

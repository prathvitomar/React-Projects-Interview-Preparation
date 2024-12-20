import React, { createContext, useState } from 'react'

export const FormContext = createContext();

function MainContext({children}) {
    const [username, setUsername] = useState("");
    
    return (
        <FormContext.Provider value={{username, setUsername}}>
        {children}
        </FormContext.Provider>
    )
}

export default MainContext


function ContextUsing(){
    return(
        <MainContext>
            <FormContext/>
        </MainContext>
    )
}
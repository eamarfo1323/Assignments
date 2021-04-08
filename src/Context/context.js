import React, { createContext, useContext, useState} from "react";



const AppContext = createContext();



const AppProvider = (props) => {
    const [values, setValues] = useState({})

    function updateValues(e){
        console.log(e.target.value)
         setValues({...values,[e.target.name] : e.target.value})
    
    }


    return (
        <AppContext.Provider value={{updateValues}}>
            { props.children }
        </AppContext.Provider>
    )
}






const useAppContext = () => useContext(AppContext)

export  {
    AppProvider,
    useAppContext
}

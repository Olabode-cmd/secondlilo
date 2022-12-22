import React, { createContext ,useContext, useState } from "react";

const StateContext = createContext()
const initialState = {
    
}

export const ContextProvider =({children}) => {
    const [screenSize, setScreenSize] = useState(undefined)

    const getWindowDimensions = () => {
        const { innerWidth: width} = window;
        setScreenSize(width)
      }
    
    return (
        <StateContext.Provider
            value={getWindowDimensions}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)

import React, { createContext, useEffect, useState } from 'react'

export const StartContext = createContext();

export const StartProvider = ({children}) => {

    const [view, setView] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setView(false)
        }, 2000);
    }, [])
    
    const data = [view, setView]

    return (
        <StartContext.Provider value={data}>
            {children}
        </StartContext.Provider>
    )
}




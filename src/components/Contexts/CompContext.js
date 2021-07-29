import React, { createContext, useState } from 'react'

export const CompContext = createContext();

export const CompProvider = ({ children }) => {
    
    const initialState = {
        competidor1: "MC 1",
        competidor2: "MC 2"
    }

    const [competidores, setCompetidores] = useState(initialState)

    const {competidor1, competidor2} = competidores;

    const data = {
        competidor1,
        competidor2,
        setCompetidores
    }

    return (
        <CompContext.Provider value={data}>
            {children}
        </CompContext.Provider>
    )
}
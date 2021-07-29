import React, { createContext, useContext, useState } from 'react'
import { DataContext } from './DataContext';

export const FormatoContext = createContext();

export const FormatoProvider = ({ children }) => {
    
    const {resetData} = useContext(DataContext);

    const [formato, setFormato] = useState("2020")

    const changeFormato = (setMode) => {
        resetData();
        setMode("EASY MODE");
        if(formato === "2018"){
            setFormato("2020")
        }
        if(formato === "2020"){
            setFormato("2018")
        }
    }

    const data = {
        formato,
        setFormato,
        changeFormato
    }

    return (
        <FormatoContext.Provider value={data}>
            {children}
        </FormatoContext.Provider>
    )
}
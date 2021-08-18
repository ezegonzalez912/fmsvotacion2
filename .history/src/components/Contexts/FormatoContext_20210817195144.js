import React, { createContext, useContext, useState } from 'react'
import { DataContext } from './DataContext';

export const FormatoContext = createContext();

export const FormatoProvider = ({ children }) => {
    
    const {resetData} = useContext(DataContext);

    const [formato, setFormato] = useState("2020")

    const changeFormato = (setMode) => {
        resetData();
        if(formato === "2021"){
            setMode("INCREMENTAL");
        }else {
            setMode("EASY MODE");
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
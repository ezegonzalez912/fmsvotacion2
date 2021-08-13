import React, { createContext, useContext, useEffect, useState } from 'react'
import { resultadoText } from '../../helpers/resultadoText';
import { useTotal } from '../../hooks/useTotal';
import { CompContext } from './CompContext';
import { DataContext } from './DataContext';

export const TotalContext = createContext();

export const TotalProvider = ({ children }) => {

    const {competidor1, competidor2} = useContext(CompContext);
    const datos = useContext(DataContext);

    const [total1, total2] = useTotal(datos);

    const [resultado, setResultado] = useState("Replica por 0 puntos.")
    
    useEffect(() => {
        const res = resultadoText(total1, total2, competidor1, competidor2)
        setResultado(res)

    }, [total1, total2, competidor1, competidor2])
    
    const data = {
        total1,
        total2,
        resultado
    }

    
    return (
        <TotalContext.Provider value={data}>
            {children}
        </TotalContext.Provider>
    )
}
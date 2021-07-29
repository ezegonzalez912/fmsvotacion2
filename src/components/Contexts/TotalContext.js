import React, { createContext, useContext, useEffect, useState } from 'react'
import { useTotal } from '../../hooks/useTotal';
import { CompContext } from './CompContext';

export const TotalContext = createContext();

export const TotalProvider = ({ children }) => {

    const {competidor1, competidor2} = useContext(CompContext);

    const [total1, total2] = useTotal();

    const [resultado, setResultado] = useState("Replica por 0 puntos.")
    
    useEffect(() => {
        const resto1 = total1 - total2
        const resto2 = total2 - total1
        
        if(resto1 >= 0){
            if (resto1 <= 5){
                return setResultado(`El resultado es: REPLICA por diferencia de ${resto1} puntos.`)
            }
        }else if(resto2 >= 0){
            if (resto2 <= 5){
                return setResultado(`El resultado es: REPLICA por diferencia de ${resto2} puntos.`)
            }
        }
        if(total1 > total2){
            const puntaje = total1 - total2
            return setResultado(`El ganador es ${competidor1} por ${puntaje} puntos.`)
        }
        if(total2 > total1){
            const puntaje = total2 - total1
            return setResultado(`El ganador es ${competidor2} por ${puntaje} puntos.`)
        }
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
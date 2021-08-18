import React from 'react'
import { resultadoText } from '../../helpers/resultadoText'
import { totalData } from '../../helpers/totalData'
import { useTotal } from '../../hooks/useTotal'

export const ResultadosRead = ({data, formato, competidores}) => {

    const [total1, total2] = useTotal(data)
    const {competidor1, competidor2} = competidores
    const resultado = resultadoText(total1, total2, competidor1, competidor2)

    return (
        <div className="resultadosRead__container">
            <div className="resultadosRead__content">
                <div className="resultadosRead__competidores">
                    <p className="opacity-0">_</p>
                    <p>{competidor1}</p>
                    <p>{competidor2}</p>
                </div>
                
                <div>
                    <p>TOTAL</p>
                    <p>{total1}</p>
                    <p>{total2}</p>
                </div>
            </div>
            <p className="resultadosRead__res-text">{resultado}</p>
        </div>
    )
}

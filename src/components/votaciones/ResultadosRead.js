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
                    <p>EASY</p>
                    <p>{totalData(data.easyMode.easyMode1)}</p>
                    <p>{totalData(data.easyMode.easyMode2)}</p>
                </div>
                <div>
                    <p>HARD</p>
                    <p>{totalData(data.hardMode.hardMode1)}</p>
                    <p>{totalData(data.hardMode.hardMode2)}</p>
                </div>
                <div>
                    <p>TEMATICA</p>
                    <p>{totalData(data.firstTematica.firstTematica1) + totalData(data.secondTematica.secondTematica1)}</p>
                    <p>{totalData(data.firstTematica.firstTematica2) + totalData(data.secondTematica.secondTematica2)}</p>
                </div>
                {
                    formato === "2018" ?
                    <div>
                        <p>PERSON...</p>
                        <p>{totalData(data.personajes.personajesMode1)}</p>
                        <p>{totalData(data.personajes.personajesMode2)}</p>
                    </div>
                    :
                    <div>
                        <p>RANDOM</p>
                        <p>{totalData(data.randomMode.randomMode1)}</p>
                        <p>{totalData(data.randomMode.randomMode2)}</p>
                    </div>
                }
                <div>
                    <p>SANGRE</p>
                    <p>{totalData(data.firstSangre.firstSangre1) + totalData(data.secondSangre.secondSangre1)}</p>
                    <p>{totalData(data.firstSangre.firstSangre2) + totalData(data.secondSangre.secondSangre2)}</p>
                </div>
                <div>
                    <p>DELUXE</p>
                    <p>{totalData(data.deluxeMode.deluxeMode1)}</p>
                    <p>{totalData(data.deluxeMode.deluxeMode2)}</p>
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

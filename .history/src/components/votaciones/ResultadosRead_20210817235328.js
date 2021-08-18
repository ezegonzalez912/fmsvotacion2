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
                {formato === "2021" ?
                    <>
                        <div>
                            <p>Incremental</p>
                            {totalData(data.incremental.incremental1)} <br />
                            {totalData(data.incremental.incremental2)}
                        </div>
                        <div>
                            <p>Clasico 8x8</p>
                            {totalData(data.clasico8x8.clasico8x81)} <br />
                            {totalData(data.clasico8x8.clasico8x82)}
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <p>Easy mode</p>
                            {totalData(data.easyMode.easyMode1)} <br />
                            {totalData(data.easyMode.easyMode2)}
                        </div>
                        <div>
                            <p>Hard mode</p>
                            {totalData(data.hardMode.hardMode1)} <br />
                            {totalData(data.hardMode.hardMode2)}
                        </div>
                        <div>
                            <p>Tematicas</p>
                            {totalData(data.firstTematica.firstTematica1) + totalData(data.secondTematica.secondTematica1)} <br />
                            {totalData(data.firstTematica.firstTematica2) + totalData(data.secondTematica.secondTematica2)}
                        </div>
                        {
                            formato === "2018" ?
                            <div>
                                <p>PERSONAJES</p>
                                {totalData(data.personajes.personajesMode1)} <br />
                                {totalData(data.personajes.personajesMode2)}
                            </div>
                            :
                            <div>
                                <p>RANDOM</p>
                                {totalData(data.randomMode.randomMode1)} <br />
                                {totalData(data.randomMode.randomMode2)}
                            </div>
                        }
                        <div>
                            <p>SANGRE</p>
                            {totalData(data.firstSangre.firstSangre1) + totalData(data.secondSangre.secondSangre1)} <br />
                            {totalData(data.firstSangre.firstSangre2) + totalData(data.secondSangre.secondSangre2)}
                        </div>
                        <div>
                            <p>DELUXE</p>
                            {totalData(data.deluxeMode.deluxeMode1)} <br />
                            {totalData(data.deluxeMode.deluxeMode2)}
                        </div>
                    </>
                }
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

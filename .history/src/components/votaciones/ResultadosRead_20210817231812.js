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
                            {totalData(incremental.incremental1)} <br />
                            {totalData(incremental.incremental2)}
                        </div>
                        <div>
                            <p>Clasico 8x8</p>
                            {totalData(clasico8x8.clasico8x81)} <br />
                            {totalData(clasico8x8.clasico8x82)}
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <p>Easy mode</p>
                            {totalData(easyMode.easyMode1)} <br />
                            {totalData(easyMode.easyMode2)}
                        </div>
                        <div>
                            <p>Hard mode</p>
                            {totalData(hardMode.hardMode1)} <br />
                            {totalData(hardMode.hardMode2)}
                        </div>
                        <div>
                            <p>Tematicas</p>
                            {totalData(firstTematica.firstTematica1) + totalData(secondTematica.secondTematica1)} <br />
                            {totalData(firstTematica.firstTematica2) + totalData(secondTematica.secondTematica2)}
                        </div>
                        {
                            formato === "2018" ?
                            <div>
                                <p>Personajes</p>
                                {totalData(personajes.personajesMode1)} <br />
                                {totalData(personajes.personajesMode2)}
                            </div>
                            :
                            <div>
                                <p>Random</p>
                                {totalData(randomMode.randomMode1)} <br />
                                {totalData(randomMode.randomMode2)}
                            </div>
                        }
                        <div>
                            <p>Sangre</p>
                            {totalData(firstSangre.firstSangre1) + totalData(secondSangre.secondSangre1)} <br />
                            {totalData(firstSangre.firstSangre2) + totalData(secondSangre.secondSangre2)}
                        </div>
                        <div>
                            <p>Deluxe</p>
                            {totalData(deluxeMode.deluxeMode1)} <br />
                            {totalData(deluxeMode.deluxeMode2)}
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

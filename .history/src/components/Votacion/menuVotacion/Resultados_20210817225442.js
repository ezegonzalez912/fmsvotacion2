import React, { useContext } from 'react'
import { totalData } from '../../../helpers/totalData';
import { CompContext } from '../../Contexts/CompContext';
import { DataContext } from '../../Contexts/DataContext';
import { FormatoContext } from '../../Contexts/FormatoContext';
import { TotalContext } from '../../Contexts/TotalContext';

export const Resultados = () => {

    const {easyMode, hardMode, firstTematica, secondTematica, randomMode, firstSangre, secondSangre, deluxeMode, personajes, incremental, clasico8x8} = useContext(DataContext);
    const {formato} = useContext(FormatoContext)
    const {total1, total2, resultado} = useContext(TotalContext)
    const {competidor1, competidor2} = useContext(CompContext)

    return (
        <>
            <div className="mode__resultado">
                <div>
                    <p className="opacity-0">Competidores</p>
                    {competidor1} <br />
                    {competidor2}
                </div>
                {formato === "2021" ?
                    <div>
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
                    </div>
                    :
                    <div>
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
                    </div>
                }
                <div>
                    <p>Total</p>
                    {total1} <br />
                    {total2}
                </div>
            </div>
            <p className="mode__resultado-subtitle animate__animated animate__flipInX">{resultado}</p>
        </>
    )
}

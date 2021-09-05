import React, { useContext } from 'react'
import { totalData } from '../../../helpers/totalData';
import { CompContext } from '../../Contexts/CompContext';
import { DataContext } from '../../Contexts/DataContext';
import { FormatoContext } from '../../Contexts/FormatoContext';
import { TotalContext } from '../../Contexts/TotalContext';

export const Resultados = ({setMode}) => {

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
                <div>
                    <div onClick={() => setMode("EASY MODE")}>
                        {formato === "2021" ?  <p>Easy</p> : <p>Easy mode</p>}
                    </div>
                    {totalData(easyMode.easyMode1)} <br />
                    {totalData(easyMode.easyMode2)}
                </div>
                <div>
                    <div onClick={() => setMode("HARD MODE")}>
                        {formato === "2021" ?  <p>Hard</p> : <p>Hard mode</p>}
                    </div>
                    {totalData(hardMode.hardMode1)} <br />
                    {totalData(hardMode.hardMode2)}
                </div>
                {
                    formato === "2021" &&
                    <div>
                        <p onClick={() => setMode("INCREMENTAL")}>Incremental</p>
                        {totalData(incremental.incremental1)} <br />
                        {totalData(incremental.incremental2)}
                    </div>
                }
                <div>
                    <p onClick={() => setMode("PRIMER TEMATICA")}>Tematicas</p>
                    {totalData(firstTematica.firstTematica1) + totalData(secondTematica.secondTematica1)} <br />
                    {totalData(firstTematica.firstTematica2) + totalData(secondTematica.secondTematica2)}
                </div>
                {
                    formato === "2018" ?
                    <div>
                        <p onClick={() => setMode("PERSONAJES CONTRAPUESTOS")}>Personajes</p>
                        {totalData(personajes.personajesMode1)} <br />
                        {totalData(personajes.personajesMode2)}
                    </div>
                    :
                    <div>
                        <p onClick={() => setMode("RANDOM MODE")}>Random</p>
                        {totalData(randomMode.randomMode1)} <br />
                        {totalData(randomMode.randomMode2)}
                    </div>
                }
                <div>
                    <p onClick={() => setMode("PRIMER MINUTO SANGRE")}>Sangre</p>
                    {totalData(firstSangre.firstSangre1) + totalData(secondSangre.secondSangre1)} <br />
                    {totalData(firstSangre.firstSangre2) + totalData(secondSangre.secondSangre2)}
                </div>
                {
                    formato === "2021" &&
                    <div>
                        <p onClick={() => setMode("CLASICO 8X8")}>8x8</p>
                        {totalData(clasico8x8.clasico8x81)} <br />
                        {totalData(clasico8x8.clasico8x82)}
                    </div>
                }
                <div>
                    <p onClick={() => setMode("RONDA DELUXE")}>Deluxe</p>
                    {totalData(deluxeMode.deluxeMode1)} <br />
                    {totalData(deluxeMode.deluxeMode2)}
                </div>
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

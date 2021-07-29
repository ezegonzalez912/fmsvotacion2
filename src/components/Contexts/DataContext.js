import React, { createContext } from 'react'
import { useVote } from '../../hooks/useVote';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [easyMode1, easyInput1, resetVote] = useVote();
    const [easyMode2, easyInput2, resetVote1] = useVote();

    const [hardMode1, hardInput1, resetVote2] = useVote();
    const [hardMode2, hardInput2, resetVote3] = useVote();

    const [firstTematica1, firstTematicaInput1, resetVote4] = useVote();
    const [firstTematica2, firstTematicaInput2, resetVote5] = useVote();

    const [secondTematica1, secondTematicaInput1, resetVote6] = useVote();
    const [secondTematica2, secondTematicaInput2, resetVote7] = useVote();

    const [randomMode1, randomModeInput1, resetVote8] = useVote();
    const [randomMode2, randomModeInput2, resetVote9] = useVote();

    const [firstSangre1, firstSangreInput1, resetVote10, inputChangeEx] = useVote();
    const [firstSangre2, firstSangreInput2, resetVote11] = useVote();

    const [secondSangre1, secondSangreInput1, resetVote12] = useVote();
    const [secondSangre2, secondSangreInput2, resetVote13, inputChangeEx2] = useVote();

    const [deluxeMode1, deluxeModeInput1, resetVote14] = useVote();
    const [deluxeMode2, deluxeModeInput2, resetVote15] = useVote();

    const [replicaMode1, replicaModeInput1, resetVote16] = useVote();
    const [replicaMode2, replicaModeInput2, resetVote17] = useVote();

    const [personajesMode1, personajesModeInput1, resetVote18, inputChangeEx3] = useVote();
    const [personajesMode2, personajesModeInput2, resetVote19, inputChangeEx4] = useVote();

    const easyMode = {easyMode1, easyInput1, easyMode2, easyInput2}
    const hardMode = {hardMode1, hardInput1, hardMode2, hardInput2}
    const firstTematica = {firstTematica1, firstTematicaInput1, firstTematica2, firstTematicaInput2}
    const secondTematica = {secondTematica1, secondTematicaInput1, secondTematica2, secondTematicaInput2}
    const randomMode = {randomMode1, randomModeInput1, randomMode2, randomModeInput2}
    const firstSangre = {firstSangre1, firstSangreInput1, firstSangre2, firstSangreInput2, inputChangeEx}
    const secondSangre = {secondSangre1, secondSangreInput1, secondSangre2, secondSangreInput2, inputChangeEx2}
    const deluxeMode = {deluxeMode1, deluxeModeInput1, deluxeMode2, deluxeModeInput2}
    const replicaMode = {replicaMode1, replicaModeInput1, replicaMode2, replicaModeInput2, resetVote16, resetVote17}
    const personajes = {personajesMode1, personajesModeInput1, inputChangeEx3, personajesMode2, personajesModeInput2, inputChangeEx4}

    const resetData = () => {
        resetVote()
        resetVote1()
        resetVote2() 
        resetVote3()
        resetVote4()
        resetVote5()
        resetVote6()
        resetVote7()
        resetVote8()
        resetVote9()
        resetVote10()
        resetVote11()
        resetVote12()
        resetVote13()
        resetVote14()
        resetVote15()
        resetVote16()
        resetVote17()
        resetVote18()
        resetVote19()
    }

    const data = {
        resetData,
        easyMode,
        hardMode,
        firstTematica,
        secondTematica,
        randomMode,
        firstSangre,
        secondSangre,
        deluxeMode,
        replicaMode,
        personajes
    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

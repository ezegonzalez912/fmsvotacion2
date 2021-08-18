import { useEffect, useState } from "react"
import { totalData } from "../helpers/totalData"

export const useTotal = (data) => {

    const {easyMode, hardMode, firstTematica, secondTematica, randomMode, firstSangre, secondSangre, deluxeMode, personajes, incremental, clasico8x8} = data;

    const [total1, setTotal1] = useState(0)
    const [total2, setTotal2] = useState(0)

    useEffect(() => {
        setTotal1(totalData(easyMode.easyMode1) + totalData(hardMode.hardMode1) + totalData(firstTematica.firstTematica1) + totalData(secondTematica.secondTematica1) 
        + totalData(randomMode.randomMode1) + totalData(firstSangre.firstSangre1) + totalData(secondSangre.secondSangre1) + totalData(deluxeMode.deluxeMode1) 
        + totalData(personajes.personajesMode1) + incremental ? totalData(incremental.incremental1) + totalData(clasico8x8.clasico8x81) : 0)
    }, [easyMode.easyMode1, hardMode.hardMode1, firstTematica.firstTematica1, secondTematica.secondTematica1, randomMode.randomMode1, firstSangre.firstSangre1, secondSangre.secondSangre1,
    deluxeMode.deluxeMode1, personajes.personajesMode1, incremental && incremental.incremental1, incremental && clasico8x8.clasico8x81])

    useEffect(() => {
        setTotal2(totalData(easyMode.easyMode2) + totalData(hardMode.hardMode2) + totalData(firstTematica.firstTematica2) + totalData(secondTematica.secondTematica2)
        + totalData(randomMode.randomMode2) + totalData(firstSangre.firstSangre2) + totalData(secondSangre.secondSangre2) + totalData(deluxeMode.deluxeMode2) 
        + totalData(personajes.personajesMode2) + incremental ? totalData(incremental.incremental2) + totalData(clasico8x8.clasico8x82) : 0)
    }, [easyMode.easyMode2, hardMode.hardMode2, firstTematica.firstTematica2, secondTematica.secondTematica2, randomMode.randomMode2, firstSangre.firstSangre2, secondSangre.secondSangre2,
    deluxeMode.deluxeMode2, personajes.personajesMode2, incremental && incremental.incremental2, incremental && clasico8x8.clasico8x82])

    return [total1, total2]
}

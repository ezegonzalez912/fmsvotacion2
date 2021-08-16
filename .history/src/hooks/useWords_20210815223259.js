import { useEffect, useState } from "react";
import { palabras } from "../helpers/palabras";

export const useWords = (mode, time) => {

    const [palabra, setPalabra] = useState("¿LISTO?")

    useEffect(() => {
        const randomPalabra = Math.floor(Math.random() * (palabras[0].palabras.length - 1)) + 1
        const newPalabra = palabras[0].palabras[randomPalabra].toUpperCase();

        if(mode === "EASY MODE" && time % 10 === 0){
            setPalabra(newPalabra)
        }
        if(mode === "HARD MODE" && time % 5 === 0){
            setPalabra(newPalabra)
        }
        if(mode === "EXTREME MODE" && time % 2 === 0){
            setPalabra(newPalabra)
        }
        if(mode === "TEMATICAS" && time === 90){
            const random = Math.floor(Math.random() * (palabras[1].tematicas.length - 1)) + 1
            const newPalabraT = palabras[1].tematicas[random].toUpperCase();
            setPalabra(newPalabraT)
        }
        if(mode === "INCREMENTAL"){
            if(time >= 60 && time % 10 === 0){
                console.log(1)
                return setPalabra(newPalabra)
            }else if(time >= 30 && time % 5 === 0){
                console.log(2)
                return setPalabra(newPalabra)
            }else if(time >= 0 && time % 2 === 0){
                console.log(3)
                return setPalabra(newPalabra)
            }
        }
    }, [time, mode])

    return palabra
}

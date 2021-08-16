import { useEffect, useState } from "react";
import { palabras } from "../helpers/palabras";

export const useWords = (mode, time) => {

    const [palabra, setPalabra] = useState("¿LISTO?")

    useEffect(() => {
        const randomPalabra = Math.floor(Math.random() * (palabras[0].palabras.length - 1)) + 1
        const newPalabra = palabras[0].palabras[randomPalabra].toUpperCase();

        if(mode === "EASY MODE"){
            if(time % 10 === 0){
                setPalabra(newPalabra)
            }
        }
        if(mode === "HARD MODE"){
            if(time % 5 === 0){
                setPalabra(newPalabra)
            }
        }
        if(mode === "EXTREME MODE"){
            if(time % 2 === 0){
                setPalabra(newPalabra)
            }
        }
        if(mode === "TEMATICAS"){
            const random = Math.floor(Math.random() * (palabras[0].tematicas.length - 1)) + 1
            const newPalabra = palabras[0].tematicas[random].toUpperCase();
            setPalabra(newPalabra)
        }
        if(mode === "INCREMENTAL"){
            if(time >= 60){
                if(time % 10 === 0){
                    return setPalabra(newPalabra)
                }
            }else if(time >= 30){
                if(time % 5 === 0){
                    return setPalabra(newPalabra)
                }
            }else if(time >= 0){
                if(time % 2 === 0){
                    return setPalabra(newPalabra)
                }
            }
        }
    }, [time, mode])

    return palabra
}

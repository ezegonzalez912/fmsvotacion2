import { useEffect, useState } from "react";
import { palabras } from "../helpers/palabras";

export const useWords = (mode, time) => {

    const [palabra, setPalabra] = useState("¿LISTO?")

    useEffect(() => {
        if(mode === "easymode"){
            if(time % 10 === 0){
                const random = Math.floor(Math.random() * (palabras[0].palabras.length - 1)) + 1
                const newPalabra = palabras[0].palabras[random].toUpperCase();
                setPalabra(newPalabra)
            }
        }
        if(mode === "hardmode"){
            if(time % 5 === 0){
                const random = Math.floor(Math.random() * (palabras[0].palabras.length - 1)) + 1
                const newPalabra = palabras[0].palabras[random].toUpperCase();
                setPalabra(newPalabra)
            }
        }
        if(mode === "extrememode"){
            if(time % 2 === 0){
                const random = Math.floor(Math.random() * (palabras[0].palabras.length - 1)) + 1
                const newPalabra = palabras[0].palabras[random].toUpperCase();
                return setPalabra(newPalabra)
            }
        }
        if(mode === "tematicas"){
            const random = Math.floor(Math.random() * (palabras[0].tematicas.length - 1)) + 1
            const newPalabra = palabras[0].tematicas[random].toUpperCase();
            setPalabra(newPalabra)
        }
        if(mode === "incremental"){
            if(time >= 60){
                if(time % 10 === 0){
                    const random = Math.floor(Math.random() * (palabras[0].palabras.length - 1)) + 1
                    const newPalabra = palabras[0].palabras[random].toUpperCase();
                    return setPalabra(newPalabra)
                }
            }else if(time >= 30){
                if(time % 5 === 0){
                    const random = Math.floor(Math.random() * (palabras[0].palabras.length - 1)) + 1
                    const newPalabra = palabras[0].palabras[random].toUpperCase();
                    return setPalabra(newPalabra)
                }
            }else if(time >= 0){
                if(time % 2 === 0){
                    const random = Math.floor(Math.random() * (palabras[0].palabras.length - 1)) + 1
                    const newPalabra = palabras[0].palabras[random].toUpperCase();
                    return setPalabra(newPalabra)
                }
            }
        }
    }, [time, mode])

    return palabra
}

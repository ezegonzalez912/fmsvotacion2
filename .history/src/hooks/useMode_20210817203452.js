import { useEffect } from "react";
import { useContext, useState } from "react";
import { FormatoContext } from "../components/Contexts/FormatoContext";

export const useMode = () => {

    const [mode, setMode] = useState("EASY MODE")

    const {formato} = useContext(FormatoContext)

    useEffect(() => {
        
    }, [])

    const prevMode = () => {
        if(formato === "2021"){
            return setMode("INCREMENTAL")
        }else{
            switch (mode){
                case "REPLICA":
                    return setMode("RESULTADOS");
                case "RESULTADOS":
                    return setMode("RONDA DELUXE");
                case "RONDA DELUXE":
                    return setMode("SEGUNDO MINUTO SANGRE");
                case "SEGUNDO MINUTO SANGRE":
                    return setMode("PRIMER MINUTO SANGRE");
                case "PRIMER MINUTO SANGRE":
                    return formato === "2018" ? setMode("PERSONAJES CONTRAPUESTOS") : setMode("RANDOM MODE");
                case "RANDOM MODE":
                    return setMode("SEGUNDA TEMATICA");
                case "PERSONAJES CONTRAPUESTOS":
                    return setMode("SEGUNDA TEMATICA");
                case "SEGUNDA TEMATICA":
                    return setMode("PRIMER TEMATICA");
                case "PRIMER TEMATICA":
                    return setMode("HARD MODE");
                case "HARD MODE":
                    return setMode("EASY MODE")
                default:
                    return setMode("EASY MODE");
            }
        }
    }

    const nextMode = () => {
        if(formato === "2021"){
            return setMode("CLASICO 8X8")
        }else{
            switch (mode){
                case "EASY MODE":
                    return setMode("HARD MODE");
                case "HARD MODE":
                    return setMode("PRIMER TEMATICA");
                case "PRIMER TEMATICA":
                    return setMode("SEGUNDA TEMATICA");
                case "SEGUNDA TEMATICA":
                    return formato === "2018" ? setMode("PERSONAJES CONTRAPUESTOS") : setMode("RANDOM MODE");
                case "PERSONAJES CONTRAPUESTOS":
                    return setMode("PRIMER MINUTO SANGRE");
                case "RANDOM MODE":
                    return setMode("PRIMER MINUTO SANGRE");
                case "PRIMER MINUTO SANGRE":
                    return setMode("SEGUNDO MINUTO SANGRE");
                case "SEGUNDO MINUTO SANGRE":
                    return setMode("RONDA DELUXE");
                case "RONDA DELUXE":
                    return setMode("RESULTADOS");
                default:
                    return setMode("RESULTADOS");
            }
        }
    }

    return [mode, prevMode, nextMode, setMode]
}

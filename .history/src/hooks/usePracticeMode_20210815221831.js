export const usePracticeMode = () => {

    const [mode, setMode] = useState("EASY MODE")


    const prevMode = () => {
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

    const nextMode = () => {
        switch (mode){
            case "EASY MODE":
                return setMode("HARD MODE");
            case "HARD MODE":
                return setMode("EXTREME MODE");
            case "EXTREME MODE":
                return setMode("TEMATICA");
            default:
                return setMode("INCREMENTAL");
        }
    }

    return [mode, nextMode, prevMode]
}

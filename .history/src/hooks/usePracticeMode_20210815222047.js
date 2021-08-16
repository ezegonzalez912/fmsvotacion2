export const usePracticeMode = () => {

    const [mode, setMode] = useState("EASY MODE")

    const prevMode = () => {
        switch (mode){
            case "INCREMENTAL":
                return setMode("TEMATICA");
            case "TEMATICA":
                return setMode("EXTREME MODE");
            case "EXTREME MODE":
                return setMode("HARD MODE")
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

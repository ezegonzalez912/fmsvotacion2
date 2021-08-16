import { useState } from "react";

export const usePracticeMode = () => {

    const [mode, setMode] = useState("EASY MODE")

    const prevMode = () => {
        switch (mode){
            case "INCREMENTAL":
                return setMode("TEMATICA");
            case "TEMATICAS":
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
                return setMode("TEMATICAS");
            default:
                return setMode("INCREMENTAL");
        }
    }

    return [mode, nextMode, prevMode]
}

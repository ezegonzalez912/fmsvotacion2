import { useState } from "react";

export const usePracticeMode = (time) => {

    const [mode, setMode] = useState("EASY MODE")

    const prevMode = () => {
        if(time === 90 || time === 0){
            switch (mode){
                case "INCREMENTAL":
                    return setMode("TEMATICAS");
                case "TEMATICAS":
                    return setMode("EXTREME MODE");
                case "EXTREME MODE":
                    return setMode("HARD MODE")
                default:
                    return setMode("EASY MODE");
            }
        }
    }

    const nextMode = () => {
        if(time === 90 || time === 0){
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
    }

    return [mode, nextMode, prevMode]
}

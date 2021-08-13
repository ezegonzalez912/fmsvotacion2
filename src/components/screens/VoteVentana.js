import React, { useState } from 'react'
import { VotacionApp } from '../VotacionApp'

export const VoteVentana = () => {

    const [greenScreen, setGreenScreen] = useState(false)

    return (
        <div className="vote-window__screen" style={{background: `${greenScreen ? "#04F404" : "none"}`}}>
            <VotacionApp ventana={true} setGreenScreen={setGreenScreen}/>
        </div>
    )
}

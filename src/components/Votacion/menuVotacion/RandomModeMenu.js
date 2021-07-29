import React, { useContext } from 'react'
import { CompContext } from '../../Contexts/CompContext';
import { DataContext } from '../../Contexts/DataContext';
import { TotalContext } from '../../Contexts/TotalContext';
import { RandomMode } from './RandomMode'

export const RandomModeMenu = ({showTotal}) => {

    const {total1, total2} = useContext(TotalContext)
    const {randomMode: mode} = useContext(DataContext)
    const {competidor1, competidor2} = useContext(CompContext)

    return (
        <div className="menu__vote">
            <div className="menu__random-subtitle">
                <p>Tecnicas</p> <p className="subtitle_2">Flow</p> <p className="subtitle_3">P.Escena</p> <p className="subtitle_4">Total</p>
            </div>
            <RandomMode data={mode.randomMode1} inputChange={mode.randomModeInput1} competidor={competidor1} total={showTotal ? total1 : "-"}/>
            <RandomMode data={mode.randomMode2} inputChange={mode.randomModeInput2} competidor={competidor2} total={showTotal ? total2 : "-"}/>
        </div>
    )
}
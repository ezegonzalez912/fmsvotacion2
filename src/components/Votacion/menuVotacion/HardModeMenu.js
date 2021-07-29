import React, { useContext } from 'react'
import { CompContext } from '../../Contexts/CompContext';
import { DataContext } from '../../Contexts/DataContext';
import { TotalContext } from '../../Contexts/TotalContext';
import { DefaultMode } from './DefaultMode'

export const HardModeMenu = ({showTotal}) => {

    const {total1, total2} = useContext(TotalContext)
    const {hardMode: mode} = useContext(DataContext)
    const {competidor1, competidor2} = useContext(CompContext)

    return (
        <div className="menu__vote">
            <div className="menu__hard-subtitle">
                <p>Tecnicas</p> <p className="subtitle_2">Flow</p> <p className="subtitle_3">P.Escena</p> <p className="subtitle_4">Total</p>
            </div>
            <DefaultMode data={mode.hardMode2} inputChange={mode.hardInput2} compName={competidor2} total={showTotal ? total2 : "-"}/>
            <DefaultMode data={mode.hardMode1} inputChange={mode.hardInput1} compName={competidor1} total={showTotal ? total1 : "-"}/>
        </div>
    )
}
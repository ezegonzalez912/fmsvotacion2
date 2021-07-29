import React, { useContext } from 'react'
import { CompContext } from '../../Contexts/CompContext';
import { DataContext } from '../../Contexts/DataContext';
import { TotalContext } from '../../Contexts/TotalContext';
import { TematicaMode } from './TematicaMode'

export const FirstTematicaMenu = ({showTotal}) => {

    const {total1, total2} = useContext(TotalContext)
    const {firstTematica: mode} = useContext(DataContext)
    const {competidor1, competidor2} = useContext(CompContext)

    return (
        <div className="menu__vote">
            <div className="menu__tematica-subtitle">
                <p>Tecnicas</p> <p className="subtitle_2">Flow</p> <p className="subtitle_3">P.Escena</p> <p className="subtitle_4">Total</p>
            </div>
            <TematicaMode data={mode.firstTematica1} inputChange={mode.firstTematicaInput1} competidor={competidor1} total={showTotal ? total1 : "-"}/>
            <TematicaMode data={mode.firstTematica2} inputChange={mode.firstTematicaInput2} competidor={competidor2} total={showTotal ? total2 : "-"}/>
        </div>
    )
}
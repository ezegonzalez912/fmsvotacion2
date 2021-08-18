import React, { useContext } from 'react'
import { CompContext } from '../../Contexts/CompContext';
import { DataContext } from '../../Contexts/DataContext';
import { TotalContext } from '../../Contexts/TotalContext';
import { DefaultMode } from './DefaultMode'

export const IncrementalMenu = ({showTotal}) => {

    const {total1, total2} = useContext(TotalContext)
    const {incremental: mode} = useContext(DataContext)
    const {competidor1, competidor2} = useContext(CompContext)

    return (
        <div className="menu__vote">
            <div className="menu__hard-subtitle">
                <p>Tecnicas</p> <p className="subtitle_2">Flow</p> <p className="subtitle_3">P.Escena</p> <p className="subtitle_4">Total</p>
            </div>
            <DefaultMode data={mode.incremental2} inputChange={mode.incrementalInput2} compName={competidor2} total={showTotal ? total2 : "-"}/>
            <DefaultMode data={mode.incremental1} inputChange={mode.incrementalInput1} compName={competidor1} total={showTotal ? total1 : "-"}/>
        </div>
    )
}
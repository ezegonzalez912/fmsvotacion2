import React, { useContext } from 'react'
import { CompContext } from '../../Contexts/CompContext';
import { DataContext } from '../../Contexts/DataContext';
import { TotalContext } from '../../Contexts/TotalContext';
import { DefaultMode } from './DefaultMode'
import { DefaultModeRes } from './DefaultModeRes'

export const FirstSangreMenu = ({showTotal}) => {

    const {total1, total2} = useContext(TotalContext)
    const {firstSangre: mode} = useContext(DataContext)
    const {competidor1, competidor2} = useContext(CompContext)

    return (
        <div className="menu__vote menu__sangre">
            <div className="menu__sangre-subtitle">
                <p>Tecnicas</p> <p className="subtitle_2">Flow</p> <p className="subtitle_3">P.Escena</p> <p className="subtitle_4">Total</p>
            </div>
            <DefaultMode data={mode.firstSangre2} inputChange={mode.firstSangreInput2} compName={competidor2} total={showTotal ? total2 : "-"}/>
            <DefaultModeRes data={mode.firstSangre1} inputChange={mode.firstSangreInput1} inputChangeEx={mode.inputChangeEx} competidor={competidor1} total={showTotal ? total1 : "-"}/>
        </div>
    )
}
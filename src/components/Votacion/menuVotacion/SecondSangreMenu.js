import React, { useContext } from 'react'
import { CompContext } from '../../Contexts/CompContext';
import { DataContext } from '../../Contexts/DataContext';
import { TotalContext } from '../../Contexts/TotalContext';
import { DefaultMode } from './DefaultMode'
import { DefaultModeRes } from './DefaultModeRes'

export const SecondSangreMenu = ({showTotal}) => {

    const {total1, total2} = useContext(TotalContext)
    const {secondSangre: mode} = useContext(DataContext)
    const {competidor1, competidor2} = useContext(CompContext)

    return (
        <div className="menu__vote menu__sangre">
            <div className="menu__sangre-subtitle">
                <p>Tecnicas</p> <p className="subtitle_2">Flow</p> <p className="subtitle_3">P.Escena</p> <p className="subtitle_4">Total</p>
            </div>
            <DefaultMode data={mode.secondSangre1} inputChange={mode.secondSangreInput1} compName={competidor1} total={showTotal ? total1 : "-"}/>
            <DefaultModeRes data={mode.secondSangre2} inputChange={mode.secondSangreInput2} inputChangeEx={mode.inputChangeEx2} competidor={competidor2} total={showTotal ? total2 : "-"}/>
        </div>
    )
}
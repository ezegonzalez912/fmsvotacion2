import React, { useContext } from 'react'
import { CompContext } from '../../Contexts/CompContext';
import { DataContext } from '../../Contexts/DataContext';
import { TotalContext } from '../../Contexts/TotalContext';
import { DefaultModeRes } from './DefaultModeRes';

export const PersonajesModeMenu = ({showTotal}) => {

    const {total1, total2} = useContext(TotalContext)
    const {personajes: mode} = useContext(DataContext)
    const {competidor1, competidor2} = useContext(CompContext)

    return (
        <div className="pd-0 menu__vote ">
            <div className="menu__sangre-subtitle">
                <p>Tecnicas</p> <p className="subtitle_2">Flow</p> <p className="subtitle_3">P.Escena</p> <p className="subtitle_4">Total</p>
            </div>
            <DefaultModeRes data={mode.personajesMode1} inputChange={mode.personajesModeInput1} inputChangeEx={mode.inputChangeEx3} competidor={competidor1} total={showTotal ? total1 : "-"}/>
            <DefaultModeRes data={mode.personajesMode2} inputChange={mode.personajesModeInput2} inputChangeEx={mode.inputChangeEx4} competidor={competidor2} total={showTotal ? total2 : "-"}/>
        </div>
    )
}
import React, { useContext } from 'react'
import { CompContext } from '../../Contexts/CompContext';
import { DataContext } from '../../Contexts/DataContext';
import { TotalContext } from '../../Contexts/TotalContext';
import { DeluxeMode } from './DeluxeMode'

export const DeluxeModeMenu = ({showTotal}) => {

    const {total1, total2} = useContext(TotalContext)
    const {deluxeMode: mode} = useContext(DataContext)
    const {competidor1, competidor2} = useContext(CompContext)

    return (
        <div className="menu__vote">
            <div className="menu__deluxe-subtitle">
                <p>Tecnicas</p> <p className="subtitle_2">Flow</p> <p className="subtitle_3">P.Escena</p> <p className="subtitle_4">Total</p>
            </div>
            <DeluxeMode data={mode.deluxeMode2} inputChange={mode.deluxeModeInput2} competidor={competidor2} total={showTotal ? total2 : "-"}/>
            <DeluxeMode data={mode.deluxeMode1} inputChange={mode.deluxeModeInput1} competidor={competidor1} total={showTotal ? total1 : "-"}/>
        </div>
    )
}
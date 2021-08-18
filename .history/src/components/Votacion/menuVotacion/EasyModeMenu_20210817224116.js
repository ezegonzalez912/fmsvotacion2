import React, { useContext, useEffect } from 'react'
import { useForm } from '../../../hooks/useForm';
import { CompContext } from '../../Contexts/CompContext';
import { DataContext } from '../../Contexts/DataContext';
import { TotalContext } from '../../Contexts/TotalContext';
import { DefaultMode } from './DefaultMode'

export const EasyModeMenu = ({showTotal}) => {

    const {total1, total2} = useContext(TotalContext)
    const {easyMode: mode} = useContext(DataContext)
    const {setCompetidores, competidor1, competidor2} = useContext(CompContext)

    const [values, handleInputChange] = useForm({competidor1: competidor1, competidor2: competidor2});

    useEffect(() => {
        setCompetidores(values)
    }, [values, setCompetidores])

    return (
        <div className="menu__vote">
            <div className="menu__easy-subtitle">
                <p>Tecnicas</p> <p className="subtitle_2">Flow</p> <p className="subtitle_3">P.Escena</p> <p className="subtitle_4">Total</p>
            </div>
            <DefaultMode data={mode.easyMode1} inputChange={mode.easyInput1} competidor={"competidor1"} compName={competidor1} handleInputChange={handleInputChange} total={showTotal ? total1 : "-"}/>
            <DefaultMode data={mode.easyMode2} inputChange={mode.easyInput2} competidor={"competidor2"} compName={competidor2} handleInputChange={handleInputChange} total={showTotal ? total2 : "-"}/>
        </div>
    )
}

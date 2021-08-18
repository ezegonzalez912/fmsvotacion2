import React, { useContext } from 'react'
import { CompContext } from '../../Contexts/CompContext';
import { DataContext } from '../../Contexts/DataContext';
import { TotalContext } from '../../Contexts/TotalContext';
import { IncrementalMode } from './IncrementalMode';

export const IncrementalMenu = ({showTotal}) => {

    const {total1, total2} = useContext(TotalContext)
    const {incremental: mode} = useContext(DataContext)
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
            <IncrementalMode data={mode.incremental1} inputChange={mode.incrementalInput1} competidor={"competidor1"} compName={competidor1} handleInputChange={handleInputChange} total={showTotal ? total1 : "-"}/>
            <IncrementalMode data={mode.incremental2} inputChange={mode.incrementalInput2} competidor={"competidor2"} compName={competidor2} handleInputChange={handleInputChange} total={showTotal ? total2 : "-"}/>
        </div>
    )
}
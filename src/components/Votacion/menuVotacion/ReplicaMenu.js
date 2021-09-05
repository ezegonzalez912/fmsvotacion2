import React, { useContext } from 'react'
import { totalData } from '../../../helpers/totalData';
import { CompContext } from '../../Contexts/CompContext';
import { DataContext } from '../../Contexts/DataContext';
import { ReplicaMode2 } from './ReplicaMode2';

export const ReplicaMenu = ({invertir}) => {

    const {replicaMode} = useContext(DataContext);
    const {competidor1, competidor2} = useContext(CompContext)

    return (
        <div className="menu__vote">
            <div className="menu__sangre-subtitle">
                <p>Tecnicas</p> <p className="subtitle_2">Flow</p> <p className="subtitle_3">P.Escena</p> <p className="subtitle_4">Total</p>
            </div>
            {invertir && <ReplicaMode2 data={replicaMode.replicaMode1} inputChange={replicaMode.replicaModeInput1} compName={competidor1} total={totalData(replicaMode.replicaMode1)}/>}
            <ReplicaMode2 data={replicaMode.replicaMode2} inputChange={replicaMode.replicaModeInput2} compName={competidor2} total={totalData(replicaMode.replicaMode2)}/>
            {!invertir && <ReplicaMode2 data={replicaMode.replicaMode1} inputChange={replicaMode.replicaModeInput1} compName={competidor1} total={totalData(replicaMode.replicaMode1)}/>}
        </div>
    )
}
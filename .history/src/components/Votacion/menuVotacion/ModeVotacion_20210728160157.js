import React from 'react'
import { ReplicaMode } from './ReplicaMode';
import { EasyModeMenu } from './EasyModeMenu';
import { HardModeMenu } from './HardModeMenu';
import { FirstTematicaMenu } from './FirstTematicaMenu';
import { SecondTematicaMenu } from './SecondTematicaMenu';
import { RandomModeMenu } from './RandomModeMenu';
import { FirstSangreMenu } from './FirstSangreMenu';
import { SecondSangreMenu } from './SecondSangreMenu';
import { DeluxeModeMenu } from './DeluxeModeMenu';
import { PersonajesModeMenu } from './PersonajesModeMenu';
import { Resultados } from './Resultados';

export const ModeVotacion = ({showTotal, invertir, mode}) => {
    return (
        <>
            {
                mode === "EASY MODE" ? <EasyModeMenu showTotal={showTotal}/>
                : mode === "HARD MODE" ? <HardModeMenu showTotal={showTotal}/>
                : mode === "PRIMER TEMATICA" ? <FirstTematicaMenu showTotal={showTotal}/>
                : mode === "SEGUNDA TEMATICA" ? <SecondTematicaMenu showTotal={showTotal}/>
                : mode === "PERSONAJES CONTRAPUESTOS" ? <PersonajesModeMenu showTotal={showTotal}/>
                : mode === "RANDOM MODE" ? <RandomModeMenu showTotal={showTotal}/>
                : mode === "PRIMER MINUTO SANGRE" ? <FirstSangreMenu showTotal={showTotal}/>
                : mode === "SEGUNDO MINUTO SANGRE" ? <SecondSangreMenu showTotal={showTotal}/>
                : mode === "RONDA DELUXE" ? <DeluxeModeMenu showTotal={showTotal}/>
                : mode === "REPLICA" ? <ReplicaMode invertir={invertir} showTotal={showTotal}/>
                : <Resultados />
            }
        </>
    )
}

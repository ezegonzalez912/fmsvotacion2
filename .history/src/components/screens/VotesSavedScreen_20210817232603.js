import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { useSave } from '../../hooks/useSave'
import { VotacionGuardada } from '../votaciones/VotacionGuardada'

export const VotesSavesScreen = () => {

    useEffect(() => {
        document.title = "FMS Votación - Votaciones";
    }, []);

    const [, delateResutado, datos] = useSave();

    const [values, handleInputChange] = useForm({search: ""})

    const [data, setData] = useState(datos)

    useEffect(() => {
        const filtro = datos.filter( batalla => {
            const title = batalla.title.trim().toUpperCase();
            return title.includes(values.search.toUpperCase().trim())
        })
        setData(filtro)
    }, [values, datos])

    return (
        <div className="vote-saved__screen">
            <div className="vote-saved__title">
                <p className="title-scy">VOTACIONES</p>
                <h2 className="title-ppl">GUARDADAS</h2>
                <input value={values.search} onChange={handleInputChange} name="search" placeholder="Busca batallas" autoComplete="off"/>
            </div>
            <div className="vote-saved__grid">
            {
                data && data.length > 0 ?
                data.map( (batalla) => (
                    <></> 
                ) )
                : <p>~Aun no tienes batallas guardadas~</p>
            }
            </div>
            <div className="curve" style={{height: "150px", overflow: "hidden"}} >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                    <path d="M-7.05,76.47 C190.46,-86.34 262.13,264.95 502.54,34.03 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none"}}/>
                </svg>
            </div>
        </div>
    )
}
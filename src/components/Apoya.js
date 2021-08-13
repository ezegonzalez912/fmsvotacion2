import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { StartContext } from './Contexts/StartContext';

export const Apoya = ({toAbout}) => {
    
    const [view, setView] = useContext(StartContext);

    return (
        <div className={`animate__animated animate__fadeInDown apoya__main ${view && "dsp-none"}`}>
            <div className="apoya__title">
                <h1>¿Te gusta la pagina?</h1>
                <FontAwesomeIcon icon={faTimes} onClick={() => setView(!view)}/>
            </div>
            <p>Realiza un aporte para que esta se mantenga en pie un año mas. <span onClick={toAbout}>Mas info</span>.</p>
        </div>
    )
}

import { faChevronLeft, faChevronRight, faPlay, faSearch, faUndo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Curve } from '../Curve'
import getVideoId from 'get-video-id';
import { useTimer } from 'use-timer';
import { useWords } from '../../hooks/useWords';
import { usePracticeMode } from '../../hooks/usePracticeMode';
import { BeatItem } from '../practica/BeatItem';
import { useListBeats } from '../../hooks/useListBeats';
import { Error } from '../Error';

export const PracticeScreen = () => {

    const [search, setSearch] = useState("")

    const [error, setError] = useState(false)

    const activeError = () => {
        setError(true)
        setSearch("")
        setTimeout(() => {
            setError(false)
        }, 2000)
    }
    
    const onSubmitForm = (e) => {
        e.preventDefault()
        const { id } = getVideoId(search)
        id ? setId(id) : activeError()
        setSearch("")
    }
    
    const { time, start, reset } = useTimer({
        endTime: 0,
        initialTime: 90,
        timerType: 'DECREMENTAL',
    });

    const [mode, nextMode, prevMode] = usePracticeMode(time);
    const palabra = useWords(mode, time);
    
    const [idBeat, listaBeats] = useListBeats(3);

    const [id, setId] = useState(idBeat)

    return (
        <>
        <div className={`searchVideo__ventana animate__animated ${true ? "animate__bounceInDown" : "dsp-none"}`}>
                <Error/>
            </div>
        <div className="screen__practice">
            <div className="practice__title">
                <p className="title-scy">Entrena</p>
                <h2 className="title-ppl">TU FREESTYLE</h2>
            </div>
            <form className="dsp-flex form" onSubmit={onSubmitForm}>
                <input className="input-search" type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Ingresa el link de una instrumental"/>
                <button className="input-search-button" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <div className="practice__main">
                <div className="practice__select-video">
                    <iframe src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allowFullScreen />
                    <div className="practice__video-list">
                        {
                            listaBeats.map( (beat, index) => {
                                return <BeatItem key={index} setId={setId} title={beat.title} id={beat.id}/>
                            } )
                        }
                    </div>
                </div>
                <div className="practice__counter-mode">
                    <div className="practice__select-mode select-none">
                        <div>
                            <FontAwesomeIcon icon={faChevronLeft} onClick={prevMode}/>
                        </div>
                        <p>{mode}</p>
                        <div>
                            <FontAwesomeIcon icon={faChevronRight} onClick={nextMode}/>
                        </div>
                    </div>
                    <p className="practice__contador select-none">{time}</p>
                    <div className="practice__palabra-control">
                        <div className="practice__palabra select-none">
                            <p>{!(time === 90) ? palabra : "¿Listo?"}</p>
                        </div>
                        <div className="practice__controls">
                            <div className="control-left" onClick={reset}>
                                <FontAwesomeIcon icon={faUndo} />
                            </div>
                            <div className="control-right" onClick={start}>
                                <FontAwesomeIcon icon={faPlay}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Curve />
        </div>
        </>
    )
}

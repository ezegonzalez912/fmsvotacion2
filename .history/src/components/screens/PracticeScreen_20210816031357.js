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

export const PracticeScreen = () => {

    const [id, setId] = useState("otEr1sV1UTU")
    const [search, setSearch] = useState("")
    
    const onSubmitForm = (e) => {
        e.preventDefault()
        const { id } = getVideoId(search)
        setId(id)
        setSearch("")
    }
    
    const { time, start, reset } = useTimer({
        endTime: 0,
        initialTime: 90,
        timerType: 'DECREMENTAL',
    });

    const [mode, nextMode, prevMode] = usePracticeMode(time);
    const palabra = useWords(mode, time);
    
    const listaBeats = useListBeats(4);

    return (
        <div className="screen__practice">
            <div className="practice__title">
                <p className="title-scy">Entrena</p>
                <h2 className="title-ppl">TU FREESTYLE</h2>
            </div>
            <form className="dsp-flex" onSubmit={onSubmitForm}>
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
                            listaBeats.map( beat => {
                                return <BeatItem setId={setId} title={beat.title} id={beat.id}/>
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
    )
}

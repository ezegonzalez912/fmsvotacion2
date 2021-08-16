import { faChevronLeft, faChevronRight, faPlay, faSearch, faUndo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Curve } from '../Curve'
import getVideoId from 'get-video-id';
import { useTimer } from 'use-timer';
import { palabras } from '../../helpers/palabras';

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
    

    const [mode, setMode] = useState("incremental")
    const [palabra, setPalabra] = useState("¿LISTO?")

    useEffect(() => {
        if(mode === "easymode"){
            if(time % 10 === 0){
                const random = Math.floor(Math.random() * (palabras[0].palabras.length - 1)) + 1
                const newPalabra = palabras[0].palabras[random].upperCase();
                setPalabra(newPalabra)
            }
        }
        if(mode === "hardmode"){
            if(time % 5 === 0){
                const random = Math.floor(Math.random() * (palabras[0].palabras.length - 1)) + 1
                const newPalabra = palabras[0].palabras[random].upperCase();
                setPalabra(newPalabra)
            }
        }
        if(mode === "extrememode"){
            if(time % 2 === 0){
                const random = Math.floor(Math.random() * (palabras[0].palabras.length - 1)) + 1
                const newPalabra = palabras[0].palabras[random].upperCase();
                return setPalabra(newPalabra)
            }
        }
        if(mode === "tematicas"){
            const random = Math.floor(Math.random() * (palabras[0].tematicas.length - 1)) + 1
            const newPalabra = palabras[0].tematicas[random].upperCase();
            setPalabra(newPalabra)
        }
        if(mode === "incremental"){
            if(time >= 60){
                if(time % 10 === 0){
                    const random = Math.floor(Math.random() * (palabras[0].palabras.length - 1)) + 1
                    const newPalabra = palabras[0].palabras[random].upperCase();
                    return setPalabra(newPalabra)
                }
            }else if(time >= 30){
                if(time % 5 === 0){
                    const random = Math.floor(Math.random() * (palabras[0].palabras.length - 1)) + 1
                    const newPalabra = palabras[0].palabras[random].upperCase();
                    return setPalabra(newPalabra)
                }
            }else if(time >= 0){
                if(time % 2 === 0){
                    const random = Math.floor(Math.random() * (palabras[0].palabras.length - 1)) + 1
                    const newPalabra = palabras[0].palabras[random].upperCase();
                    return setPalabra(newPalabra)
                }
            }
        }
    }, [time, mode])

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
                        <div className="video-list-item">item</div>
                        <div className="video-list-item">item</div>
                        <div className="video-list-item">item</div>
                        <div className="video-list-item">item</div>
                    </div>
                </div>
                <div className="practice__counter-mode">
                    <div className="practice__select-mode">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <p>EASY MODE</p>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <div className="practice__contador-main">
                        {/* <p className="practice__contador-edit" onClick={decrementar} >-</p> */}
                        <p className="practice__contador">{time}</p>
                        {/* <p className="practice__contador-edit" onClick={incrementar} >+</p> */}
                    </div>
                    <div className="practice__palabra-control">
                        <div className="practice__palabra">
                            <p>{palabra}</p>
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

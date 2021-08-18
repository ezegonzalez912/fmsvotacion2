import { faExternalLinkAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import getVideoId from 'get-video-id';
import { Error } from '../Error';
import { Apoya } from '../Apoya';
import { Curve } from '../Curve';

export const MainScreen = ({history}) => {

    useEffect(() => {
        document.title = "FMS Votación - Inicio";
    }, []);

    const [searchInput, setSearchInput] = useState("")

    const [error, setError] = useState(false)

    const activeError = () => {
        setError(true)
        setSearchInput("")
        setTimeout(() => {
            setError(false)
        }, 2000)
    }

    const onSubmitButton = (e) => {
        e.preventDefault()
        const { id } = getVideoId(searchInput);
        id ? history.push(`vote=${id}`) : activeError()
    }

    const openWindow = () => {
        window.open(
          "/vote-window", 
          "FMSVOTACION.COM", 
          "width=752, height=220, scrollbars=NO"
        )
    }

    const toAbout = () => {
        history.push(`/about`)
        setTimeout(() => {
            window.scrollTo(0,1000)
        }, 200);
    }

    //${window.location.protocol() === 'https:'?"s":""}

    return (
            <div className="screen__main">
                <iframe 
                    width="728" 
                    height="90" 

                    key="19bb3cb280ea14ee0a6ecbe91c9099f0" 
                    
                   
                />
                <Apoya toAbout={toAbout}/>
                <div className={`searchVideo__ventana animate__animated ${error ? "animate__bounceInDown" : "dsp-none"}`}>
                    <Error/>
                </div>
                <div className="searchVideo__main">
                    <div className="searchVideo__title">
                        <p>FMSVOTACION.COM</p>
                        <h2>¡VOTA LAS BATALLAS DE FMS <br /> DESDE UN SOLO LUGAR!</h2>
                    </div>
                    <form className="searchVideo__form" onSubmit={onSubmitButton}>
                        <input autoComplete="off" type="text" placeholder="Ingresa el link de la batalla o directo" onChange={e => setSearchInput(e.target.value)} value={searchInput}/>
                        <button type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                    <div className="searchVideo____ventana">
                        <p onClick={openWindow}>Votar en ventana</p>
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </div>
                    <Curve />
                </div>  
            </div>
    )
}

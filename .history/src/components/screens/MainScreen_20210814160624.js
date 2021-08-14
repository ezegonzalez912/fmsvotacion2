import { faExternalLinkAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import getVideoId from 'get-video-id';
import { Error } from '../Error';
import { Apoya } from '../Apoya';

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

    return (
            <div className="screen__main">
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
                    <div className="curve" style={{height: "150px", overflow: "hidden"}} >
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                            <path d="M-7.05,76.47 C190.46,-86.34 262.13,264.95 502.54,34.03 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none"}}/>
                        </svg>
                    </div>
                </div>  
            </div>
    )
}

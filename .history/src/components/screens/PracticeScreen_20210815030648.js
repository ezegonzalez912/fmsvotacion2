import { faChevronLeft, faChevronRight, faPlay, faUndo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Curve } from '../Curve'

export const PracticeScreen = () => {
    return (
        <div className="screen__practice">
            <div className="practice__title">
                <p className="title-scy">Entrena</p>
                <h2 className="title-ppl">TU FREESTYLE</h2>
                <form className="dsp-flex">
                    <input type="text" name="search" placeholder="Ingresa el link de una instrumental" className="input-search"/>
                    <button type="submit" className="input-search-button">Agregar</button>
                </form>
            </div>
            <div className="practice__main">
                <div className="practice__select-video">
                    <iframe src="https://www.youtube.com/embed/Q07OOO0F-z8" title="YouTube video player" frameBorder="0" allowFullScreen />
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
                    <p className="practice__contador">60</p>
                    <div className="practice__palabra-control">
                        <div className="practice__palabra">
                            <p>BAILAR</p>
                        </div>
                        <div className="practice__controls">
                            <div className="control-left">
                                <FontAwesomeIcon icon={faUndo} />
                            </div>
                            <div className="control-right">
                                <FontAwesomeIcon icon={faPlay} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Curve /> */}
        </div>
    )
}

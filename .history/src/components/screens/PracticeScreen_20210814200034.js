import React from 'react'

export const PracticeScreen = () => {
    return (
        <div className="screen__practice">
            <p className="title-scy">Entrena</p>
            <h2 className="title-ppl">TU FREESTYLE</h2>
            <form>
                <input type="text" name="search"/>
                <button type="submit">Agregar</button>
            </form>
            <div className="practice__select-video">
                <iframe src="https://www.youtube.com/embed/Q07OOO0F-z8" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                <div className="practice__video-list">
                </div>
                <div className="practice__main">
                    <p className="practice__contador">60</p>
                    <div>
                        <div className="practice__select-mode">
                            <button></button>
                            <p>EASY MODE</p>
                            <button></button>
                        </div>
                        <div className="practice__palabra">
                            <p>BAILAR</p>
                        </div>
                    </div>
                    <div className="practice__controls">

                    </div>
                </div>
            </div>
        </div>
    )
}

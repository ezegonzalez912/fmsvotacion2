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
            <iframe src="https://www.youtube.com/embed/Q07OOO0F-z8" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
        </div>
    )
}

import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const BeatItem = (setId, title, id) => {
    return (
        <div className="video-list-item">
            <p>{title}</p>
            <FontAwesomeIcon icon={faPlay} onClick={() => setId(id)} />
        </div>
    )
}

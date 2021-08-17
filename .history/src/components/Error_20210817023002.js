import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Error = () => {
    return (
        <div className="error__container">
            <FontAwesomeIcon icon={faTimesCircle} />
            <div>
                <h2>Error...</h2>
                <p>El link ingresado es incorrecto, asegurese de copiarlo de manera correcta.</p>
            </div>
        </div>
    )
}

import React from 'react'
import { useParams } from 'react-router-dom'
import { VotacionApp } from '../VotacionApp'

export const VoteScreen = () => {

    const {id} = useParams()

    return (
        <div className="screen__vote">
            <div className="videoAndVote__main">
                <div className="video-player">
                    <iframe
                        tabIndex="-1"
                        width="100%" 
                        height="100%" 
                        src={`https://www.youtube.com/embed/${id}`} 
                        title="fms" 
                        frameBorder="0" 
                        allowFullScreen
                    />
                </div>
                <div className="vote-app__scroll">
                    <VotacionApp ventana={false}/>
                </div>
            </div>
        </div>
    )
}

import { useEffect, useState } from 'react';
import beats from '../json/beats.json'

export const useListBeats = () => {

    const [listaBeats, setListaBeats] = useState([])
    useEffect(() => {
        const listaBeats = beats.filter( beat => {
            console.log(Math.floor(Math.random() * (beats.length - 0)) + 0)
            return beat.id === Math.floor(Math.random() * (beats.length - 0)) + 0;
        })
        setListaBeats(listaBeats)
    }, [])

    

    const numRandom = Math.floor(Math.random() * (beats.length - 0)) + 0;
    const idBeat = beats[numRandom].id

    return [idBeat, listaBeats]
}

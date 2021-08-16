import { useEffect, useState } from 'react';
import beats from '../json/beats.json'

export const useListBeats = () => {

    const [listaBeats, setListaBeats] = useState([])
    useEffect(() => {
        const beat1 = beats[Math.floor(Math.random() * (beats.length - 0)) + 0]
        const beat2 = beats[Math.floor(Math.random() * (beats.length - 0)) + 0]
        const beat3 = beats[Math.floor(Math.random() * (beats.length - 0)) + 0]
        setListaBeats([beat1, beat2, beat3])
    }, [])

    

    const numRandom = Math.floor(Math.random() * (beats.length - 0)) + 0;
    const idBeat = beats[numRandom].id

    return [idBeat, listaBeats]
}

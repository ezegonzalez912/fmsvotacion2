import { useEffect, useState } from 'react';
import beats from '../json/beats.json'

export const useListBeats = (cantidad) => {

    const [listaBeats, setListaBeats] = useState([])

    useEffect(() => {
        for (var i = 0; i < cantidad; i++) {
            const numRandom = Math.floor(Math.random() * (beats.length - 0)) + 0;
            console.log(beats[numRandom])
            setListaBeats([...listaBeats, beats[numRandom]])
            console.log(listaBeats)
        }
    }, [])

    

    const numRandom = Math.floor(Math.random() * (beats.length - 0)) + 0;
    const idBeat = beats[numRandom].id

    return [idBeat, listaBeats]
}

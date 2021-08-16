import { useEffect, useState } from 'react';
import beats from '../json/beats.json'

export const useListBeats = (cantidad) => {

    const [listaBeats, setListaBeats] = useState([])

    useEffect(() => {
        const beatList = []

        for (var i = 0; i < cantidad; i++) {
            const numRandom = Math.floor(Math.random() * (beats.length - 0)) + 0;
            console.log(beats[numRandom])
            beats.push(beats[numRandom])
        }

        setListaBeats(beatList)
    }, [])

    

    const numRandom = Math.floor(Math.random() * (beats.length - 0)) + 0;
    const idBeat = beats[numRandom].id

    return [idBeat, listaBeats]
}

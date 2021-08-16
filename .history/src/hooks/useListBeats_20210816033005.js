import beats from '../json/beats.json'

export const useListBeats = (cantidad) => {

    const listaBeats = []

    for (var i = 0; i < cantidad; i++) {
        const numRandom = Math.floor(Math.random() * (beats.length - 0)) + 0;
        listaBeats.push(beats[numRandom])
    }

    const id = beats[numRandom]

    return [id, listaBeats]
}

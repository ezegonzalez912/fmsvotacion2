import beats from '../json/beats.json'

export const useListBeats = (cantidad) => {

    const listaBeats = []

    for (var i = 0; i < cantidad; i++) {

        const numRandom = Math.random() * (listaBeats.length);
        listaBeats.push(beats[numRandom])
    }

    return listaBeats
}

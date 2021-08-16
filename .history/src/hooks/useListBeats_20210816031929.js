import beats from '../json/beats.json'

export const useListBeats = (cantidad) => {

    const listaBeats = []

    for (var i = 0; i < cantidad; i++) {

        const numRandom = Math.floor(Math.random() * (listaBeats.length - 0)) + 0;
        console.log(numRandom)
        listaBeats.push(beats[i])
    }

    return listaBeats
}

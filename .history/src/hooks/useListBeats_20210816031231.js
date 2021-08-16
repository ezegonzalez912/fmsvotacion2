import beats from '../json/beats.json'

export const useListBeats = (cantidad) => {

    const listaBeats = []

    for (var i = 0; i < cantidad; i++) {
        console.log(beats)
    }

    return listaBeats
}

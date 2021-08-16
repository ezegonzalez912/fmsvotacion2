import beats from '../json/beats.json'

export const useListBeats = (cantidad) => {

    const listaBeats = []

    for (var i = 0; i < beats.length; i++) {
        console.log(beats)
    }

    return listaBeats
}

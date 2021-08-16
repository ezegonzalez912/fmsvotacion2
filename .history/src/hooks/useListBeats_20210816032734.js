import beats from '../json/beats.json'

export const useListBeats = (cantidad) => {

    const listaBeats = []

    for (var i = 0; i < cantidad; i++) {
        const numRandom = Math.floor(Math.random() * (beats.length - 0)) + 0;
        const beat = () =>{
            if(listaBeats.includes(beats[numRandom])){
                return;
            }else{
                return beats[numRandom]
            }
        }
        listaBeats.push(beat())
    }

    console.log(listaBeats)

    return listaBeats
}

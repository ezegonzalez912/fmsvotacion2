export const resultadoText = (total1, total2, competidor1, competidor2) => {
    const resto1 = total1 - total2
    const resto2 = total2 - total1
        
    if(resto1 >= 0){
        if (resto1 <= 5){
            return `REPLICA por diferencia de ${resto1} puntos.`
        }
    }else if(resto2 >= 0){
        if (resto2 <= 5){
            return `REPLICA por diferencia de ${resto2} puntos.`
        }
    }
    if(total1 > total2){
        const puntaje = total1 - total2
        return `El ganador es ${competidor1} por ${puntaje} puntos.`
    }
    if(total2 > total1){
        const puntaje = total2 - total1
        return `El ganador es ${competidor2} por ${puntaje} puntos.`
    }
}
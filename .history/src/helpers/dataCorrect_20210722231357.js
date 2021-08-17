export const dataCorrect = (data) => {

    if(data === "."){
        return 0.5;
    }

    if(data === true){
        return 1
    }else if(data === false){
        return 0
    }

    if(isNaN(parseFloat(data))){
        return 0
    }

    switch(data){
        case "1.":
            return 1.5;
        case "2.":
            return 2.5;
        case "3.":
            return 3.5;
        default:
            return parseFloat(data);
    }
}
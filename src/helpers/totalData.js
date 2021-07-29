import {dataCorrect} from "./dataCorrect"

export const totalData = (data) => {
    
    return dataCorrect(data.input1) + dataCorrect(data.input2) + dataCorrect(data.input3) + dataCorrect(data.input4) + dataCorrect(data.input5)
        + dataCorrect(data.input6) + dataCorrect(data.input7) + dataCorrect(data.input8) + dataCorrect(data.input9) + dataCorrect(data.input10) 
        + dataCorrect(data.input11) + dataCorrect(data.input12) + dataCorrect(data.input13) + dataCorrect(data.input14) + dataCorrect(data.input15)
        + dataCorrect(data.input16) + dataCorrect(data.input17) + dataCorrect(data.input18) + dataCorrect(data.input19) + dataCorrect(data.input20)
}

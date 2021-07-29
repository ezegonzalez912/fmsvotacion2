import { useState } from "react"
import { valueCheck } from "../helpers/valueCheck"
import { valueCheck2 } from "../helpers/valueCheck2"

export const useVote = () => {

    const initialState = {
        input1: "", input2: "", input3: "", input4: "", input5: "", input6: "", input7: "",
        input8: "", input9: "", input10: "", input11: "", input12: "", input13: "", input14: "",
        input15: false, input16: false, input17: false, input18: false, input19: false, input20: false
    }

    const [data, setData] = useState(initialState)

    const inputChange = ({target}) => {
        const value = target.name === "input14" || target.name === "input13" || target.name === "input12" ? valueCheck2(target.value) : valueCheck(target)
        setData({...data, [target.name]: value})
    }

    const inputChangeEx = (targetDado) => {

        const {value, name} = targetDado.target

        inputChange(targetDado)

        const nameInput = (name) => {
            const nameModifiqued = name.substring(5, name.length)
            return "input" + (parseInt(nameModifiqued) + 14)
        }

        const valueInput = (name) => {
            switch(name){
                case "input1":
                    return data.input15;
                case "input2":
                    return data.input16;
                case "input3":
                    return data.input17;
                case "input4":
                    return data.input18;
                case "input5":
                    return data.input19;
                case "input6":
                    return data.input20;
                default:
                    return false;
            }
        }

        if(value === '+' || value === '0+' || value === '.+' || value === '1+' || value === '1.+' || value === '2+' || value === '2.+' || value === '3+' || value === '3.+' || value === '4+'){
            return (setData({...data, [nameInput(name)]: !valueInput(name)}))
        }
    }

    const resetVote = () => {
        setData(initialState)
    }

    return [data, inputChange, resetVote, inputChangeEx]
}
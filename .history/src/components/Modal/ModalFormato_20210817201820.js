import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm';
import { FormatoContext } from '../Contexts/FormatoContext';

export const ModalFormato = ({isChangeModal, isSubmitModal}) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    const {formato, setFormato} = useContext(FormatoContext)

    const formatoCorrectoInv = () => {
        if(formato === "2018"){return "Formato 2018/2019"}
        if(formato === "2020"){return "Formato 2020/2021"}
        if(formato === "2021"){return "Formato FMS Internacional"}
    }

    const [values, handleInputChange] = useForm({fms: formatoCorrectoInv()});

    const handleSubmitModal = () => {
        setFormato(formatoCorrecto(values.fms))
        console.log(formato)
        isSubmitModal()
        isChangeModal()
    }

    const formatoCorrecto = (text) => {
        if(text === "Formato 2018/2019"){return "2018"}
        if(text === "Formato 2020/2021"){return "2020"}
        if(text === "Formato FMS Internacional"){return "2021"}
    }

    return (
        <div className="modal__container" onClick={handleModalDialogClick}>
            <p>Selecciona el formato</p>
            <select autoFocus name="fms" value={values.fms} className="modal__input cursor-p" onChange={handleInputChange}>
                <option>Formato 2018/2019</option>
                <option>Formato 2020/2021</option>
                <option>Formato FMS Internacional</option>
            </select>
            <div>
                <button className="modal__button" onClick={isChangeModal}>Cancelar</button>
                <button className="modal__button" onClick={handleSubmitModal}>Guardar</button>
            </div>
        </div>
    )
}

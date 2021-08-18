import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm';
import { FormatoContext } from '../Contexts/FormatoContext';

export const ModalFormato = ({isChangeModal, isSubmitModal}) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    const {formato, setFormato} = useContext(FormatoContext)

    console.log(formato)

    const [values, handleInputChange] = useForm({formato: formato});

    const handleSubmitModal = () => {

        setFormato(formatoCorrecto(values.formato))
        
        isSubmitModal()
        isChangeModal()
    }

    const formatoCorrecto = (text) => {
        if(text === "Formato 2018/2019"){return "2018"}
        if(text === "Formato 2019/2020"){return "2020"}
        if(text === "Formato FMS Internacional"){return "2021"}
    }

    return (
        <div className="modal__container" onClick={handleModalDialogClick}>
            <p>Selecciona el formato</p>
            <select autofocus={formato} name="formato" value={values.fms} className="modal__input cursor-p" onChange={handleInputChange}>
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

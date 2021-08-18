import React, { useContext } from 'react'
import { useForm } from '../../hooks/useForm';
import { FormatoContext } from '../Contexts/FormatoContext';

export const ModalFormato = ({isChangeModal, isSubmitModal}) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    const {formato, setFormato} = useContext(FormatoContext)

    const [values, handleInputChange] = useForm({formato: formato});

    const handleSubmitModal = () => {
        setFormato(values.formato)
        setFormato(formatoCorrecto(values.formato))
        isSubmitModal()
        isChangeModal()
    }

    const formatoCorrecto = (text) => {
        if(text === "Formato 2018/2019"){return "2018"}
        if(text === "Formato 2019/2020"){return "2020"}
        if(text === "Formato FMS Internacional"){return "2020"}
    }

    return (
        <div className="modal__container" onClick={handleModalDialogClick}>
            <p>Selecciona el formato</p>
            <select name="formato" value={values.fms} className="modal__input cursor-p" onChange={handleInputChange}>
                <option>Formato 2018/2019</option>
                <option>Formato 2020/2021</option>
                <option title="Proximamente...">Formato FMS Internacional</option>
            </select>
            <div>
                <button className="modal__button" onClick={isChangeModal}>Cancelar</button>
                <button className="modal__button" onClick={handleSubmitModal}>Guardar</button>
            </div>
        </div>
    )
}

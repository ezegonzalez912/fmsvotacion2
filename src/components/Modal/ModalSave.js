import React, { useContext } from 'react'
import { date } from '../../helpers/date';
import { useForm } from '../../hooks/useForm';
import { CompContext } from '../Contexts/CompContext';

export const ModalSave = ({isChangeModal, isSubmitModal, formato}) => {

    const {competidor1, competidor2} = useContext(CompContext)

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    const [values, handleInputChange] = useForm({title: "Jornada 1", fms: "FMS Argentina"});

    const title = `${competidor1} vs ${competidor2} // ${values.title} // ${date()} // ${values.fms}`

    const competidores = {competidor1, competidor2}

    const handleSubmitModal = () => {
        isSubmitModal(title, formato, competidores)
        isChangeModal()
    }

    return (
        <div className="modal__container" onClick={handleModalDialogClick}>
            <p>Guardar batalla</p>
            <label>{competidor1} vs {competidor2}</label>
            <input name="title" className="modal__input" placeholder="Jornada 1" value={values.title} onChange={handleInputChange}/>
            <select name="fms" value={values.fms} className="modal__input cursor-p" onChange={handleInputChange}>
                <option>FMS Argentina</option>
                <option>FMS Chile</option>
                <option>FMS España</option>
                <option>FMS Peru</option>
                <option>FMS Mexico</option>
                <option>Otro</option>
            </select>
            <div>
                <button className="modal__button" onClick={isChangeModal}>Cancelar</button>
                <button className="modal__button" onClick={handleSubmitModal}>Guardar</button>
            </div>
        </div>
    )
}

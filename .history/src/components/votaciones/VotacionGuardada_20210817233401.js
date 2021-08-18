import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useModal } from '../../hooks/useModal';
import { Modal } from '../Modal/Modal';
import { ModalDefault } from '../Modal/ModalDefault';
import { ResultadosRead } from './ResultadosRead';

export const VotacionGuardada = ({id, batalla, delateResutado}) => {

    const {data, title, formato, competidores} = batalla;
    console.log(data)

    const [isOpenModal, isChangueModal] = useModal();

    const borrarData = () => {
        delateResutado(id)
    }

    return (
        <div className="voted-saved__card-container">
            <Modal isOpenModal={isOpenModal} isChangeModal={isChangueModal}>
                <ModalDefault title={"¿Seguro desea borrar los datos?"} titleButton={"Borrar datos"} isChangeModal={isChangueModal} isSubmitModal={borrarData}/>
            </Modal>
            <div className="voted-saved__card-title">
                <p>{title}</p>
                <FontAwesomeIcon icon={faTimesCircle} onClick={isChangueModal} />
            </div>
            <div className="voted-saved__card">
                <ResultadosRead data={data} formato={formato} competidores={competidores}/>
            </div>
        </div>
    )
}

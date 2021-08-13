import React from 'react'

export const ModalDefault = ({title, titleButton, isChangeModal, isSubmitModal}) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    const handleSubmitModal = () => {
        isSubmitModal()
        isChangeModal()
    }

    return (
        <div className="modal__container" onClick={handleModalDialogClick}>
            <p>{title}</p>
            <div>
                <button className="modal__button" onClick={isChangeModal}>Cancelar</button>
                <button className="modal__button" onClick={handleSubmitModal}>{titleButton}</button>
            </div>
        </div>
    )
}

import React, { useContext, useState } from 'react'
import { useMode } from '../../../hooks/useMode';
import { DataContext } from '../../Contexts/DataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useReplica } from '../../../hooks/useReplica';
import { faChevronLeft, faChevronRight, faChevronDown, faChevronUp ,faExternalLinkAlt, faEyeSlash, faEye, faSave} from '@fortawesome/free-solid-svg-icons'
import { FormatoContext } from '../../Contexts/FormatoContext';
import { useSave } from '../../../hooks/useSave';
import { Modal } from '../../Modal/Modal';
import { ModalDefault } from '../../Modal/ModalDefault';
import { ModalFormato } from '../../Modal/ModalFormato'
import { useModal } from '../../../hooks/useModal';
import { ModeVotacion } from './ModeVotacion';
import { ModalSave } from '../../Modal/ModalSave';

export const MenuVotacion = ({ventana, setGreenScreen}) => {
    
    const {resetData} = useContext(DataContext);
    const {changeFormato, formato} = useContext(FormatoContext);

    const [mode, prevMode, nextMode, setMode] = useMode();
    const [invertir, nuevaReplica] = useReplica();

    const [buttons, setButtons] = useState(false)
    const [showTotal, setShowTotal] = useState(true)

    const [guardar] = useSave();

    const [modalReset, changeModalReset] = useModal();
    const [modalFormato, changeModalFormato] = useModal();
    const [modalSave, changeModalSave] = useModal();

    const openWindow = () => {
        window.open(
          "/vote-window", 
          "FMSVOTACION.COM", 
          "width=752, height=220, scrollbars=NO"
        )
    }

    const changeForamatoModal = () => changeFormato(setMode);

    return (
        <>
        <Modal isOpenModal={modalReset} isChangeModal={changeModalReset}>
            <ModalDefault title={"¿Seguro desea borrar los datos?"} titleButton={"Borrar datos"} isChangeModal={changeModalReset} isSubmitModal={resetData}/>
        </Modal>
        <Modal isOpenModal={modalFormato} isChangeModal={changeModalFormato}>
            <ModalFormato isChangeModal={changeModalFormato} isSubmitModal={changeForamatoModal}/>
        </Modal>
        <Modal isOpenModal={modalSave} isChangeModal={changeModalSave}>
            <ModalSave isChangeModal={changeModalSave} isSubmitModal={guardar} formato={formato}/>
        </Modal>
        <div className="menu__main">   
            <div className="menu__container">
                <div className="menu__move" onClick={prevMode}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </div>
                <div className="menu__mode">
                    <div className="menu__title">
                        <p>{mode}</p>
                        <div className="menu__title-icons">
                            {!ventana && <FontAwesomeIcon className="menu__title-icon-window" icon={faExternalLinkAlt} onClick={openWindow}/>}    
                            <p className="menu__title-icon-question">?</p>
                            <div className="menu__title-question">
                                <p>
                                    -Puntos medios con <span className="color-primary f-w800">.</span> (Punto).<br />
                                    -Marcar respuesta con el <span className="color-primary f-w800">+</span> (Mas).<br />
                                    -Avanzar entre inputs con el <span className="color-primary f-w800">TAB</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ModeVotacion showTotal={showTotal} invertir={invertir} mode={mode}/>
                    <div className="menu__show" onClick={() => setButtons(!buttons)}>
                        <FontAwesomeIcon icon={buttons ? faChevronDown : faChevronUp} />
                    </div>
                </div>
                <div className="menu__move" onClick={nextMode}>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </div>
            </div>
            <div className={`menu__buttons animate__animated ${ buttons ? "dsp-none" : "animate__flipInX"} animate__faster`}>
                {
                    mode === "REPLICA" ? <button onClick={nuevaReplica}>Nueva replica</button> : <button onClick={() => setMode("REPLICA")}>Replica</button>
                }
                <button onClick={() => setMode("RESULTADOS")}>Resultados</button>
                <button onClick={changeModalReset}>Borrar datos</button>
                <button onClick={changeModalSave} className="menu__button-short"><FontAwesomeIcon icon={faSave}/></button>
                <button onClick={() => setShowTotal(!showTotal)} className="menu__button-short"><FontAwesomeIcon icon={showTotal ? faEye : faEyeSlash}/></button>
                <button onClick={changeModalFormato}>Formato</button>
                {ventana && <button onClick={() => setGreenScreen(greenScreen => !greenScreen)}>Fondo verde</button>}
            </div>
        </div>
        </>
    )
}
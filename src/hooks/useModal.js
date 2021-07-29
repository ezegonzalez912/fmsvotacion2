import { useState } from 'react'

export const useModal = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const isChangueModal = () => setIsOpenModal(!isOpenModal);

    return [isOpenModal, isChangueModal]
}

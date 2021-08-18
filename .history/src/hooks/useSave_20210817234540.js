import { useContext } from 'react'
import { DataContext } from '../components/Contexts/DataContext';
import { useLocalStorage } from './useLocalStorage';

export const useSave = () => {

    const data = useContext(DataContext);
    const [storedValue, setValue] = useLocalStorage("fmsvotacion-data-localStorage-1-0", []);

    const guardar = (title, formato, competidores) => {

        var uniqid = require('uniqid');

        setValue(values => [...values, {data: data, id: uniqid(), title: title, formato: formato, competidores}])
    }

    const delateResutado = (id) => {
        const dataNew = storedValue.filter( batalla => {
            return !(batalla.id === id)
        })

        setValue(dataNew)
    }

    const datos = storedValue

    return [guardar, delateResutado, datos]
}

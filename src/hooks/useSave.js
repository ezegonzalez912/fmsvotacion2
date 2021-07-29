import { useContext } from 'react'
import { DataContext } from '../components/Contexts/DataContext';
import { useLocalStorage } from './useLocalStorage';

export const useSave = () => {

    const data = useContext(DataContext);
    const [storedValue, setValue] = useLocalStorage("data", []);

    const guardar = (title, formato) => {

        setValue(value => [...value, {data: data, title: title, formato: formato}])
    }

    return [guardar, storedValue]
}

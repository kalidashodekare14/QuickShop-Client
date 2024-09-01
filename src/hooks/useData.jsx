import { useContext } from 'react';
import { dataContext } from '../DataProvider/DataProvider';

const useData = () => {
    const data = useContext(dataContext)
    return data
};

export default useData;
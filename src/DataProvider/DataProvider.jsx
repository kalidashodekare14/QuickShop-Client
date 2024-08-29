import React, { createContext, useState } from 'react';
import useAxiosCommon from '../hooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';

export const dataContext = createContext(null);

const DataProvider = ({ children }) => {

    // const [isData, setIsData] = useState([])
    const axiosCommon = useAxiosCommon();


    const { data: allProducts = [] } = useQuery({
        queryKey: ["allProducts"],
        queryFn: async () => {
            const res = await axiosCommon.get("/allProducts");
            return res.data;
        },
    });

    // Ready Top Data Called
    const { data: readyOrder = [] } = useQuery({
        queryKey: ["allProducts"],
        queryFn: async () => {
            const res = await axiosCommon.get("/allProducts");
            return res.data;
        },
    });

    // Featured Data Called
    const { data: featuredProduct = [] } = useQuery({
        queryKey: ["allProducts"],
        queryFn: async () => {
            const res = await axiosCommon.get("/allProducts");
            return res.data;
        },
    });



    const dataValues = { allProducts, featuredProduct, readyOrder }

    return (
        <dataContext.Provider value={dataValues}>
            {children}
        </dataContext.Provider>
    );
};

export default DataProvider;
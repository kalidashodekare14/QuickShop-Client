import React, { createContext, useState } from 'react';
import useAxiosCommon from '../hooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../hooks/useAuth';

export const dataContext = createContext(null);

const DataProvider = ({ children }) => {

    // const [isData, setIsData] = useState([])
    const axiosCommon = useAxiosCommon();
    const { user } = useAuth()




    const { data: allProducts = [], refetch, isLoading: loading } = useQuery({
        queryKey: ["allProducts"],
        queryFn: async () => {
            const res = await axiosCommon.get("/allProducts");
            return res.data;
        },
    });




    // Ready Top Data Called
    const { data: readyOrder = [] } = useQuery({
        queryKey: ["readyOrder"],
        queryFn: async () => {
            const res = await axiosCommon.get("/allProducts");
            return res.data;
        },
    });

    // Featured Data Called
    const { data: featuredProduct = [] } = useQuery({
        queryKey: ["featuredProduct"],
        queryFn: async () => {
            const res = await axiosCommon.get("/allProducts");
            return res.data;
        },
    });

    // Users Profile Data

    const { data: userData = [], isLoading: userLoading, refetch: userRefetch } = useQuery({
        queryKey: ["userData", user?.email],
        queryFn: async () => {
            const res = await axiosCommon.get(`/user-profile/${user?.email}`);
            return res.data[0];
        },
    });

    const dataValues = { allProducts, refetch, userRefetch, userLoading, loading, featuredProduct, readyOrder, userData }

    return (
        <dataContext.Provider value={dataValues}>
            {children}
        </dataContext.Provider>
    );
};

export default DataProvider;
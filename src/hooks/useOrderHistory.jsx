import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useOrderHistory = () => {
    const axiosSecure = useAxiosSecure()

    const { data: userOrderHistory = [], isLoading: userLoading, refetch } = useQuery({
        queryKey: ["userData"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/order-history`);
            return res.data;
        },
    });
    return [userOrderHistory, userLoading, refetch]
};

export default useOrderHistory;
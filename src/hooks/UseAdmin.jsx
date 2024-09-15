import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const UseAdmin = () => {
  const { user, loading } = useAuth()
  const axiosSecure = useAxiosSecure()

  const { data: isAdmin, isLoading: adminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      try {
        if (!user?.email) {
          return false
        }
        const res = await axiosSecure.get(`/user/admin/${user?.email}`);
        console.log(res.data)
        return res.data.admin
      } catch (error) {
        console.log('error fatching admin data:', error)
        return false
      }
    }

  })
  
  return [isAdmin, adminLoading]
};

export default UseAdmin;
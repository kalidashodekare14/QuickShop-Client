import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllUsers = () => {

    const axiosSecure = useAxiosSecure()
    const {
        data: allUser = [],
        isLoading: loadingAllUser,
        refetch: refetchUserAction,
    } = useQuery({
        queryKey: ["allUser"],
        queryFn: async () => {
            const res = await axiosSecure.get("all-users");
            return res.data;
        },
    });
    return [allUser, loadingAllUser, refetchUserAction]
};

export default useAllUsers;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUserProfile = () => {

    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: userData = [], isLoading: userLoading, refetch } = useQuery({
        queryKey: ["userData", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (!user?.email) {
                return false
            }
            const res = await axiosSecure.get(`/user-profile/${user?.email}`);
            return res.data[0];
        },
    });
    return [userData, userLoading, refetch]
};

export default useUserProfile;
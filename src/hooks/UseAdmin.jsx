import {useQuery} from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosCommon from "./useAxiosCommon";

const UseAdmin = () => {
  const axiosSecure = useAxiosCommon();
  const {user} = useAuth();
  const {data: isAdmin} = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`users/admin/${user.email}`);
      return res.data?.admin;
    },
  });

  return [isAdmin];
};

export default UseAdmin;

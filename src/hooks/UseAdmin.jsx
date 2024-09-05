import {useQuery} from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const UseAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const {data: isAdmin} = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`allUsers/admin/${user.email}`);
      return res.data?.admin;
    },
  });

  return [isAdmin];
};

export default UseAdmin;

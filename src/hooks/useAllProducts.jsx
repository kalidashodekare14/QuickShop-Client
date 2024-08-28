import {useQuery} from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useAllProducts = () => {
  const axiosCommon = useAxiosCommon();
  const {data: allProducts = []} = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await axiosCommon.get("/allProducts");
      return res.data;
    },
  });
  return [allProducts];
};

export default useAllProducts;

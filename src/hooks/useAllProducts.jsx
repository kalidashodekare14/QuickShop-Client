import {useQuery} from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useAllProducts = () => {
  const axiosCommon = useAxiosCommon();
  const {data: allProducts = [], isLoading: loading} = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await axiosCommon.get("/allProducts");
      return res.data;
    },
  });
  return [allProducts, loading];
};

export default useAllProducts;

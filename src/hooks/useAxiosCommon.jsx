import axios from "axios";

const axiosCommon = axios.create({
  baseURL: "https://quickshop-server.onrender.com",
});

const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;

import axios from "axios";

const axiosInstanceLocal = axios.create({
  baseURL: "http://localhost:8888",
});

export default axiosInstanceLocal;

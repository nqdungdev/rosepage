import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://mocki.io",
});

export default axiosClient;

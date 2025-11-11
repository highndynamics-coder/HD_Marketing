import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;

import axios from "axios"


export const Axios = () => {
  const axiosInstance = axios.create({
    baseURL: `https://api.thecatapi.com/v1`,
    timeout: 0,
  })
  return axiosInstance;
}
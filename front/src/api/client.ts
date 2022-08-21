import axios, {AxiosInstance} from "axios";

const API_BASE_URL = 
  "http://localhost:8080"
  // "https://go-server-doer-vol5.herokuapp.com"
  // import.meta.env.VITE_API_BASE_URL

// axios のインスタンスを返す
export const axiosClient = (): AxiosInstance => { 
  return axios.create({
    baseURL: API_BASE_URL
  })
}
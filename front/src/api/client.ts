import axios, {AxiosInstance} from "axios"

export const AxiosClient = (): AxiosInstance => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
  })
}
import axios from 'axios'

import { getCookie } from 'libraries/cookie'

const defaultOptions = {
  baseURL: process.env.REACT_APP_BASE_URL,
}

export const axiosInstance = axios.create(defaultOptions)

axios.interceptors.request.use(
  (config: any) => {
    const token = getCookie('token')

    config.headers = {
      Authorization: `Bearer ${token}`,
    }

    return config
  },
  error => Promise.reject(error)
)

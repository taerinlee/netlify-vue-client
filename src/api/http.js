import axios from 'axios'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_PRODUCT_APP_API : process.env.VUE_APP_API,
  withCredentials: true
})

export default service

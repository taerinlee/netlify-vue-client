import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  withCredentials: true
})

export default service

import axios from 'axios'

const service = axios.create({
  baseURL: process.env.NODE_ENV !== 'localhost' ? 'https://netlify-mevn-server.netlify.app' : process.env.VUE_APP_API,
  withCredentials: true
})

export default service

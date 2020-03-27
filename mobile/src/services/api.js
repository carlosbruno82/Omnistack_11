import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.68.127:3333' //utilando IP por causa EXPO (localhost)
})

export default api
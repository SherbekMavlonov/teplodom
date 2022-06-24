import axios from 'axios'

const token: string | null = localStorage.getItem('token')

const instance = axios.create({
  baseURL: 'api/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
export default instance

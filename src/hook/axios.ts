import axios from 'axios'

const token: string | null = localStorage.getItem('token')

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
export default instance

import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://api-register-users.herokuapp.com/'
})
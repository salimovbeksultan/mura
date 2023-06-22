import axios from 'axios'

export function useAxios () {
  return axios.create({
    baseURL: process.env.VUE_APP_API_BASE
  })
}

import axios from 'axios'
import commons from '../index';

export default {
  users: {
    newUser: (user) => {
      return axios.post(`${commons.apiURL}/users`, user)
    },
    getUsers: () => {
      return axios.get(`${commons.apiURL}/users`)
    },
    getUser:(_id)=>{
      return axios.get(`${commons.apiURL}/users/${_id}`)
    },
    updateUser:(_id)=>{
      return axios.put(`${commons.apiURL}/users/${_id}`)
    },
    deleteUser:(_id)=>{
      return axios.delete(`${commons.apiURL}/users/${_id}`)
    }
  }
}

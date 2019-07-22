import axios from 'axios'
import common from '../index'

export default {
    reservations:{
        newReservation:(reservation)=>{
            return axios.post(`${common.apiURL}/reservations`, reservation)
        },
        getReservations:()=>{
            return axios.get(`${common.apiURL}/reservations`)
        },
        getReservation:(_id)=>{
            return axios.get(`${common.apiURL}/reservations/${_id}`)
        },
        updateReservation:(_id)=>{
            return axios.put(`${common.apiURL}/reservations/${_id}`)
        },
        deleteReservation:(_id)=>{
            return axios.delete(`${common.apiURL}/reservations/${_id}`)
        }
    }
}
import axios from 'axios';
import common from '../index';


export default {
    signin:{
        login:(data)=>{
            return axios.post(`${common.apiURL}/login`, data);
        }
    }
}
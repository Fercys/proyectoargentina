import axios from 'axios';
import common from '../index';


export default {
    countries:{
        getCountries:()=>{
            return axios.get(`${common.apiURL}/countries`);
        }
    }
}
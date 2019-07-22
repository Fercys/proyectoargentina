import axios from 'axios';
import common from '../index';


export default {
    company:{
        getcompany:()=>{
            return axios.get(`${common.apiURL}/companies`);
        },
        newCompany:(body)=>{
            return axios.post(`${common.apiURL}/companies`, body);
        },
        getOneCompany:(_id)=>{
            return axios.get(`${common.apiURL}/companies/${_id}`);
        },
        deleteCompany:(_id)=>{
            return axios.delete(`${common.apiURL}/companies/${_id}`);
        },
        updateCompany:(_id, body)=>{
            return axios.put(`${common.apiURL}/companies/${_id}`, body);
        },
        allCompanies:()=>{
            return axios.get(`${common.apiURL}/all/companies`);
        }
    }
}
import axios from 'axios';
import common from '../index';


export default {
    branchs:{
        newBranch:(branch)=>{
            return axios.post(`${common.apiURL}/branchs`, branch);
        },
        getBranchs:()=>{
            return axios.get(`${common.apiURL}/branchs`);
        },
        getBranch:(_id)=>{
            return axios.get(`${common.apiURL}/branchs/${_id}`);
        },
        updateBranch:(_id, body)=>{
            return axios.put(`${common.apiURL}/branchs/${_id}`, body);
        },
        deleteBranch:(_id)=>{
            return axios.delete(`${common.apiURL}/branchs/${_id}`);
        },
        getBranchsOfSupplier:(_id)=>{
            return axios.get(`${common.apiURL}/branchs/suppliers/${_id}`);
            
        }
    }
}
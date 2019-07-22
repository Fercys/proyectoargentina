import axios from 'axios';
import common from '../index';


export default {
    suppliers:{
        getAllSuppliers:()=>{
            return axios.get(`${common.apiURL}/suppliers`);
        },
        getAllSuppliersOfCompany:(_id)=>{
            return axios.get(`${common.apiURL}/suppliers/company/${_id}`);
        },
        newSupplier:(body)=>{
            return axios.post(`${common.apiURL}/suppliers`, body);
        },
        getOneSupplier:(_id)=>{
            return axios.get(`${common.apiURL}/suppliers/${_id}`);
        },
        updateSupplier:(_id, body)=>{
            return axios.put(`${common.apiURL}/suppliers/${_id}`, body);
        },        
        deleteSupplier:(_id)=>{
            return axios.delete(`${common.apiURL}/suppliers/${_id}`);
        },
        getAllSuppliersSelections:()=>{
            return axios.get(`${common.apiURL}/all/suppliers`);
        },
    }
}
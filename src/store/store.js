import Vue from "vue";
import Vuex from "vuex";
import usersServices  from "../commons/services/users";
import countryServices  from "../commons/services/countries";
import companyService from "../commons/services/company"
import reservationsServices from "../commons/services/reservations";
import branchsServices from "../commons/services/branchs";
import supplierServices from "../commons/services/suppliers";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeItem: 'reservations',
    users:[],
    countries:[],
    branchs:[],
    companySelections:[],
    supplierSelections:[],
    reservations:[],
    responseSupplier:{},
    suppliersOfCompany:{},
    branchsOfSupplier:{},
    responseBranch:{},
    responseCompany:{},
    sesion:(localStorage.getItem('es-login')!==null)?JSON.parse(localStorage.getItem('es-login')):null
  },
  mutations: {
    setCountries:(state, countries)=>{
      state.countries = countries
    },
    setResponseCompany:(state, responseCompany)=>{
      state.responseCompany = responseCompany
    },
    setCompanySelections:(state, companySelections)=>{
      state.companySelections = companySelections
    },
    setActiveItem: (state, activeItem) => {
      state.activeItem = activeItem
    },
    setResponseSupplier: (state, responseSupplier) => {
      state.responseSupplier = responseSupplier
    },
    setSuppliersOfCompany: (state, suppliersOfCompany) => {
      state.suppliersOfCompany = suppliersOfCompany
    },
    setResponseBranch: (state, responseBranch) => {
      state.responseBranch = responseBranch
    },
    setUsers:(state, users)=>{
      state.users = users
    },
    setBranchs:(state, branchs)=>{
      state.branchs = branchs
    },
    setReservatios:(state, reservations)=>{
      state.reservations = reservations
    },
    setActiveItem: (state, activeItem) => {
      state.activeItem = activeItem
    },
    setSesion:(state, sesion) => {
      state.sesion = sesion
    },
    setBranchsOfSupplier:(state, branchsOfSupplier) =>{
      state.branchsOfSupplier = branchsOfSupplier
    },
    setSupplierSelections:(state, supplierSelections) =>{
      state.supplierSelections = supplierSelections
    }
    
  },
  actions: {
    getCountries:({commit, state })=>{
      countryServices.countries.getCountries().then((response)=>{
        
        if (response.data.code === 200) {
          state.countries = response.data.data
        }else{
          state.countries = []
        }
      }).catch((err)=>{
        state.countries = []
      })
    },
    getUsers:({commit, state })=>{
      usersServices.users.getUsers().then((response)=>{
        if (response) {
          state.users = response.data.docs
        } else {
          state.users = []
        }
      }).catch((error)=>{
        state.users = []
      })
    },
    getReservatios:({commit, state})=>{
      reservationsServices.reservations.getReservations().then((response)=>{
        if (response.data) {
          state.reservations = response.data.docs
        } else {
          state.reservations = []
        }
      }).catch((error)=>{
        state.reservations = []
      })
    },
    getSesion({commit, state}){
      if (localStorage.getItem('es-login')!==null) {
        state.sesion = JSON.parse(localStorage.getItem('es-login'))
      }else{
        state.sesion = null
      }
    },
    getSuppliers({commit, state}){
      supplierServices.suppliers.getAllSuppliers().then((response)=>{
        state.responseSupplier = response.data
      }).catch((error)=>{
        state.responseSupplier = {}
      })
    },
    getSuppliersOfCompany({commit, state}, _id){
      supplierServices.suppliers.getAllSuppliersOfCompany(_id).then((response)=>{
        state.suppliersOfCompany = response.data
      }).catch((error)=>{
        state.suppliersOfCompany = {}
      })
    },
    getBranchsOfSupplier({commit, state}, _id){
      branchsServices.branchs.getBranchsOfSupplier(_id).then((response)=>{
        state.branchsOfSupplier = response.data
      }).catch(()=>{
        state.branchsOfSupplier = {}
      })
    },
    getBranchs({commit, state}){
      branchsServices.branchs.getBranchs().then((response)=>{
        state.responseBranch = response.data
      }).catch((error)=>{
        state.responseBranch = {}
      })
    },
    getCompanies({commit, state}){
      companyService.company.getcompany().then((response)=>{
        state.responseCompany = response.data
      }).catch((err)=>{
        state.responseCompany = {}
      })
    },
    getCompaniesSelections({commit, state}){
      companyService.company.allCompanies().then((response)=>{
        state.companySelections = response.data.data
      }).catch((err)=>{
        state.companySelections = []
      })
    },
    getSupplierSelections({commit, state}){
      supplierServices.suppliers.getAllSuppliersSelections().then((response)=>{
        state.supplierSelections = response.data.data
      }).catch((err)=>{
        state.supplierSelections = []
      })
    }
  },
  getters: {
    activeItem: state => state.activeItem,
    users:state => state.users,
    branchs: state => state.branchs,
    reservations:state => state.reservations,
    sesion:state => state.sesion,
    responseSupplier:state => state.responseSupplier,
    responseBranch:state => state.responseBranch,
    suppliersOfCompany:state => state.suppliersOfCompany,
    responseCompany:state => state.responseCompany,
    companySelections:state => state.companySelections,
    branchsOfSupplier: state => state.branchsOfSupplier,
    supplierSelections: state => state.supplierSelections,
    countries: state => state.countries
  }
});

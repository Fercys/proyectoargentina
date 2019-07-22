<template>
  <section>
     <base-header class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 d-inline-block mb-0">{{$route.name}}</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb/>
          </nav>
        </div>
        <div class="col-lg-6 col-5 text-right">
          <base-button @click="$router.push('/reservations')" size="sm" type="neutral">Back</base-button>
          <base-button @click="saveUser()" size="sm" type="primary">Save Reservation</base-button>
        </div>
      </div>
    </base-header>

  <div class="container-fluid mt--6">
    <div class="card mb-4">
      

        <el-tabs type="border-card" @tab-click="handleClick">
          <el-tab-pane label="Address / Date & Time">
            <div class="col-md">          
                <div class="row">
                  <div class="col-md-3">
                    <base-input v-model.trim="titled" label="Reservation ID:" placeholder="Reservation ID:"  />
                  </div>
                  <div class="col-md-3">
                        <label>Reservation type:</label><br>
                          <el-select class="select-danger"
                            placeholder="Select type"
                            v-model="selects.simple">
                            <el-option v-for="option in selects.type"
                                class="select-danger"
                                :value="option.value"
                                :label="option.label"
                                :key="option.label">
                            </el-option>
                        </el-select>
                  </div>
                  <div class="col-md-3">
                    <base-input v-model.trim="title" label="From:" placeholder="From"  />
                  </div>
                  <div class="col-md-3">
                    <base-input v-model.trim="title" label="To:" placeholder="To"  />
                  </div>
                 <!-- <div class="col-md-5">
                        <label>Service:</label><br>
                          <el-select class="select-danger"
                            placeholder="Select Service"
                            v-model="selects.simpleservice">
                            <el-option v-for="option in selects.service"
                                class="select-danger"
                                :value="option.value"
                                :label="option.label"
                                :key="option.label">
                            </el-option>
                        </el-select>
                  </div>-->
                </div>

              
                <div class="row ">
                  <div class="col-md-3">
                      <div class="block">
                        <span>Pickup Date</span><br>
                        <el-date-picker
                          v-model="value1"
                          type="date"
                          placeholder="Pick a date"
                          default-value="2010-10-01">
                        </el-date-picker>
                      </div>
                  </div>
                  <div class="col-md-3">
                   <span>Pickup Time</span>
                    <el-time-select
                      v-model="value"
                      :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                      }"
                      placeholder="Select time">
                    </el-time-select>
                  </div>
                </div><br>

                <div class="row">

                  <div class="col-md-3">
                    <base-input v-model.trim="title" label="Number of Pessenger:" placeholder="Number of Pessenger" type="number"/>
                  </div>
                  <div class="col-md-3">
                        <label>Child Seat Required:</label><br>
                          <el-select class="select-danger"
                            placeholder="Child Seat"
                            v-model="selects.child">
                            <el-option v-for="option in selects.nrochild"
                                class="select-danger"
                                :value="option.value"
                                :label="option.label"
                                :key="option.label">
                            </el-option>
                        </el-select>
                  </div>
                  <div class="col-md-3">
                    <base-input v-model.trim="flight_no" label="Flight Number:" placeholder="Flight Number"/>
                  </div>
                  
                </div>  
                <div class="col-lg-12 col-5 text-right">
                  <base-button @click="$router.push('/dashboard')" size="sm" type="neutral">Back</base-button>
                  <base-button  size="sm" type="primary">Next >></base-button>
                </div> 
            </div>
          
          </el-tab-pane>
          <el-tab-pane label="Service / Supplier"> 
              <div class="col-md">
                
                    <div class="row">
                        <div class="col-md-4">
                          <label>Supplier:</label><br>
                            <el-select class="select-danger"
                                placeholder="Supplier"
                                v-model="selects.simplesup">
                              <el-option v-for="option in selects.languages"
                                  class="select-danger"
                                  :value="option.value"
                                  :label="option.label"
                                  :key="option.label">
                              </el-option>
                            </el-select>
                        </div>
                        <div class="col-md-4">
                          <label>Branch:</label><br>
                            <el-select class="select-danger"
                                placeholder="Branch"
                                v-model="selects.simplebra">
                              <el-option v-for="option in selects.languages"
                                  class="select-danger"
                                  :value="option.value"
                                  :label="option.label"
                                  :key="option.label">
                              </el-option>
                            </el-select>
                        </div>
                        <div class="col-md-4">
                                  <base-input v-model.trim="driver" label="Driver:" placeholder="Driver"/>
                        </div>
                    </div>

                          <div class="card">
                            <div class="border-0 card-header">
                                <h3 class="mb-0">Service Type</h3>
                            </div>
                           <div class="card-body">    
                             List of service of supllier and branch      
                              <div class="card-footer py-4 d-flex justify-content-end">
                                  <base-pagination v-model="currentPage" :total="50"></base-pagination>
                              </div>          
                            </div>
                          </div>
                          <div class="col-lg-12 col-5 text-right">
                            <base-button @click="$router.push('/dashboard')" size="sm" type="neutral">Back</base-button>
                            <base-button  size="sm" type="primary">Next >></base-button>
                          </div>
              </div>          
          </el-tab-pane>
          <el-tab-pane label="Passenger / Client">
              <div class="col-md">
                      
                      <div class="row">
                        <div class="col-md-3">
                          <base-input v-model.trim="main_passenger" label="Client:" placeholder="Client"/>
                        </div>
                        <div class="col-md-3">
                          <base-input v-model.trim="main_passenger" label="First Name:" placeholder="First Name"/>
                        </div>
                        <div class="col-md-3">
                            <base-input v-model.trim="pickup_sign" label="Last Name:" placeholder="Last Name"/>
                        </div>
                        <div class="col-md-3">
                          <br><br>
                          <base-checkbox class="mb-3" v-model.trim="children_seat">  Pickup Sign  </base-checkbox>
                        </div>
                      </div>

                      <div class="row">
                        
                        <div class="col-md-3">
                          <base-input v-model.trim="email" label="Email:" placeholder="Email"/>
                        </div>
                        <div class="col-md-3">
                            <base-input v-model.trim="country_code" label="Phone Number:" placeholder="Phone Number"/>
                        </div>
                        <div class="col-md-3">
                          <base-input v-model.trim="phone" label="Phone Number 2:" placeholder="Phone Number 2"/>
                        </div>
                        <div class="col-md-3">
                          <!--<base-input label="Special requirements:">
                            <textarea class="form-control" v-model.trim="special_requirements" rows="3" placeholder="Special requirements"></textarea>
                          </base-input>-->
                          <base-input v-model.trim="phone" label="Special requirements:" placeholder="Special requirements"/>
                        </div>
                      </div>
                      <div class="col-lg-12 col-5 text-right">
                        <base-button @click="$router.push('/dashboard')" size="sm" type="neutral">Back</base-button>
                        <base-button  size="sm" type="primary">Next >></base-button>
                      </div>
                </div>
          </el-tab-pane>
          <el-tab-pane label="Princing / Payment">
              <div class="col-md">
                    <div class="row">
                          <div class="col-md">
                            <label for="" class="text-uppercase font-weight-bold">PRICING SUMMARY</label>
                          </div>
                    </div>
                    <div class="row">
                      <div class="col-md">
                        <div class="row">
                          <div class="col-md-3">
                              <base-input v-model.trim="net_price" type="number" label="Net price:" placeholder="Net price"/>
                          </div>
                          <div class="col-md-3">
                            <base-input v-model.trim="gross_price" type="number" label="Gross price:" placeholder="Gross price"/>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md">
                            <label for="" class="text-uppercase font-weight-bold">CLIENT PAYMENT</label>
                          </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <base-input v-model.trim="net_price" type="number" label="Total Charge:" placeholder="Total Charge"/>
                            </div>
                            <div class="col-md-3">
                              <label class="form-control-label">Payment Type</label>
                              <el-select class="select-danger"
                                  placeholder="Payment Type"
                                  v-model="selects.typepayments">
                                <el-option v-for="option in selects.typepayment"
                                    class="select-danger"
                                    :value="option.value"
                                    :label="option.label"
                                    :key="option.label">
                                </el-option>
                              </el-select>
                            </div>
                        </div>
                        <div class="row" v-if="selects.typepayments == '2'">
                          <div class="col-md">
                            <label for="" class="text-uppercase font-weight-bold">DATE CARD</label>
                          </div>
                        </div>
                        <div class="row" v-if="selects.typepayments == '2'">
                            <div class="col-md-3">
                                <base-input v-model.trim="numberCard" type="number" label="Carc Number:" placeholder="Carc Number"/>
                            </div>
                            <div class="col-md-3">
                                <base-input v-model.trim="nameCard" type="text" label="Cardholder Name:" placeholder="Cardholder Name"/>
                            </div>
                            <div class="col-md-3">
                                <base-input v-model.trim="cardExpir" type="text" label="Expiration Date:" placeholder="Expiration Date"/>
                            </div>
                            <div class="col-md-2">
                                <base-input v-model.trim="codeCard" type="number" label="Security Code:" placeholder="Security Code"/>
                            </div>
                        </div>



                        <div class="row">
                          <div class="col-md">
                            <label for="" class="text-uppercase font-weight-bold">SUPPLIER PAYMENTS</label>
                          </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <base-input v-model.trim="net_price" type="number" label="Purchase Order Number:" placeholder="Purchase Order Number"/>
                            </div>
                        </div>
                      </div>
                    </div>                    
                    <div class="col-lg-12 col-5 text-right">
                      <base-button @click="$router.push('/dashboard')" size="sm" type="neutral">Back</base-button>
                      <base-button  size="sm" type="primary">Next >></base-button>
                    </div>
               </div>
          </el-tab-pane>
          <el-tab-pane label="Review">
                  <div class="col-md">
                    <div class="row">
                      <div class="col-md">
                        <label for="" class="text-uppercase font-weight-bold" >Address / DATETIME</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md">
                        <div class="form-group row">
                          <label
                            for="exampleFormControlSelect1"
                            class="col-sm-5 col-form-label es-col-form-label"
                          >Reservation ID:</label>
                          <div class="col-sm-7 align-self-start">
                            <input
                              type="email"
                              class="form-control border-0"
                              id="inputEmail3"
                              placeholder
                              readonly
                            >
                          </div>
                        </div>
                      </div>
                      <div class="col-md">
                        <button
                      class="btn btn-block text-left"
                      v-bind:class="{ 'es-select-active es-icon-airport-active': select === 1, 'es-select es-icon-airport': select !== 1 }"
                      @click="select = 1"
                    >Airport</button>
                      </div>
                      <div class="col-md">
                        <button
                      class="btn btn-block text-left"
                    >Airport</button>
                      </div>
                    </div>
                  </div>

                <div class="row">
                  <div class="col-md-4">
                      <base-input v-model.trim="date" label="Pickup Date:" placeholder="Date"/>
                      
                  </div>
                  <div class="col-md-4">
                    <base-input v-model.trim="time" label="Time:" placeholder="Time"/>
                  </div>
                  <div class="col-md-4">
                    <base-input v-model.trim="flight_no" label="Flight no:" placeholder="Flight no"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                      <base-input v-model.trim="from" label="From:" placeholder="From"/>
                  </div>
                  <div class="col-md-4">
                    <base-input v-model.trim="to" label="To:" placeholder="To"/>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md">
                    <div class="row">
                      <div class="col-md">
                        <label for="" class="text-uppercase font-weight-bold">Service / Supplier</label>
                      </div>
                    </div>
                    
                    <div class="row">
                      <div class="col-md-4">
                          <base-input v-model.trim="supplier" label="Supplier:" placeholder="Supplier"/>
                      </div>
                      <div class="col-md-4">
                        <base-input v-model.trim="branch" label="Branch:" placeholder="Branch"/>
                      </div>
                      <div class="col-md-4">
                        <base-input v-model.trim="service_type" label="Service Type:" placeholder="Service Type"/>
                      </div>
                    </div> 

                  </div>
                </div>
                <div class="row">
                  <div class="col-md">
                    <div class="row">
                      <div class="col-md">
                        <label for="" class="text-uppercase font-weight-bold">Passenger / Client</label>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4">
                          <base-input v-model.trim="no_of_passengers" label="No of passengers:" placeholder="No of passengers"/>
                      </div>
                      <div class="col-md-4">
                        <base-input v-model.trim="main_passenger" label="Main passenger:" placeholder="Main passenger"/>
                      </div>
                      <div class="col-md-4">
                        <base-input v-model.trim="pickup_sign" label="Pickup sign:" placeholder="Pickup sign"/>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4">
                          <base-input v-model.trim="booking_source" label="Booking source:" placeholder="Booking source"/>
                      </div>
                      <div class="col-md-4">
                        <base-input v-model.trim="email" label="Email:" placeholder="Email"/>
                      </div>
                      <div class="col-md-4">
                        <base-input v-model.trim="country_code" label="Country code:" placeholder="Country code"/>
                      </div>
                    </div>


                    <div class="row">
                      <div class="col-md-4">
                          <base-input v-model.trim="phone" label="Phone:" placeholder="Phone"/>
                      </div>
                      <div class="col-md-4">
                        <base-input v-model.trim="special_requirements" label="Special requirements:" placeholder="Special requirements"/>
                      </div>
                      <div class="col-md-4 mt-4">
                        <base-checkbox class="mb-3" v-model.trim="children_seats"> Children seats required </base-checkbox>
                      </div>
                    </div>            

                  </div>
                </div>
          </el-tab-pane>
       </el-tabs>      
    </div>
  </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions, mapMutations } from "vuex";
import CardService from "../Services/components/CardService";
import { Tabs,TabPane,Table, TableColumn, DropdownMenu, DropdownItem, Dropdown, DatePicker,TimeSelect} from 'element-ui';
export default {
  name: "NewReservations",
  data() {
    return {
      projects: [
          {
            title: 'Fercys Ramirez',
            type: 'Prueba',
            company: 'Prueba 2 CA',
            country: 'Venezuela',
            countrys: 'Venezuela'
          },
          {
            title: 'Jesus Flores',
            type: 'Prueba',
            company: 'Prueba 2 CA',
            country: 'Venezuela',
            countrys: 'Venezuela'
          },
          {
            title: 'Pablo Palmas',
            type: 'Prueba',
            company: 'Prueba 2 CA',
            country: 'Argentina',
            countrys: 'Venezuela'
          }
        ],
        value1: '',
        value:'',
        currentPage: 1, 
      select: 1,
      service: "way",
      active: 1,
      activeName: 'first',
      numberCard:'',
      nameCard:'',
      codeCard:'',
      cardExp:'',
      selects: {
            simple: '',
            child: '',
            simplesup: '',
            simplebra: '',
            typepayments: '',
            nrochild: [
              {value: '1', label: '1'},
              {value: '2', label: '2'},
              {value: '3', label: '3'},
              {value: '4', label: '4'},
              {value: '5', label: '5'}],
            typepayment: [
              {value: '1', label: 'Cash'},
              {value: '2', label: 'Credit Card'}],
            type: [
              {value: '1', label: 'Airport'},
              {value: '2', label: 'Station'},
              {value: '3', label: 'Port'}],
            simpleservice: '',
            service: [
              {value: '1', label: 'One Way'},
              {value: '2', label: 'Hourly'}],
              languages: [{value: 'Bahasa Indonesia', label: 'Bahasa Indonesia'},
              {value: 'Bahasa Melayu', label: 'Bahasa Melayu'},
              {value: 'Català', label: 'Català'},
              {value: 'Dansk', label: 'Dansk'},
              {value: 'Deutsch', label: 'Deutsch'},
              {value: 'English', label: 'English'},
              {value: 'Español', label: 'Español'},
              {value: 'Eλληνικά', label: 'Eλληνικά'},
              {value: 'Français', label: 'Français'},
              {value: 'Italiano', label: 'Italiano'},
              {value: 'Magyar', label: 'Magyar'},
              {value: 'Nederlands', label: 'Nederlands'},
              {value: 'Norsk', label: 'Norsk'},
              {value: 'Polski', label: 'Polski'},
              {value: 'Português', label: 'Português'},
              {value: 'Suomi', label: 'Suomi'},
              {value: 'Svenska', label: 'Svenska'},
              {value: 'Türkçe', label: 'Türkçe'},
              {value: 'Íslenska', label: 'Íslenska'},
              {value: 'Čeština', label: 'Čeština'},
              {value: 'Русский', label: 'Русский'},
              {value: 'ภาษาไทย', label: 'ภาษาไทย'},
              {value: '中文 (简体)', label: '中文 (简体)'},
              {value: 'W">中文 (繁體)', label: 'W">中文 (繁體)'},
              {value: '日本語', label: '日本語'},
              {value: '한국어', label: '한국어'}]
      },
    };
  },
  created() {
    this.setActiveItem("reservations");
  },
  methods: {
    setActive(index) {
      this.active = index;
      console.log(this.active);
    },
    ...mapMutations(["setActiveItem"]),
      handleClick(tab, event) {
        console.log(tab, event);
      }
  },
  components: {
    "cad-service": CardService,
    [Tabs.name]: Tabs,
    [TabPane.name]: TabPane,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
  }
};
</script>
<style lang="scss">
.btn-act {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 1px;
}

.tab-content {
  .tab-pane {
    &:focus {
      outline: none;
    }
  }
  &:focus {
    outline: none;
  }
}

.es-select-active {
  font-weight: normal;
  font-size: 1rem;
  padding-left: 3rem;
  background: #1f1f1f;
  border-radius: 4px;
  color: #ebebeb;
  &:hover {
    color: #ebebeb;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
}
.es-select {
  font-weight: normal;
  font-size: 1rem;
  background: #f5f6ff;
  border-radius: 4px;
  padding-left: 3rem;
  color: #000000;
  &:hover {
    color: #000000;
  }
  &:focus {
    outline: none;
    box-shadow: none;
  }
}

.es-icon-airport {
  background-image: url("../../assets/images/icon-stationport-dark.svg");
  background-repeat: no-repeat;
  background-position: 1rem center;
}
.es-icon-airport-active {
  background-image: url("../../assets/images/icon-stationport-grey.svg");
  background-repeat: no-repeat;
  background-position: 1rem center;
}
.es-icon-station {
  background-image: url("../../assets/images/icon-station-dark.svg");
  background-repeat: no-repeat;
  background-position: 1rem center;
}
.es-icon-station-active {
  background-image: url("../../assets/images/icon-station-grey.svg");
  background-repeat: no-repeat;
  background-position: 1rem center;
}

.es-icon-port {
  background-image: url("../../assets/images/icon-port-dark.svg");
  background-repeat: no-repeat;
  background-position: 1rem center;
}
.es-icon-port-active {
  background-image: url("../../assets/images/icon-port-grey.svg");
  background-repeat: no-repeat;
  background-position: 1rem center;
}

.es-icon-way {
  background-image: url("../../assets/images/icon-way-dark.svg");
  background-repeat: no-repeat;
  background-position: 1rem center;
}
.es-icon-way-active {
  background-image: url("../../assets/images/icon-way-grey.svg");
  background-repeat: no-repeat;
  background-position: 1rem center;
}
.es-icon-hourly {
  background-image: url("../../assets/images/icon-hourly-dark.svg");
  background-repeat: no-repeat;
  background-position: 1rem center;
}
.es-icon-hourly-active {
  background-image: url("../../assets/images/icon-hourly-grey.svg");
  background-repeat: no-repeat;
  background-position: 1rem center;
}
</style>
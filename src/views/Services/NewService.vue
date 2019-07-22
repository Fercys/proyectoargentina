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
          <base-button @click="$router.push('/services')" size="sm" type="neutral">Back</base-button>
          <base-button size="sm" type="primary">Save Service</base-button>
        </div>
      </div>
    </base-header>
     <div class="container-fluid mt--6">
          <div class="row">
            <div class="col-md">
                <div class="row">
                        <div class="col-md-6">
                          <el-card class="box-card">
                            <div slot="header" class="clearfix">
                              <strong>Pricing Selection</strong>
                              
                            </div>
                            <div class="row" style="margin-top: 12px; margin-bottom: 30px;">
                                          <div class="col-md-6">
                                              <base-checkbox  v-model="checkboxes.leather">
                                                  Per Kilometer Travel
                                              </base-checkbox>
                                          </div>
                                          <div class="col-md-6">
                                              <base-checkbox  v-model="checkboxes.area">
                                                  Radius Area
                                              </base-checkbox>
                                          </div>
                                    </div>
                          </el-card>
                        </div>
                        <div class="col-md-6">
                          <el-card class="box-card">
                            <div slot="header" class="clearfix">
                              <strong>Picture</strong>
                              
                            </div>
                            <div class="row">
                                          <div class="col-md-12">
                                            <div class="form-group">
                                              <label for="exampleFormControlFile1" class="btn btn-block es-select">
                                                <img src="@/assets/images/actions/icon-upload-file.svg" alt class="mr-3"> Upload file (.png, .jpg)
                                              </label>
                                              <input type="file" class="form-control-file d-none" id="exampleFormControlFile1">
                                            </div>
                                          </div>
                                          
                                    </div>
                          </el-card>
                        </div>
                </div>
                <br>

              <div class="row">
                  <div class="col-md-12">
                      <el-card class="box-card">
                          <div slot="header" class="clearfix">
                            <strong>Service Parameters</strong>
                          </div>
                                <div class="row">
                                  <div class="col-md-4">                                
                                    <base-input label="Branch:" placeholder="Branch"/>
                                  </div>
                                  <div class="col-md-4">
                                    <base-input label="Service Category:" placeholder="Service Category"/>
                                  </div>
                                  <div class="col-md-2">
                                    <base-input label="Nº Seats:" placeholder="Nº Seats"/>
                                  </div>
                                  <div class="col-md-2">
                                    <base-input label="Nº Suitcases :" placeholder="Nº Suitcases "/>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-2">
                                    <label>Child seat Requerid</label> <br>
                                      <el-switch v-model="value1">
                                      </el-switch>
                                  </div>
                                  <div class="col-md-2" v-if="checkboxes.area == false">
                                    <base-input label="Base Price:" placeholder="Base Price"/>
                                  </div>
                                  <div class="col-md-3" v-if="checkboxes.area == true">
                                    <base-input label="Base Price Per Area Ratio:" placeholder="Base Price"/>
                                  </div>
                                  <div class="col-md-3">
                                    <base-input label="Price per extra Kilometer:" placeholder="Extra price"/>
                                  </div>
                                  <div class="col-md-2" v-if="checkboxes.area == true">                                    
                                    <base-input label="Radius Area:" placeholder="Radius Area"/>
                                  </div>
                                   <div class="col-md-2" v-if="checkboxes.area == true">
                                   <br>
                                    <base-button size="sm" type="primary" @click="modals.modal1 = true">Add Ratio Area</base-button>
                                    <modal :show.sync="modals.modal1">
                                      <h6 slot="header" class="modal-title" id="modal-title-default">Add Ration Area</h6>

                                      <div class="col-md-10" v-if="checkboxes.area == true">
                                        <base-input label="Search Location:" placeholder="Search Location"/>
                                      </div>
                                      <div class="col-md-10" v-if="checkboxes.area == true">
                                        <base-input label="Area Name:" placeholder="Area Name"/>
                                      </div>
                                      <el-card>map <br><br><br><br><br><br><br><br></el-card>

                                      <template slot="footer">                                          
                                          <base-button type="link" class="ml-auto" @click="modals.modal1 = false">Close
                                          </base-button>
                                          <base-button type="primary">Save</base-button>
                                      </template>
                                  </modal>
                                  </div>
                                  
                                 </div>
                      </el-card>
                    </div>
                  </div>

               <br>
                <div class="row">
                  <div class="col-md-12">
                      <el-card class="box-card">
                          <div slot="header" class="clearfix">
                            <strong>Hourly</strong>
                          </div>                              
                                <div class="row">
                                    <div class="col-md-3">
                                      <base-input label="Minimum:" placeholder="Minimum"/>
                                    </div>
                                    <div class="col-md-2">
                                      <base-input label="Price per hour:" placeholder="Price per hour"/>
                                    </div>
                                    <div class="col-md-3">
                                      <base-input label="Extra Hour Price:" placeholder="Extra hour price"/>
                                    </div>
                                </div>
                      </el-card>
                    </div>
                  </div>
                  <br>
                  <div class="row">
                  <div class="col-md-12">
                      <el-card class="box-card">
                          <div slot="header" class="clearfix">
                            <strong>Preferences</strong>
                          </div>                              
                                 <div class="row">
                                  <div class="col-md-2">
                                    <el-checkbox label="Wifi"></el-checkbox>
                                  </div>
                                  <div class="col-md-2">
                                      <el-checkbox label="Water"></el-checkbox>
                                  </div>
                                  <div class="col-md-3 mb-4">
                                      <el-checkbox label="News Papers"></el-checkbox>
                                  </div>
                                </div>
                      </el-card>
                    </div>
                  </div>

                  <br>
                  <div class="row">
                  <div class="col-md-12">
                      <el-card class="box-card">
                          <div slot="header" class="clearfix">
                            <strong>Area of Service</strong>
                          </div>                              
                                 <div class="row">
                                    <div class="col-md-2">
                                      <base-input label="Price:" placeholder="Price"/>
                                    </div>
                                    <div class="col-md-4">
                                      <base-input label="Service Name:" placeholder="Service Name"/>
                                    </div>
                                    <div class="col-md-2">
                                      <base-input label="Price per Extra Kilometer:" placeholder="Price per Extra Kilometer"/>
                                    </div>
                                  </div>
                      </el-card>
                    </div>
                  </div>
            </div>
          </div>
        </div>
</section>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions, mapMutations } from "vuex";
import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown, Checkbox,Switch,Card} from 'element-ui';
export default {
  name: "EditServices",
   data(){
        return {
         checkboxes: {
            area: false,
            wifi: false,
            water: false,
            newspapers: false
          },
          modals:{
            modal1:false
          },
           value1: true,
           selects: {
            simple: '',
            kmbp: [
              {value: '1', label: '1'},
              {value: '2', label: '2'},
              {value: '3', label: '3'},
              {value: '4', label: '4'},
              {value: '5', label: '5'}],
            simplekmadd: '',
            kmadd: [
              {value: '1', label: '1'},
              {value: '2', label: '2'},
              {value: '3', label: '3'},
              {value: '4', label: '4'},
              {value: '5', label: '5'}],
            nrosuitcases: '',
            nrosuit: [
              {value: '1', label: '1'},
              {value: '2', label: '2'},
              {value: '3', label: '3'},
              {value: '4', label: '4'},
              {value: '5', label: '5'}],
            nrohand: '',
            nrohan: [
              {value: '1', label: '1'},
              {value: '2', label: '2'},
              {value: '3', label: '3'},
              {value: '4', label: '4'},
              {value: '5', label: '5'}]
          },
       }
    },
  created() {
    this.setActiveItem("services");
  },
  methods: {
    ...mapMutations(["setActiveItem"])
  },
  components: {
      [Checkbox.name]: Checkbox,
      [Switch.name]: Switch,
      [Card.name]: Card,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
};
</script>
<style lang="scss">
</style>
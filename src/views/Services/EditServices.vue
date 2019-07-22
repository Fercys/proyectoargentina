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
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="mb-0">Service of branch NameBranch-NameSupplier</h3>
        </div>
        <div class="card-body">
         <!-- <div class="d-inline-flex">
                <p class="mb-0 mr-4 es-title-sections">Standard Class Car</p>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-dark px-4">Enabled</button>
                  <button type="button" class="btn btn-secondary px-4">Disable</button>
                </div>
          </div> -->
          <div class="row">
            <div class="col-md">
                <div class="row">
                  <div class="col-md-4">
                     <base-input v-model.trim="use" label="Base Price:" placeholder="Base Price"/>
                  </div>
                  <div class="col-md-4">
                    <label>Km included in Base Price:</label><br>
                      <el-select class="select-danger"
                        placeholder="0"
                        v-model="selects.simple">
                        <el-option v-for="option in selects.kmbp"
                            class="select-danger"
                            :value="option.value"
                            :label="option.label"
                            :key="option.label">
                        </el-option>
                     </el-select>
                  </div>
                  <div class="col-md-4">
                      <label>Additional km fee:</label><br>
                      <el-select class="select-danger"
                        placeholder="0"
                        v-model="selects.simplekmadd">
                        <el-option v-for="option in selects.kmadd"
                            class="select-danger"
                            :value="option.value"
                            :label="option.label"
                            :key="option.label">
                        </el-option>
                     </el-select>
                  </div>
                </div>
                <div class="row">
                   <div class="col-md-4">
                     <base-input label="Meet and greet fee:" placeholder="Meet and greet fee"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                     <base-input label="No. Seats amount:" placeholder="No. Seats amount"/>
                  </div>
                  <div class="col-md-4">
                     <label>No. Suitcases:</label><br>
                      <el-select class="select-danger"
                        placeholder="0"
                        v-model="selects.nrosuitcases">
                        <el-option v-for="option in selects.nrosuit"
                            class="select-danger"
                            :value="option.value"
                            :label="option.label"
                            :key="option.label">
                        </el-option>
                     </el-select>
                  </div>
                  <div class="col-md-4">
                     <label>No. Hand luggages:</label><br>
                      <el-select class="select-danger"
                        placeholder="0"
                        v-model="selects.nrohand">
                        <el-option v-for="option in selects.nrohan"
                            class="select-danger"
                            :value="option.value"
                            :label="option.label"
                            :key="option.label">
                        </el-option>
                     </el-select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2">
                      <base-checkbox  v-model="checkboxes.leather">
                          Leather seats
                      </base-checkbox>
                  </div>
                  <div class="col-md-2">
                      <base-checkbox  v-model="checkboxes.wifi">
                          Wifi
                      </base-checkbox>
                  </div>
                  <div class="col-md-2">
                      <base-checkbox  v-model="checkboxes.water">
                          Water
                      </base-checkbox>
                  </div>
                  <div class="col-md-3 mb-4">
                      <base-checkbox  v-model="checkboxes.newspapers">
                          Newspapers / Magazines
                      </base-checkbox>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 mb-3">
                      <h3>4-Hours disposition package</h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                     <base-input label="Price:" placeholder="Price"/>
                  </div>
                  <div class="col-md-4">
                    <base-input label="Extra hour Price:" placeholder="Extra hour Price"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 mb-3">
                      <h3>8-Hours disposition package</h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                     <base-input label="Price:" placeholder="Price"/>
                  </div>
                  <div class="col-md-4">
                    <base-input label="Extra hour Price:" placeholder="Extra hour Price"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 mb-3">
                      <h3>12-Hours disposition package</h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                     <base-input label="Price:" placeholder="Price"/>
                  </div>
                  <div class="col-md-4">
                    <base-input label="Extra hour Price:" placeholder="Extra hour Price"/>
                  </div>
                </div>
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
export default {
  name: "EditServices",
   data(){
        return {
         checkboxes: {
            leather: false,
            wifi: false,
            water: false,
            newspapers: false
          },
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
  components: {}
};
</script>
<style lang="scss">
</style>
<template>
  <section>
    <base-header class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 d-inline-block mb-0">{{$route.name}}</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb />
          </nav>
        </div>
        <div class="col-lg-6 col-5 text-right">
          <base-button
            @click="$router.push(`/supplier/${$route.query.supplier}/branchs`)"
            size="sm"
            type="neutral"
            v-if="$route.query.supplier !== undefined"
          >Back</base-button>
          <base-button @click="$router.push('/branchs')" size="sm" type="neutral" v-else>Back</base-button>
          <base-button size="sm" type="primary" @click="newBranch()">Save Branch</base-button>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="mb-0">New Branch</h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md">
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.branch.name.$model"
                    label="Name:"
                    placeholder="name"
                    :error="(!$v.branch.name.minLength)?`Name must have at least ${$v.branch.name.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <label class="form-control-label">Country:</label>
                  <br />
                  <el-select
                    class="select-danger"
                    filterable
                    remote
                    reserve-keyword
                    :remote-method="remoteMethod"
                    :loading="loading"
                    placeholder="Please enter a keyword"
                    v-model="$v.branch.country.$model"
                    style="width:100%"
                  >
                    <el-option
                      v-for="country in options"
                      class="select-danger"
                      :value="country.name"
                      :label="country.name"
                      :key="country.name"
                    ></el-option>
                  </el-select>
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.branch.state.$model"
                    label="State / Province:"
                    placeholder="Santa Fe"
                    :error="(!$v.branch.state.minLength)?`State/Province must have at least ${$v.branch.state.$params.minLength.min} letters.`:''"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.branch.city.$model"
                    label="City:"
                    placeholder="Rosario"
                    :error="(!$v.branch.city.minLength)?`City must have at least ${$v.branch.city.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.branch.address.$model"
                    label="Address:"
                    placeholder="Venezuela, bolivar, bolivar, heres, 8000"
                    :error="(!$v.branch.address.minLength)?`Address must have at least ${$v.branch.address.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.branch.address_tow.$model"
                    label="Address 2:"
                    placeholder="Venezuela, bolivar, bolivar, heres, 8000"
                    :error="(!$v.branch.address_tow.minLength)?`Address must have at least ${$v.branch.address_tow.$params.minLength.min} letters.`:''"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.branch.zip_code.$model"
                    label="Zip Code:"
                    placeholder="77500"
                    :error="(!$v.branch.zip_code.minLength)?`Zip code must have at least ${$v.branch.zip_code.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.branch.first_name.$model"
                    label="First Name:"
                    placeholder="First Name"
                    :error="(!$v.branch.first_name.minLength)?`First Name must have at least ${$v.branch.first_name.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.branch.last_name.$model"
                    label="Last Name:"
                    placeholder="Last Name"
                    :error="(!$v.branch.last_name.minLength)?`Last Name must have at least ${$v.branch.last_name.$params.minLength.min} letters.`:''"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.branch.email.$model"
                    label="Email:"
                    placeholder="Email"
                    :error="(!$v.branch.email.email)?`Please provide a valid email address.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.branch.phone.$model"
                    label="Phone Number:"
                    placeholder="5475978952"
                    :error="(!$v.branch.phone.minLength)?`Phone Number must have at least ${$v.branch.phone.$params.minLength.min} numbers.`:''"
                  >
                    <template slot="prepend">
                      <img
                        :src="flag"
                        v-if="flag !== ''"
                        alt="flag"
                        class="es-img-input-phone mr-1"
                      />
                      {{phone_code}}
                    </template>
                  </base-input>
                </div>
                <div class="col-md-4">
                  <label class="form-control-label">Supplier:</label>
                  <br />
                  <el-select
                    class="select-danger"
                    placeholder="Select Supplier"
                    v-model="$v.branch.supplier.$model"
                    style="width:100%"
                  >
                    <el-option
                      v-for="supplier in supplierSelections"
                      class="select-danger"
                      :value="supplier._id"
                      :label="supplier.name"
                      :key="supplier._id"
                    ></el-option>
                  </el-select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <label class="form-control-label">Hours advance booking:</label>
                  <br />
                  <el-select
                    class="select-danger"
                    placeholder="Select hours"
                    v-model="$v.branch.hours_advance_booking.$model"
                    style="width:100%"
                  >
                    <el-option
                      v-for="option in selects_hours"
                      class="select-danger"
                      :value="option"
                      :label="option"
                      :key="option"
                    ></el-option>
                  </el-select>
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
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
  alpha
} from "vuelidate/lib/validators";
import service from "../../commons/services/branchs";
export default {
  name: "NewBranchs",
  data() {
    return {
      branch: {
        name: "",
        address: "",
        address_tow: "",
        country: "",
        city: "",
        state: "",
        zip_code: "",
        email: "",
        last_name: "",
        first_name: "",
        phone: "",
        hours_advance_booking: "",
        supplier: ""
      },
      loading: false,
      options: [],
      phone_code: "+00",
      flag: "",
      selects_hours: [2, 4, 6, 8, 10]
    };
  },
  created() {
    if (this.$route.query.supplier) {
      this.branch.supplier = this.$route.query.supplier;
    }
  },
  watch: {
    "branch.country": function(newVal, oldVal) {
      let index = this.countries.map(country => country.name).indexOf(newVal);
      if (index >= 0) {
        this.phone_code = this.countries[index].phone_code;
        this.flag = this.countries[index].flag;
      } else {
        this.phone_code = "+00";
        this.flag = "";
      }
    }
  },
  methods: {
    newBranch() {
      let body = this.branch;
      if (!this.$v.$invalid) {
        service.branchs.newBranch(body).then(response => {
          if (response.data.code === 201) {
            this.$router.push("/branchs");
          } else {
          }
        });
      } else {
      }
    },
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.countries.filter(country => {
            return country.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
    ...mapMutations(["setActiveItem"])
  },
  computed: {
    ...mapGetters(["supplierSelections", "countries"])
  },
  validations: {
    branch: {
      name: {
        required,
        minLength: minLength(4)
      },
      address: {
        required,
        minLength: minLength(8)
      },
      address_tow: {
        required,
        minLength: minLength(8)
      },
      country: {
        required,
        minLength: minLength(3)
      },
      city: {
        required,
        minLength: minLength(3)
      },
      state: {
        required,
        minLength: minLength(3)
      },
      zip_code: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
      last_name: {
        required,
        minLength: minLength(3)
      },
      first_name: {
        required,
        minLength: minLength(3)
      },
      phone: {
        required,
        minLength: minLength(7)
      },
      hours_advance_booking: {
        required
      },
      supplier: {
        required,
        minLength: minLength(4)
      }
    }
  },
  components: {}
};
</script>
<style lang="scss">
</style>
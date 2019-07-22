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
            @click="$router.push(`/company/${$route.query.company}/suppliers`)"
            size="sm"
            type="neutral"
            v-if="$route.query.company !== undefined"
          >Back</base-button>
          <base-button @click="$router.push('/suppliers')" size="sm" type="neutral" v-else>Back</base-button>
          <base-button
            size="sm"
            type="primary"
            @click="editSupplier($route.params.id)"
          >Save Supplier</base-button>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="mb-0">Edit Supplier</h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md">
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.supplier.name.$model"
                    label="Name:"
                    placeholder="Europe Shuttle"
                    :error="(!$v.supplier.name.minLength)?`Name must have at least ${$v.supplier.name.$params.minLength.min} letters.`:''"
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
                    v-model="$v.supplier.country.$model"
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
                    v-model.trim="$v.supplier.state.$model"
                    label="State / Province:"
                    placeholder="Santa Fe"
                    :error="(!$v.supplier.state.minLength)?`State/Province must have at least ${$v.supplier.state.$params.minLength.min} letters.`:''"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.supplier.city.$model"
                    label="City:"
                    placeholder="Rosario"
                    :error="(!$v.supplier.city.minLength)?`City must have at least ${$v.supplier.city.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.supplier.address.$model"
                    label="Address:"
                    placeholder="Venezuela, bolivar, bolivar, heres, 8000"
                    :error="(!$v.supplier.address.minLength)?`Address must have at least ${$v.supplier.address.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.supplier.address_tow.$model"
                    label="Address 2:"
                    placeholder="Venezuela, bolivar, bolivar, heres, 8000"
                    :error="(!$v.supplier.address_tow.minLength)?`Address must have at least ${$v.supplier.address_tow.$params.minLength.min} letters.`:''"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.supplier.zip_code.$model"
                    label="Zip Code:"
                    placeholder="77500"
                    :error="(!$v.supplier.zip_code.minLength)?`Zip code must have at least ${$v.supplier.zip_code.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.supplier.email.$model"
                    label="Email:"
                    placeholder="example@europeshuttle.com"
                    :error="(!$v.supplier.email.email)?`Please provide a valid email address.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.supplier.phone.$model"
                    label="Phone Number:"
                    placeholder="58424597852"
                    :error="(!$v.supplier.phone.minLength)?`Phone Number must have at least ${$v.supplier.phone.$params.minLength.min} numbers.`:''"
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
              </div>
              <div class="row mb-3">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.supplier.optional_phone.$model"
                    placeholder="58424597852"
                    :error="(!$v.supplier.optional_phone.minLength)?`Phone Number must have at least ${$v.supplier.optional_phone.$params.minLength.min} numbers.`:''"
                    label="Optional Phone:"
                  />
                </div>
                <div class="col-md-4">
                  <label class="form-control-label">Company:</label>
                  <br />
                  <el-select
                    class="select-danger"
                    v-model="$v.supplier.company.$model"
                    placeholder="Company"
                    style="width:100%"
                  >
                    <el-option
                      v-for="company in companySelections"
                      class="select-danger"
                      :value="company._id"
                      :label="company.name"
                      :key="company._id"
                    ></el-option>
                  </el-select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 mb-2">
                  <h3>Admin Account:</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.supplier.account_username.$model"
                    label="Username:"
                    placeholder="supplier123"
                    :error="(!$v.supplier.account_username.minLength)?`User Name must have at least ${$v.supplier.account_username.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.supplier.account_first_name.$model"
                    label="First Name:"
                    placeholder="John"
                    :error="(!$v.supplier.account_first_name.minLength)?`First Name must have at least ${$v.supplier.account_first_name.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.supplier.account_last_name.$model"
                    label="Last Name:"
                    placeholder="Doe"
                    :error="(!$v.supplier.account_last_name.minLength)?`Last Name must have at least ${$v.supplier.account_last_name.$params.minLength.min} letters.`:''"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.supplier.account_email.$model"
                    label="Email:"
                    placeholder="example@europeshuttle.com"
                    :error="(!$v.supplier.account_email.email)?`Please provide a valid email address.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.password.$model"
                    label="Password:"
                    placeholder="Password"
                    type="password"
                    :error="(!$v.password.minLength)?`Minimum length is ${$v.password.$params.minLength.min} characters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.repeatPassword.$model"
                    label="Confirm Password:"
                    placeholder="Confirm Password"
                    type="password"
                    :error="(!$v.repeatPassword.sameAsPassword)?`Passwords must be identical.`:''"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.supplier.account_phone.$model"
                    label="Phone Number:"
                    placeholder="58424597852"
                    :error="(!$v.supplier.account_phone.minLength)?`Phone Number must have at least ${$v.supplier.account_phone.$params.minLength.min} numbers.`:''"
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
// @ is an alias to /src
import services from "../../commons/services/suppliers";
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
  alpha
} from "vuelidate/lib/validators";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "EditSupplier",
  data() {
    return {
      supplier: {
        address: "",
        address_tow: "",
        country: "",
        city: "",
        state: "",
        zip_code: "",
        name: "",
        phone: "",
        optional_phone: "",
        email: "",
        company: "",
        account_username: "",
        account_first_name: "",
        account_last_name: "",
        account_email: "",
        account_phone: ""
      },
      password: "",
      repeatPassword: "",
      loading: false,
      options: [],
      flag: "",
      phone_code: "+00"
    };
  },
  created() {
    this.getSupplier(this.$route.params.id);
  },
  watch: {
    "supplier.country": function(newVal, oldVal) {
      let index = this.countries.map(country => country.name).indexOf(newVal);
      if (index >= 0) {
        this.phone_code = this.countries[index].phone_code;
        this.flag = this.countries[index].flag;
      } else {
        this.flag = "";
        this.phone_code = "+00";
      }
    }
  },
  methods: {
    getSupplier(_id) {
      services.suppliers.getOneSupplier(_id).then(response => {
        if (response.data.code === 200) {
          let data = response.data.data;
          this.supplier.name = data.name;
          this.supplier.email = data.email;
          this.supplier.address = data.address;

          this.supplier.address_tow = data.address_tow;
          this.supplier.country = data.country;
          console.log(this.supplier.country);
          this.supplier.state = data.state;
          this.supplier.city = data.city;
          this.supplier.zip_code = data.zip_code;

          this.supplier.phone = data.phone;
          this.supplier.company = data.company;
          this.supplier.optional_phone = data.optional_phone;

          this.supplier.account_username = data.account_username;
          this.supplier.account_first_name = data.account_first_name;
          this.supplier.account_last_name = data.account_last_name;
          this.supplier.account_email = data.account_email;
          this.supplier.account_phone = data.account_phone;
        }
      });
    },
    editSupplier(_id) {
      let body = this.supplier;
      if (!this.$v.supplier.$invalid) {
        if (!this.$v.password.$invalid && !this.$v.repeatPassword.$invalid) {
          body["account_password"] = this.password;
        }
        services.suppliers
          .updateSupplier(_id, body)
          .then(response => {
            if (response.data.data !== null) {
              if (this.$route.query.company) {
                this.$router.push(
                  `/company/${this.$route.query.company}/suppliers`
                );
              } else {
                this.$router.push("/suppliers");
              }
            } else {
            }
          })
          .catch(err => {});
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
    }
  },
  validations: {
    supplier: {
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
      phone: {
        required,
        minLength: minLength(7)
      },
      email: {
        required,
        email
      },
      optional_phone: {
        required,
        minLength: minLength(7)
      },
      company: {
        required,
        minLength: minLength(3)
      },
      account_username: {
        required,
        minLength: minLength(3)
      },
      account_first_name: {
        required,
        minLength: minLength(3)
      },
      account_last_name: {
        required,
        minLength: minLength(3)
      },
      account_phone: {
        required,
        minLength: minLength(7)
      },
      account_email: {
        required,
        email
      }
    },
    password: {
      required,
      minLength: minLength(8)
    },
    repeatPassword: {
      sameAsPassword: sameAs("password")
    }
  },
  computed: {
    ...mapGetters(["companySelections", "countries"])
  }
};
</script>
<style lang="scss">
</style>
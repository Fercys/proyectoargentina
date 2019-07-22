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
          <base-button @click="$router.push('/companies')" size="sm" type="neutral">Back</base-button>
          <base-button @click="newCompany()" size="sm" type="primary">Save Company</base-button>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="mb-0">New Company</h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md">
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.company.name.$model"
                    label="Company Name:"
                    placeholder="Europe Shuttle"
                    :error="(!$v.company.name.minLength)?`Name must have at least ${$v.company.name.$params.minLength.min} letters.`:''"
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
                    v-model="$v.company.country.$model"
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
                    v-model.trim="$v.company.state.$model"
                    label="State / Province:"
                    placeholder="Santa Fe"
                    :error="(!$v.company.state.minLength)?`State/Province must have at least ${$v.company.state.$params.minLength.min} letters.`:''"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.company.city.$model"
                    label="City:"
                    placeholder="Rosario"
                    :error="(!$v.company.city.minLength)?`City must have at least ${$v.company.city.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.company.address.$model"
                    label="Address:"
                    placeholder="Venezuela, bolivar, bolivar, heres, 8000"
                    :error="(!$v.company.address.minLength)?`Address must have at least ${$v.company.address.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.company.address_tow.$model"
                    label="Address 2:"
                    placeholder="Venezuela, bolivar, bolivar, heres, 8000"
                    :error="(!$v.company.address_tow.minLength)?`Address must have at least ${$v.company.address_tow.$params.minLength.min} letters.`:''"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.company.zip_code.$model"
                    label="Zip Code:"
                    placeholder="77500"
                    :error="(!$v.company.zip_code.minLength)?`Zip code must have at least ${$v.company.zip_code.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.company.email.$model"
                    label="Email:"
                    placeholder="example@europeshuttle.com"
                    :error="(!$v.company.email.email)?`Please provide a valid email address.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.company.phone.$model"
                    label="Phone Number:"
                    placeholder="58424597852"
                    :error="(!$v.company.phone.minLength)?`Phone Number must have at least ${$v.company.phone.$params.minLength.min} numbers.`:''"
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
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.company.vat_number.$model"
                    label="VAT Number:"
                    placeholder="VAT Number"
                    :error="(!$v.company.vat_number.minLength)?`VAT Number must have at least ${$v.company.vat_number.$params.minLength.min} letters.`:''"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <h3>Admin Account:</h3>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.company.account_username.$model"
                    label="Username:"
                    placeholder="supplier123"
                    :error="(!$v.company.account_username.minLength)?`User Name must have at least ${$v.company.account_username.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.company.account_first_name.$model"
                    label="First Name:"
                    placeholder="John"
                    :error="(!$v.company.account_first_name.minLength)?`First Name must have at least ${$v.company.account_first_name.$params.minLength.min} letters.`:''"
                  />
                </div>
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.company.account_last_name.$model"
                    label="Last Name:"
                    placeholder="Doe"
                    :error="(!$v.company.account_last_name.minLength)?`Last Name must have at least ${$v.company.account_last_name.$params.minLength.min} letters.`:''"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <base-input
                    v-model.trim="$v.company.account_email.$model"
                    label="Email:"
                    placeholder="example@europeshuttle.com"
                    :error="(!$v.company.account_email.email)?`Please provide a valid email address.`:''"
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
                    v-model.trim="$v.company.account_phone.$model"
                    label="Phone Number:"
                    placeholder="58424597852"
                    :error="(!$v.company.account_phone.minLength)?`Phone Number must have at least ${$v.company.account_phone.$params.minLength.min} numbers.`:''"
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
import { mapMutations, mapGetters, mapActions } from "vuex";
import serviceCompany from "../../commons/services/company";
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
  alpha
} from "vuelidate/lib/validators";
import services from "../../commons/services/company";
export default {
  name: "NewUsers",
  data() {
    return {
      company: {
        name: "",
        address: "",
        address_tow: "",
        country: "",
        city: "",
        state: "",
        zip_code: "",
        phone: "",
        email: "",
        vat_number: "",
        account_username: "",
        account_first_name: "",
        account_last_name: "",
        account_phone: "",
        account_email: ""
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
    this.getCountries();
  },
  watch: {
    "company.country": function(newVal, oldVal) {
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
    newCompany() {
      let body = this.company;
      if (!this.$v.$invalid) {
        body["account_password"] = this.password;
        services.company
          .newCompany(body)
          .then(response => {
            if (response.data.code === 201) {
              this.$router.push("/companies");
            } else {
            }
          })
          .catch(error => {
            console.log(error);
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
    ...mapMutations(["setActiveItem"]),
    ...mapActions(["getCountries"])
  },
  computed: {
    ...mapGetters(["countries"])
  },
  validations: {
    company: {
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
      vat_number: {
        required,
        minLength: minLength(8)
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
  components: {}
};
</script>
<style lang="scss"></style>

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
          <base-button @click="$router.push('/customers')" size="sm" type="neutral">Back</base-button>
          <base-button @click="saveUser()" size="sm" type="primary">Save Customer</base-button>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="mb-0">New Customer</h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md">
                <div class="row">
                  <div class="col-md-4">
                    <base-input v-model.trim="user.first_name" label="First Name:" placeholder="First Name"/>
                  </div>
                  <div class="col-md-4">
                    <base-input  v-model.trim="user.last_name" label="Last Name:" placeholder="Last Name"/>
                  </div>
                  <div class="col-md-4">
                    <base-input v-model.trim="user.email" label="Company:" placeholder="Company"/>
                  </div>
                </div>
                <div class="row">
                   <div class="col-md-4">
                     <base-input  v-model.trim="user.phone" label="Phone Number:" placeholder="Phone Number"/>
                  </div>
                  <div class="col-md-4">
                    <base-input  v-model.trim="user.last_name" label="Goverment ID:" placeholder="Goverment ID"/>
                  </div>
                  <div class="col-md-4">
                    <label class="form-control-label">Gender</label> <br>
                    <el-select class="select-danger"
                      placeholder="Gender"
                      v-model="selects.simple">
                    <el-option v-for="option in selects.languages"
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
                    <base-input  v-model.trim="user.email_two" label="Date of Birth:" placeholder="Date of Birth"/>
                  </div>                  
                  <div class="col-md-4">
                     <base-input v-model.trim="user.last_name" label="Country:" placeholder="Country"/>
                  </div>
                  <div class="col-md-4">
                    <base-input label="Street:" placeholder="Street"/>
                  </div>
                </div>
                <div class="row">                                    
                  <div class="col-md-4">
                    <base-input label="City:" placeholder="City"/>
                  </div>
                  <div class="col-md-4">
                     <base-input label="State:" placeholder="State"/>
                  </div>
                  <div class="col-md-4">
                    <base-input label="Zipcode:" placeholder="Zipcode" v-model.trim="user.zipcode" type="text"/>
                  </div>
                </div>
                <div class="row">
                  
                  <div class="col-md-4">
                     <base-input v-model.trim="user.last_name" label="Email Address:" placeholder="Email Address"/>
                  </div>
                  <div class="col-md-4">
                    <base-input  v-model.trim="user.password" label="Password:" placeholder="Password" type="password"/>
                  </div>
                  <div class="col-md-4">
                    <base-input v-model.trim="repeatPassword" label="Password Confirm:" placeholder="Password Confirm" type="password"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <base-input label="Notes:" placeholder="Notes"/>
                  </div>
                </div>
                <div class="row">
                      <div class="col-md-2">
                          <base-checkbox  v-model="checkboxes.leather">
                              VIP
                          </base-checkbox>
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
import { mapMutations } from "vuex";
const {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
  alpha
} = require("vuelidate/lib/validators");
import services from "../../commons/services/users";
export default {
  name: "NewUsers",
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email_two: "",
        email: "",
        password: "",
        address: "",
        postal_code: "",
        phone: "",
        optional_phone: "",
        optional_phone_two: "",
        country: "",
        company: "",
        type_user: "",
        notes: "",
        town: "",
        secondary_notes: "",
        device_id: "",
        family_name: ""
      },
      repeatPassword: "",
      selects: {
            simple: '',
            languages: [
              {value: 'Male', label: 'Male'},
              {value: 'Female', label: 'Female'}],
              simpleAddress: '',
            address: [
              {value: 'Street', label: 'Street'},
              {value: 'City', label: 'City'},
              {value: 'State', label: 'State'},
              {value: 'Zipcode', label: 'Zipcode'},
              {value: 'Country', label: 'Country'}]
          },
      checkboxes: {
            leather: false,
            wifi: false,
            water: false,
            newspapers: false
          },
    };
  },
  created() {
    this.setActiveItem("users");
  },
  methods: {
    saveUser() {
      services.users.newUser(this.user).then((response)=>{
        console.log(response);
      }).catch((error)=>{
        console.log(error);
      })
    },
    ...mapMutations(["setActiveItem"])
  },
  validations: {
    user: {
      first_name: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(45)
      },
      last_name: {
        minLength: minLength(5),
        maxLength: maxLength(45)
      },
      email: {
        required,
        email
      },
      email_two: {
        email
      },
      password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(45)
      },
      address: {
        maxLength: maxLength(45)
      },
      postal_code: {
        maxLength: maxLength(45)
      },
      phone: {
        minLength: minLength(7),
        maxLength: maxLength(15)
      },
      optional_phone: {
        minLength: minLength(7),
        maxLength: maxLength(15)
      },
      optional_phone_two: {
        minLength: minLength(7),
        maxLength: maxLength(15)
      },
      country: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(45)
      },
      company: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(45)
      },
      type_user: {
        required,
        alpha
      },
      device_id: {
        minLength: minLength(5),
        maxLength: maxLength(45)
      },
      family_name: {
        minLength: minLength(5),
        maxLength: maxLength(45)
      },
      notes: {
        maxLength: maxLength(45)
      },
      town: {
        maxLength: maxLength(45)
      },
      secondary_notes: {
        maxLength: maxLength(45)
      }
    },
    repeatPassword: {
      sameAsPassword: sameAs("user.password")
    }
  },
  components: {}
};
</script>
<style lang="scss"></style>

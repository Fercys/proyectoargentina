<template>
  <div>
    <!-- Header -->

    <nav class="navbar bg-gradient-success  navbar-horizontal navbar-main navbar-transparent navbar-expand-lg">
        <div class="container">
            <div class="navbar-wrapper">
                <router-link to="/" class="navbar-brand active">
                    <img src="@/assets/images/es-logo-white.svg">
                </router-link>
            </div>
            <button type="button" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler collapsed">    <span class="navbar-toggler-bar navbar-kebab"></span>
                <span class="navbar-toggler-bar navbar-kebab"></span>
                <span class="navbar-toggler-bar navbar-kebab"></span>
            </button>
            <button class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
                <div class="navbar-collapse navbar-custom-collapse collapse show justify-content-end" style="display: none;">
                    
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item"><router-link to="/login" class="nav-link router-link-exact-active active"><span class="nav-link-inner--text">Login</span></router-link></li>
                        <li class="nav-item"><router-link to="/register" class="nav-link"><span class="nav-link-inner--text">Register</span></router-link></li>
                    </ul>
                    
                    <hr class="d-lg-none">
                    <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                        <li class="nav-item"><a href="/" target="_blank" data-toggle="tooltip" data-original-title="Like us on Facebook" class="nav-link nav-link-icon"><i class="fab fa-facebook-square"></i><span class="nav-link-inner--text d-lg-none">Facebook</span></a></li>
                        <li class="nav-item"><a href="/" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Instagram" class="nav-link nav-link-icon"><i class="fab fa-instagram"></i><span class="nav-link-inner--text d-lg-none">Instagram</span></a></li>
                        <li class="nav-item"><a href="/" target="_blank" data-toggle="tooltip" data-original-title="Follow us on Twitter" class="nav-link nav-link-icon"><i class="fab fa-twitter-square"></i><span class="nav-link-inner--text d-lg-none">Twitter</span></a></li><li class="nav-item"><a href="https://github.com/creativetimofficial" target="_blank" data-toggle="tooltip" data-original-title="Star us on Github" class="nav-link nav-link-icon"><i class="fab fa-github"></i><span class="nav-link-inner--text d-lg-none">Github</span></a></li>
                        
                    </ul>
                </div>
          </div>
    </nav>

    <div class="main-content">
      <div class="header py-7 py-lg-8 pt-lg-9">
        <div class="container">
          <div class="header-body text-center mb-5">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                <h1 class="text-orange">Welcome!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Page content -->
      <div class="container mt--8 pb-5">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-7">
            <div class="card bg-gradient-success border-0 mb-0">
              <div class="card-header bg-transparent pb-5">
                <div class="text-muted text-center mt-2 mb-3 text-white"><small>Sign in with</small></div>
                
              </div>
              <div class="card-body px-lg-5 py-lg-5">
                
                <form role="form">
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-email-83"
                              placeholder="Email"
                              v-model="data.email">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-lock-circle-open"
                              type="password"
                              placeholder="Password"
                              v-model="data.password">
                  </base-input>

                  <base-checkbox class="text-white">Remember me</base-checkbox>
                  <div class="text-center">
                    <base-button type="primary" class="my-4" @click="login">Sign in</base-button>
                  </div>
                </form>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-6">
                <router-link to="/dashboard" class="text-orange"><small>Forgot password?</small></router-link>
              </div>
              <div class="col-6 text-right">
                <router-link to="/register" class="text-orange"><small>Create new account</small></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  </div>
</template>
<script>
  import serviceLogin from "../../commons/services/login";
  import { mapGetters, mapActions, mapMutations } from "vuex";
  export default {
    data() {
      return {
        data: {
          email: '',
          password: '',
        }
      };
    },
    created(){

    },
    methods:{
      login(){
        console.log(this.data)
        serviceLogin.signin.login(this.data).then((response)=>{
          if (response.data.status) {
            localStorage.setItem("es-login", JSON.stringify(response.data))
            this.setSesion(response.data)
            console.log(response.data) 
            this.$router.push('/dashboard')
          } else {
            console.log("Datos incorrectos") 
          }
        })
      },
      ...mapMutations(["setSesion"])
    },
    computed:{
      ...mapGetters(["sesion"])
    }
  };
</script>

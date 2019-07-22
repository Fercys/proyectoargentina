<template>
  <div>
    <!-- Header -->
    
     <nav class="navbar navbar-horizontal navbar-main navbar-transparent navbar-expand-lg">
        <div class="container">
            <div class="navbar-wrapper">
                <a href="#/" class="navbar-brand active">
                    <img src="img/brand/white.png">
                </a>
            </div>
            <button type="button" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler collapsed">    <span class="navbar-toggler-bar navbar-kebab"></span>
                <span class="navbar-toggler-bar navbar-kebab"></span>
                <span class="navbar-toggler-bar navbar-kebab"></span>
            </button>
            <button class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
                <div class="navbar-collapse navbar-custom-collapse collapse show justify-content-end" style="display: none;">
                    <div class="navbar-collapse-header">
                        <div class="row">
                            <div class="col-6 collapse-brand">
                                <a href="#/" class="active">
                                    <img src="img/brand/green.png">
                                </a>
                            </div>
                            <div class="col-6 collapse-close">
                                <button type="button" class="navbar-toggler"></button>
                            </div>
                        </div>
                    </div>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item"><a href="/login" class="nav-link router-link-exact-active active"><span class="nav-link-inner--text">Login</span></a></li>
                        <li class="nav-item"><a href="/register" class="nav-link"><span class="nav-link-inner--text">Register</span></a></li>
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

    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
              <h1 class="text-white">Create an account</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--8 pb-5">
      <!-- Table -->
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div class="card bg-secondary border-0">
            <div class="card-header bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-4"><small>Sign up with</small></div>
            </div>
            <div class="card-body px-lg-5 py-lg-5">
              <form role="form">
                <base-input alternative
                            class="mb-3"
                            prepend-icon="ni ni-hat-3"
                            placeholder="Name"
                            v-model="model.name">
                </base-input>

                <base-input alternative
                            class="mb-3"
                            prepend-icon="ni ni-email-83"
                            placeholder="Email"
                            v-model="model.email">
                </base-input>

                <base-input alternative
                            class="mb-3"
                            prepend-icon="ni ni-lock-circle-open"
                            placeholder="password"
                            type="password"
                            v-model="model.email">
                </base-input>
                <div class="text-muted font-italic"><small>password strength: <span class="text-success font-weight-700">strong</span></small></div>
                <div class="row my-4">
                  <div class="col-12">
                    <base-checkbox v-model="model.agree">
                      <span class="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                    </base-checkbox>
                  </div>
                </div>
                <div class="text-center">
                  <button type="button" class="btn btn-primary mt-4" @click="$router.push('/dashboard')">Create account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'register',
  data() {
    return {
      model: {
        name: '',
        email: '',
        password: '',
        agree: false
      }
    }
  }
};
</script>
<style></style>

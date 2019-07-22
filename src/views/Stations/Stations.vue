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
          <base-button @click="$router.push('/dashboard')" size="sm" type="neutral">Back</base-button>
          <base-button @click="$router.push('/new-station')" size="sm" type="primary">New Station</base-button>
        </div>
      </div>
    </base-header>
     <div class="container-fluid mt--6">
      <div class="card">
        <div class="card-header">
          <h3 class="mb-0">Stations</h3>
        </div>
        <div class="card-body">
          <div class="row">
              <div class="col-md-4">
              <base-input  label="Search:" placeholder="Search"/>
              </div>
          </div>
          <div class="row">
            <div class="col-md">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Abbreviation</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
               <!-- <tr v-for="n in 10" :key="n">
                  <td class="align-middle">Unknown Company Name</td>
                  <td class="align-middle">2019-05-03 10:59:20</td>
                  <td class="align-middle">
                    <button type="button" class="btn btn-light es-btn-action" @click="$router.push('/edit-station')">
                      <img src="@/assets/images/icon-edit.svg" alt>
                    </button>
                  </td>
                </tr> -->
                </tbody>
              </table>
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
  name: "Stations",
  created() {
    this.setActiveItem("stations");
  },
  methods: {
    ...mapMutations(["setActiveItem"])
  },
  components: {}
};
</script>
<style lang="scss">
</style>
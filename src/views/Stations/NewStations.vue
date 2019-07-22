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
          <base-button @click="$router.push('/stations')" size="sm" type="neutral">Back</base-button>
          <base-button size="sm" type="primary">Save Station</base-button>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="mb-0">New Stations</h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md">
                <div class="row">
                  <div class="col-md-6">
                     <base-input v-model.trim="title" label="Name or Title:" placeholder="Title"/>
                  </div>
                  <div class="col-md-6">
                    <base-input v-model.trim="abrbrevation" label="Abbrevation:" placeholder="Abbrevation"/>
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
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "NewStations",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  created() {
    this.setActiveItem("stations");
  },
  methods: {
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    ...mapMutations(["setActiveItem"])
  },
  components: {}
};
</script>
<style lang="scss">
</style>
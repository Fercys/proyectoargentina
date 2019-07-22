<template>
  <section class="container-fluid">
      <div class="row align-items-center mb-4 mt-4">
      <div class="col-md">
        <div class="row align-items-center">
          <div class="col-md">
            <div class="d-inline-flex">
              <button
                type="button"
                class="btn btn-secondary px-3 es-btn-weight"
                @click="$router.push('/stations')"
              >Back</button>
              <p class="mb-0 es-title-sections ml-4">Edit Station</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md text-right">
        <button
          type="button"
          class="btn btn-primary px-3 es-btn-weight"
          @click="$router.push('/new-branchs')"
        >Save Station</button>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md">
        <div class="es-box-sesions">
          <div class="row">
            <div class="col-md-8">
              <div class="form-row">
                <div class="col-md">
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-4 col-form-label es-col-form-label">Name or Title:</label>
                    <div class="col-sm-8">
                      <input type="email" class="form-control" id="inputEmail3">
                    </div>
                  </div>
                </div>
                 <div class="col-md">
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-4 col-form-label es-col-form-label">Abbreviation:</label>
                    <div class="col-sm-8">
                      <input type="email" class="form-control" id="inputEmail3">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <GmapMap
                :center="center"
                :zoom="18"
                map-type-id="terrain"
                style="width: 100%; height: 500px"
              >
                <GmapMarker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  :clickable="true"
                  :draggable="true"
                  @click="center=m.position"
                />
              </GmapMap>
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
  name: "EditStations",
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
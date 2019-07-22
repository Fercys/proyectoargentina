<template>
  <section>
     <div class="row bg-white es-dash-reservation">
      <div class="col-md-8">
         <div class="row">
            <div class="col-md">
              <div class="form-group row">
                <div class="col-sm align-self-start">
                  <input type="email" class="form-control es-custom-input-search" id="inputEmail3" placeholder="">
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="form-group row">
                <label
                  for="exampleFormControlSelect1"
                  class="col-sm-3 col-form-label es-col-form-label"
                >Filter:</label>
                <div class="col-sm-9 align-self-start">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md">
              <div class="form-group row">
                <label
                  for="exampleFormControlSelect1"
                  class="col-sm-3 col-form-label es-col-form-label"
                >Status:</label>
                <div class="col-sm-9 align-self-start">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="col-md text-right">
        <button type="button" class="btn btn-light btn-act ">
        <img src="@/assets/images/actions/icon-download.svg" alt>
        </button>
                <button type="button" class="btn btn-light btn-act ml-2">
        <img src="@/assets/images/actions/icon-upload.svg" alt>
        </button>
                <button type="button" class="btn btn-light btn-act ml-2">
        <img src="@/assets/images/actions/icon-bin.svg" alt>
        </button>
                <button type="button" class="btn btn-light btn-act ml-2">
        <img src="@/assets/images/actions/icon-restart.svg" alt>
        </button>
                <button type="button" class="btn btn-light btn-act ml-2">
        <img src="@/assets/images/actions/icon-save.svg" alt>
        </button>
                <button type="button" class="btn btn-light btn-act bg-primary ml-2">
        <img src="@/assets/images/actions/icon-save-white.svg" alt>
        </button>
      </div>
    </div>
    <div class="row mb-3 mt-3">
        <div class="col-md">
            <p class="mb-0 es-title-sections">Reservations</p>
        </div>
    </div>
    <div class="row">
      <div class="col-md">
        <div class="bg-white">
          <div class="row">
            <div class="col-md">
              <div class="p-3">
                <div class="row">
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >Reservation ID:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >Driver:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >Net price:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >Date:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >No of passengers:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >Gross price:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >Time:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >Main passenger:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >Status:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >Service fo Web:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >Pickup sign:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >Invoice:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >From:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >Flight no:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                  <div class="col-md">
                    <div class="form-group row">
                      <label
                        for="exampleFormControlSelect1"
                        class="col-sm-5 col-form-label es-col-form-label"
                      >Client:</label>
                      <div class="col-sm-7 align-self-start">
                        <input type="email" class="form-control" id="inputEmail3" placeholder>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-8">
                    <div class="row">
                      <div class="col-md">
                        <div class="form-group row">
                          <label
                            for="exampleFormControlSelect1"
                            class="col-sm-5 col-form-label es-col-form-label"
                          >To:</label>
                          <div class="col-sm-7 align-self-start">
                            <input type="email" class="form-control" id="inputEmail3" placeholder>
                          </div>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group row">
                          <label
                            for="exampleFormControlSelect1"
                            class="col-sm-5 col-form-label es-col-form-label"
                          >Email:</label>
                          <div class="col-sm-7 align-self-start">
                            <input type="email" class="form-control" id="inputEmail3" placeholder>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md">
                        <div class="form-group row">
                          <label
                            for="exampleFormControlSelect1"
                            class="col-sm-5 col-form-label es-col-form-label"
                          >Supplier:</label>
                          <div class="col-sm-7 align-self-start">
                            <input type="email" class="form-control" id="inputEmail3" placeholder>
                          </div>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group row">
                          <label
                            for="exampleFormControlSelect1"
                            class="col-sm-5 col-form-label es-col-form-label"
                          >Country code:</label>
                          <div class="col-sm-7 align-self-start">
                            <input type="email" class="form-control" id="inputEmail3" placeholder>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md">
                        <div class="form-group row">
                          <label
                            for="exampleFormControlSelect1"
                            class="col-sm-5 col-form-label es-col-form-label"
                          >Branch:</label>
                          <div class="col-sm-7 align-self-start">
                            <input type="email" class="form-control" id="inputEmail3" placeholder>
                          </div>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group row">
                          <label
                            for="exampleFormControlSelect1"
                            class="col-sm-5 col-form-label es-col-form-label"
                          >Phone:</label>
                          <div class="col-sm-7 align-self-start">
                            <input type="email" class="form-control" id="inputEmail3" placeholder>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md">
                        <div class="form-group row">
                          <label
                            for="exampleFormControlSelect1"
                            class="col-sm-5 col-form-label es-col-form-label"
                          >Service type:</label>
                          <div class="col-sm-7 align-self-start">
                            <input type="email" class="form-control" id="inputEmail3" placeholder>
                          </div>
                        </div>
                      </div>
                      <div class="col-md">
                        <div class="form-group row">
                          <label
                            for="exampleFormControlSelect1"
                            class="col-sm-5 col-form-label es-col-form-label"
                          >Booking source:</label>
                          <div class="col-sm-7 align-self-start">
                            <input type="email" class="form-control" id="inputEmail3" placeholder>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="row">
                      <div class="col-md">
                        <div class="form-group">
                          <label
                            for="exampleFormControlTextarea1"
                            class="es-col-form-label"
                          >Special requirements:</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value id="defaultCheck1">
                          <label
                            class="form-check-label es-col-form-label"
                            for="defaultCheck1"
                          >Children seats required</label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md">
                        <div class="form-group row">
                          <label
                            for="exampleFormControlSelect1"
                            class="col-sm-5 col-form-label es-col-form-label"
                          >Booking reference:</label>
                          <div class="col-sm-7 align-self-start">
                            <input type="email" class="form-control" id="inputEmail3" placeholder>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md">
                        <div class="form-group row">
                          <label
                            for="exampleFormControlSelect1"
                            class="col-sm-5 col-form-label es-col-form-label"
                          >Payment status:</label>
                          <div class="col-sm-7 align-self-start">
                            <input type="email" class="form-control" id="inputEmail3" placeholder>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div class="row">
            <div class="col-md">
              <table class="table es-table-striped table-borderless">
                <thead class="es-thead-light">
                  <tr>
                    <th scope="col">RID</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Supplier at Branch</th>
                    <th scope="col">Client</th>
                    <th scope="col">Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="n in 4" :key="n">
                    <td class="align-middle">YETERE-675</td>
                    <td class="align-middle">Supplier confirmed (SC)</td>
                    <td class="align-middle">07-05-2019</td>
                    <td class="align-middle">07:45</td>
                    <td class="align-middle">Valencia-Traslados Valen</td>
                    <td class="align-middle">INC, VIATOR</td>
                    <td class="align-middle">INV9-10116</td>
                  </tr>
                </tbody>
              </table>
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
  name: "NewReservations",
  data() {
    return {
      select: 1,
      active: 1
    };
  },
  created() {
    this.setActiveItem("reservations");
  },
  methods: {
    ...mapMutations(["setActiveItem"])
  },
  components: {}
};
</script>
<style lang="scss">
.es-dash-reservation{
    margin-top: -1rem;
    border-top-left-radius: 1rem;
    padding-top: 1rem;
}
</style>
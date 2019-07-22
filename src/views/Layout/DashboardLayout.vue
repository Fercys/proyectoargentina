<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot-scope="props" slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboards',
            icon: 'ni ni-shop text-primary',
            path: '/dashboard'
          }"
          v-if="sesion.rol === 'admin' || sesion.rol === 'supplier' || sesion.rol === 'company'"
        ></sidebar-item>

        <sidebar-item
          :link="{
                  name: 'Reservatios',
                  icon: 'ni ni-ungroup text-orange',
                  path: '/reservations'
                  }"
          v-if="sesion.rol === 'admin' || sesion.rol === 'supplier' || sesion.rol === 'company'"
        ></sidebar-item>

        <sidebar-item
          :link="{
                  name: 'Customers',
                  icon: 'ni ni-ui-04 text-info',
                  path: '/customers'
          }"
          v-if="sesion.rol === 'admin'"
        ></sidebar-item>
        <sidebar-item
          :link="{
                        name: 'Company',
                        icon: 'ni ni-map-big text-primary',
                        path: '/companies'
                      }"
          v-if="sesion.rol === 'admin'"
        ></sidebar-item>
        <sidebar-item
          :link="{
            name: 'Suppliers',
            icon: 'ni ni-chart-pie-35 text-info',
            path: '/suppliers'
          }"
          v-if="sesion.rol === 'admin' ||  sesion.rol === 'company'"
        ></sidebar-item>
        <sidebar-item
          :link="{
                        name: 'Branchs',
                        icon: 'ni ni-map-big text-primary',
                        path: '/branchs'
                      }"
                      v-if="sesion.rol === 'admin' || sesion.rol === 'supplier' || sesion.rol === 'company'"
        ></sidebar-item>

        <sidebar-item
          :link="{
                        name: 'Services',
                        icon: 'ni ni-align-left-2 text-default',
                        path: '/services'

                      }"
                      v-if="sesion.rol === 'admin' || sesion.rol === 'supplier' || sesion.rol === 'company'"
        ></sidebar-item>        
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :show="true"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import { FadeTransition } from "vue2-transitions";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
    FadeTransition
  },
  created() {
    this.getCompanies()
    this.getCountries()
    this.getSesion()
    if (this.sesion !== null) {
          if (this.sesion.status) {
            console.log(this.sesion);
          } 
    } else {
      this.$router.push('/login')
    }
  },
  methods: {
    initScrollbar() {
      let docClasses = document.body.classList;
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        // if we are on windows OS we activate the perfectScrollbar function
        initScrollbar("scrollbar-inner");

        docClasses.add("perfect-scrollbar-on");
      } else {
        docClasses.add("perfect-scrollbar-off");
      }
    },
    ...mapActions(['getSesion', 'getCountries', "getCompanies"])
  },
  computed: {
    ...mapGetters(["sesion"])
  }
};
</script>
<style lang="scss">
</style>

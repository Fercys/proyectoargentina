import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from '../store/store';

Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  mode: 'history',
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      let sesion = (localStorage.getItem('es-login') !== null)? JSON.parse(localStorage.getItem('es-login')):{_id:null, status:null, token:null, rol:null};
      if (!sesion.status) {
        next('/login')  
      } else {
        next()   
      }
  }else {
      next() 
  }
})

export default router;

import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import Login from '@/views/Pages/Login.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';
// GeneralViews
import NotFound from '@/views/GeneralViews/NotFoundPage.vue';

// Dashboard pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard/Dashboard.vue');
const Reservations = () => import(/* webpackChunkName: "dashboard" */ '@/views/Reservations/Reservations.vue');

const routes = [
  {
    path: '/',
    component: Login,
    redirect: '/login',
    name: 'home',
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Pages/Login")
      }]
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Pages/Register")

  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    name: 'Dashboard layout',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'reservations',
        name: 'Reservations',
        component: Reservations
      },
      {
        path: '/edit-customer',
        name: 'Edit Customer',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Users/ViewUser")
      },
      {
        path: '/new-reservation',
        name: 'New Reservation',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Reservations/NewReservations")

      },
      {
        path: '/edit-reservation',
        name: 'edit-reservation',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Reservations/EditReservations")
      },
      {
        path: '/customers',
        name: 'Customers',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Users/Users")
      },
      {
        path: '/new-customer',
        name: 'New Customer',
        component: () => import(/* webpackChunkName: "about" */ "@/views/Users/NewUsers"),
        meta: {
          requiresAuth: true
        },
      },
      {
        path: '/stations',
        name: 'Stations',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Stations/Stations")
      },
      {
        path: '/services',
        name: 'Services',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Services/Services")
      },
      {
        path: '/branchs',
        name: 'Branchs',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Branchs/Branchs")
      },
      {
        path: '/suppliers',
        name: 'Suppliers',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Supplier/Supplier")

      },
      {
        path: '/new-supplier',
        name: 'New Supplier',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Supplier/NewSupplier")

      },
      {
        path: '/edit-supplier/:id',
        name: 'Edit Supplier',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Supplier/EditSupplier")
      },
      {
        path: "/supplier/:id/branchs",
        name: 'Branchs of Supplier',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Branchs/BranchOfSupplier")
      },
      {
        path: '/companies',
        name: 'Companies',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Companies/Companies")
      },
      {
        path: '/new-companies',
        name: 'New Companies',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Companies/NewCompanies")
      },
      {
        path: '/edit-company/:id',
        name: 'Edit Company',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Companies/EditCompany")
      },
      {
        path: '/company/:id/suppliers',
        name: 'Company Suppliers',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Companies/CompanyBySuppliers.vue")
      },
      {
        path: '/new-branchs',
        name: 'New Branchs',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Branchs/NewBranchs")
      },
      {
        path: '/edit-branchs/:id',
        name: 'Edit Branchs',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Branchs/EditBranchs")
      },
      {
        path: '/new-station',
        name: 'New Station',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Stations/NewStations")
      },
      {
        path: '/edit-station',
        name: 'edit-station',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Stations/EditStations")
      },
      {
        path: '/edit-service',
        name: 'Edit Service',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Services/EditServices")
      },
      {
        path: '/new-service',
        name: 'New Service',
        meta: {
          requiresAuth: true
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Services/NewService")
      }
    ]
  }
];

export default routes;

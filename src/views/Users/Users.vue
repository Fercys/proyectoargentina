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
          <base-button @click="$router.push('/new-customer')" size="sm" type="primary">New Customer</base-button>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card">
          <div class="border-0 card-header">
              <h3 class="mb-0">Customers</h3>
          </div>
        <div class="card-body">
          <el-table class="table-responsive table-flush"
                  header-row-class-name="thead-light"
                  :data="projects" row-key="title" @selection-change="onSelectionChange">
                  <el-table-column type="selection"
                                    min-width="140px"
                                    sortable>
                  </el-table-column>
                  <el-table-column label="Company Name" 
                                    prop="title"
                                    min-width="180px"
                                    sortable>
                  </el-table-column>
                  <el-table-column label="Admin Name" 
                                    prop="type"
                                    min-width="180px"
                                    sortable>
                  </el-table-column>
                  <el-table-column label="User Amin" 
                                    prop="company"
                                    min-width="180px"
                                    sortable>
                  </el-table-column>
                  <el-table-column label="Phone Number" 
                                    prop="country"
                                    min-width="180px"
                                    sortable>
                  </el-table-column>
                  <el-table-column label="Email" 
                                    prop="country"
                                    min-width="140px"
                                    sortable>
                  </el-table-column>
                  <el-table-column min-width="180px">
                        <template v-slot="{row}">
                            <el-dropdown trigger="click" class="dropdown">
                            <span class="btn btn-sm btn-icon-only text-light">
                              <i class="fas fa-ellipsis-v mt-2"></i>
                            </span>
                                <el-dropdown-menu class="dropdown-menu dropdown-menu-arrow show" slot="dropdown">
                                    <a class="dropdown-item" @click="$router.push('/view-customer')">View</a>
                                    <a class="dropdown-item" href="#">Delete</a>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </template>
                  </el-table-column>
        </el-table>

        <div class="card-footer py-4 d-flex justify-content-end">
            <base-pagination v-model="currentPage" :total="50"></base-pagination>
        </div>



          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapMutations, mapGetters, mapActions } from "vuex";
import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui';
export default {
  name: "Users",
  components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    data() {
      return {
        projects: [
          {
            title: 'Fercys Ramirez',
            type: 'Client',
            company: 'Inversiones CA',
            country: 'Venezuela'
          },
          {
            title: 'Jesus Flores',
            type: 'Client',
            company: 'Inversiones CA',
            country: 'Venezuela'
          },
          {
            title: 'Pablo Palmas',
            type: 'Client',
            company: 'Inversiones CA',
            country: 'Argentina'
          }
        ],
        currentPage: 1,
        selectedRows: []
      };
    },


  created() {
    this.getUsers();
    this.setActiveItem("users");
  },
  methods: {
    ...mapActions(["getUsers"]),
    ...mapMutations(["setActiveItem", "setUsers"]),
    onSelectionChange(selectedRows) {
        this.selectedRows = selectedRows;
        console.log(this.selectedRows);
      }
  },
  computed: {
    ...mapGetters(["users"])
  },
  filters: {
    typeUser: function(type_user) {
      if (type_user === "admin") {
        return "Admin";
      } else if (type_user === "driver") {
        return "Driver";
      } else if (type_user === "suppliers") {
        return "Suppliers";
      } else if (type_user === "client") {
        return "Client";
      } else if (type_user === "ote") {
        return "OTE";
      } else {
        return "Client";
      }
    }
  }
};
</script>
<style lang="scss"></style>

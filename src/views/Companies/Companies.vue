<template>
  <section>
    <base-header class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 d-inline-block mb-0">{{$route.name}}</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb />
          </nav>
        </div>
        <div class="col-lg-6 col-5 text-right">
          <base-button @click="$router.push('/dashboard')" size="sm" type="neutral">Back</base-button>
          <base-button @click="$router.push('/new-companies')" size="sm" type="primary">New Company</base-button>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card">
        <div class="border-0 card-header">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="mb-0">Companies</h3>
            </div>
            <div class="col text-right">
              <base-button size="sm" type="primary" v-if="selectedRows.length > 0">
                  <span class="btn-inner--icon"><i class="fas fa-user-edit"></i></span>
                  <span class="btn-inner--text">Export</span>
              </base-button>
              <base-button size="sm" type="danger" v-if="selectedRows.length > 0">
                <span class="btn-inner--icon"><i class="fas fa-trash"></i></span>
                <span class="btn-inner--text">Delete</span>
              </base-button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <el-table
            class="table-responsive table-flush"
            header-row-class-name="thead-light"
            :data="responseCompany.docs"
            @selection-change="onSelectionChange"
          >
           <el-table-column type="selection"
                                    min-width="100px"
                                    sortable>
            </el-table-column>
            <el-table-column label="name" min-width="200px" prop="name" sortable>
              <template v-slot="{row}">
                <router-link  :to="`/edit-company/${row._id}`">{{row.name}}</router-link>
              </template>
            </el-table-column>
            <el-table-column label="Address" min-width="300px" sortable>
              <template v-slot="{row}">
                <span class>{{row.address}}</span>
              </template>
            </el-table-column>
            <el-table-column label="Phone" prop="completion" min-width="260px" sortable>
              <template v-slot="{row}">
                <span class>{{row.phone}}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="180px" label="action">
              <template v-slot="{row}">
                <el-dropdown trigger="click" class="dropdown">
                  <span class="btn btn-sm btn-icon-only text-light">
                    <i class="fas fa-ellipsis-v mt-2"></i>
                  </span>
                  <el-dropdown-menu class="dropdown-menu dropdown-menu-arrow show" slot="dropdown">
                    <router-link class="dropdown-item text-primary" :to="`/edit-company/${row._id}`">Edit</router-link>
                    <a class="dropdown-item text-primary" href="javascript:;" @click="deleteCompany(row._id)">Delete</a>
                    <router-link
                      class="dropdown-item text-primary"
                      :to="`/company/${row._id}/suppliers`"
                    >Suppliers</router-link>
                  </el-dropdown-menu>
                </el-dropdown>
              </template>
            </el-table-column>
          </el-table>

          <div class="card-footer py-4 d-flex justify-content-end">
            <base-pagination v-model="currentPage" :total="2"></base-pagination>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapMutations, mapGetters, mapActions } from "vuex";
import {
  Table,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from "element-ui";
import serviceCompany from "../../commons/services/company";
export default {
  name: "Users",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu
  },
  data() {
    return {
      currentPage: 1,
      selectedRows: [],
      currentRow: null,
      loading: true
    };
  },

  created() {
    this.getCompanies();
  },
  methods: {
    deleteCompany(_id){
      serviceCompany.company.deleteCompany(_id).then((response)=>{
        if (response.data.data.deleted) {
          this.getCompanies()
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    onSelectionChange(selectedRows) {
      this.selectedRows = selectedRows;
    },
    ...mapActions(["getUsers", "getCompanies"]),
    ...mapMutations(["setActiveItem", "setUsers"])
  },
  computed: {
    ...mapGetters(["users", "responseCompany"])
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

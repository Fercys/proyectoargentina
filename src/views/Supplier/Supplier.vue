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
          <base-button @click="$router.push('/new-supplier')" size="sm" type="primary">New Supplier</base-button>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card">
        <div class="border-0 card-header">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="mb-0">Suppliers</h3>
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
            :data="responseSupplier.docs"
            @selection-change="onSelectionChange"
          >
          <el-table-column type="selection"
                                    min-width="100px"
                                    sortable>
            </el-table-column>
            <el-table-column label="Name" prop="title" min-width="140px" sortable>
               <template v-slot="{row}">
                 <router-link  :to="`/edit-supplier/${row._id}`">{{row.name}}</router-link>
              </template>
            </el-table-column>
            <el-table-column label="Email" min-width="300px" sortable>
               <template v-slot="{row}">
                <span >{{row.email}}</span>
              </template>
            </el-table-column>
            <el-table-column label="address" min-width="350px" sortable>
              <template v-slot="{row}">
                <span >{{row.address}}</span>
              </template>
            </el-table-column>
            <el-table-column label="Phone"  min-width="140px" sortable>
              <template v-slot="{row}">
                <span >{{row.phone}}</span>
              </template>
            </el-table-column>
             <el-table-column min-width="180px" label="action">
              <template v-slot="{row}">
                <el-dropdown trigger="click" class="dropdown">
                  <span class="btn btn-sm btn-icon-only text-light">
                    <i class="fas fa-ellipsis-v mt-2"></i>
                  </span>
                  <el-dropdown-menu class="dropdown-menu dropdown-menu-arrow show" slot="dropdown">
                    <router-link class="dropdown-item text-primary" :to="`/edit-supplier/${row._id}`" >Edit</router-link>
                    <a class="dropdown-item text-primary" href="javascript:;" @click="deleteSupplier(row._id)">Delete</a>
                    <router-link class="dropdown-item text-primary" :to="`/supplier/${row._id}/branchs`">Branchs</router-link>
                  </el-dropdown-menu>
                </el-dropdown>
              </template>
            </el-table-column>
          </el-table>
          <div class="card-footer py-4 d-flex justify-content-end">
            <base-pagination v-model="responseSupplier.page" :total="50"></base-pagination>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions, mapMutations } from "vuex";
import {
  Table,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from "element-ui";
import services from "../../commons/services/suppliers";
export default {
  name: "Supplier",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu
  },
  data() {
    return {
      selectedRows: [],
      currentPage: 1
    };
  },

  created() {
    this.getSuppliers()
    this.getCompaniesSelections()
    this.setActiveItem("supplier");
  },
  methods: {
    onSelectionChange(selectedRows) {
      this.selectedRows = selectedRows;
    },
    deleteSupplier(_id){
      services.suppliers.deleteSupplier(_id).then((response)=>{
        if (response.data.data.deleted) {
          this.getSuppliers()
        }
      })
    },
    ...mapMutations(["setActiveItem"]),
    ...mapActions(['getSuppliers',"getCompaniesSelections"])
  },
  computed:{
    ...mapGetters(['responseSupplier'])
  }
};
</script>
<style lang="scss">
</style>
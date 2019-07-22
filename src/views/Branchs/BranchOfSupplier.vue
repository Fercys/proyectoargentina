<template>
  <section>
    <base-header class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-8 col-8">
          <h6 class="h2 d-inline-block mb-0">{{$route.name}}</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb />
          </nav>
        </div>
        <div class="col-lg-4 col-4 text-right">
          <base-button @click="$router.push('/suppliers')" size="sm" type="neutral">Back</base-button>
          <base-button @click="$router.push(`/new-branchs?supplier=${$route.params.id}`)" size="sm" type="primary">New Branch</base-button>
        </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card">
        <div class="border-0 card-header">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="mb-0">Branchs</h3>
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
            :data="branchsOfSupplier.docs"
            @selection-change="onSelectionChange"
          >
            <el-table-column type="selection" min-width="100px" sortable></el-table-column>
            <el-table-column label="Name" min-width="140px" sortable>
              <template v-slot="{row}">
                <router-link  :to="`/edit-branchs/${row._id}?supplier=${$route.params.id}`">{{row.name}}</router-link>
              </template>
            </el-table-column>
            <el-table-column label="Email" min-width="200px" sortable>
              <template v-slot="{row}">
                <span>{{row.email}}</span>
              </template>
            </el-table-column>
            <el-table-column label="Supplier" min-width="140px" sortable>
              <template v-slot="{row}">
                <span>{{row.supplier.name}}</span>
              </template>
            </el-table-column>
            <el-table-column label="Country" min-width="200px" sortable>
              <template v-slot="{row}">
                <span>{{row.country}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="Hours Advance Booking"
              prop="countrys"
              min-width="250px"
              sortable
            >
              <template v-slot="{row}">
                <span>{{row.hours_advance_booking}}</span>
              </template>
            </el-table-column>
            <el-table-column min-width="180px" label="Actions">
              <template v-slot="{row}">
                <el-dropdown trigger="click" class="dropdown">
                  <span class="btn btn-sm btn-icon-only text-light">
                    <i class="fas fa-ellipsis-v mt-2"></i>
                  </span>
                  <el-dropdown-menu class="dropdown-menu dropdown-menu-arrow show" slot="dropdown">
                    <a
                      class="dropdown-item text-primary"
                      @click="$router.push(`/edit-branchs/${row._id}?supplier=${$route.params.id}`)"
                    >Edit</a>
                    <a class="dropdown-item text-primary" href="javascript:;" @click="deleteBranch(row._id)">Delete</a>
                    <a
                      class="dropdown-item text-primary"
                      @click="$router.push('/services')"
                    >Services</a>
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
import { mapGetters, mapActions, mapMutations } from "vuex";
import service from "../../commons/services/branchs";
import {
  Table,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from "element-ui";
export default {
  name: "BranchsSupplier",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu
  },
  data() {
    return {
      selectedRows:[],
      currentPage: 1
    };
  },

  created() {
    this.setActiveItem("branchs");
    this.getBranchsOfSupplier(this.$route.params.id);
    this.getSupplierSelections();
  },
  methods: {
     deleteBranch(_id){
      service.branchs.deleteBranch(_id).then((response)=>{
        if (response.data.data.deleted) {
          this.getBranchsOfSupplier(this.$route.params.id);
        } else {
          
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    onSelectionChange(selectedRows) {
      this.selectedRows = selectedRows;
    },
    ...mapMutations(["setActiveItem"]),
    ...mapActions(["getBranchsOfSupplier","getSupplierSelections"])
  },
  computed: {
    ...mapGetters(["branchsOfSupplier"])
  }
};
</script>
<style lang="scss">
</style>
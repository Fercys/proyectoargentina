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
          <base-button @click="$router.push('/new-reservation')" size="sm" type="primary">New Reservations</base-button>
        </div>
      </div>
    </base-header>

      <div class="container-fluid mt--6">
      <div class="card">
          <div class="border-0 card-header">
              <h3 class="mb-0">Reservations</h3>
          </div>
        <div class="card-body">
          <el-table class="table-responsive table-flush"
                  header-row-class-name="thead-light"
                  :data="projects" row-key="title" @selection-change="onSelectionChange">
                  <el-table-column  type="selection"
                                    align="left"                                    
                                    min-width="140px"
                                    >
                  </el-table-column>

                  <el-table-column label="RID" 
                                    prop="title"
                                    min-width="140px"
                                    sortable>
                  </el-table-column>
                  <el-table-column label="Status" 
                                    prop="type"
                                    min-width="140px"
                                    sortable>
                  </el-table-column>
                  <el-table-column label="Date" 
                                    prop="company"
                                    min-width="140px"
                                    sortable>
                  </el-table-column>
                  <el-table-column label="Time" 
                                    prop="country"
                                    min-width="140px"
                                    sortable>
                  </el-table-column>
                   <el-table-column label="Supplier at Branch" 
                                    prop="company"
                                    min-width="140px"
                                    sortable>
                  </el-table-column>
                  <el-table-column label="Client" 
                                    prop="country"
                                    min-width="140px"
                                    sortable>
                  </el-table-column>
                  <el-table-column label="Invoice" 
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
                                    <a class="dropdown-item" href="#">Edit</a>
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
import { mapGetters, mapActions, mapMutations } from "vuex";
import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui';
export default {
  name: "Reservations",
  components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },data() {
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
    this.setActiveItem("reservations");
  },
  methods: {
    ...mapMutations(["setActiveItem"]),
    onSelectionChange(selectedRows) {
        this.selectedRows = selectedRows;
        console.log(this.selectedRows);
      }
  }
};
</script>
<style lang="scss">

.btn-act{
  background: #FFFFFF;
  border: 1px solid #E8E8E8;
  box-sizing: border-box;
  border-radius: 1px;
}
</style>
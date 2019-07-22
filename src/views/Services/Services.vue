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
          <base-button @click="$router.push('/branchs')" size="sm" type="neutral">Back</base-button>
          <base-button @click="$router.push('/new-service')" size="sm" type="primary">New Service</base-button>
             </div>
      </div>
    </base-header>
    <div class="container-fluid mt--6">
      <div class="card">
        <div class="card-header">
          <h3 class="mb-0">Services of branch NameBranch-NameSupplier</h3>
        </div>
        <div class="card-body">
          <div class="row">
              <div class="col-md-4">
                <label class="form-control-label">Supplier</label>
              </div>
              <div class="col-md-4">
                <label class="form-control-label">Branch</label>
              </div>
          </div>
          <div class="row">
              <div class="col-md-5">
                  <el-select class="select-danger"
                      placeholder="Supplier"
                      v-model="selects.simple">
                    <el-option v-for="option in selects.languages"
                        class="select-danger"
                        :value="option.value"
                        :label="option.label"
                        :key="option.label">
                    </el-option>
                  </el-select>
              </div>
              <div class="col-md-5">
                  <el-select class="select-danger"
                      placeholder="Branch"
                      v-model="selects.simple">
                    <el-option v-for="option in selects.languages"
                        class="select-danger"
                        :value="option.value"
                        :label="option.label"
                        :key="option.label">
                    </el-option>
                  </el-select>
              </div>
          </div>
          <br>
               <div class="card">
                           <el-table class="table-responsive table-flush"
                                  header-row-class-name="thead-light"
                                  :data="projects" row-key="title" @selection-change="onSelectionChange">
                                  <el-table-column  type="selection"
                                                    align="left"                                    
                                                    min-width="140px"
                                                    >
                                  </el-table-column>

                                  <el-table-column label="Name" 
                                                    prop="title"
                                                    min-width="140px"
                                                    sortable>
                                  </el-table-column>
                                  <el-table-column label="Email" 
                                                    prop="type"
                                                    min-width="140px"
                                                    sortable>
                                  </el-table-column>
                                  <el-table-column label="Supplier" 
                                                    prop="company"
                                                    min-width="140px"
                                                    sortable>
                                  </el-table-column>
                                  <el-table-column label="Country" 
                                                    prop="country"
                                                    min-width="140px"
                                                    sortable>
                                  </el-table-column>
                                  <el-table-column label="Hours Avancend Booking" 
                                                    prop="company"
                                                    min-width="245px"
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
    </div>
  </section>
</template>
     
<script>
// @ is an alias to /src
import { mapGetters, mapActions, mapMutations } from "vuex";
import CardService from './components/CardService';
import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui';

export default {
  name: "Services",
  data() {
      return {
        selects: {
            simple: '',
            languages: [{value: 'Bahasa Indonesia', label: 'Bahasa Indonesia'},
              {value: 'Bahasa Melayu', label: 'Bahasa Melayu'},
              {value: 'Català', label: 'Català'},
              {value: 'Dansk', label: 'Dansk'},
              {value: 'Deutsch', label: 'Deutsch'},
              {value: 'English', label: 'English'},
              {value: 'Español', label: 'Español'},
              {value: 'Eλληνικά', label: 'Eλληνικά'},
              {value: 'Français', label: 'Français'},
              {value: 'Italiano', label: 'Italiano'},
              {value: 'Magyar', label: 'Magyar'},
              {value: 'Nederlands', label: 'Nederlands'},
              {value: 'Norsk', label: 'Norsk'},
              {value: 'Polski', label: 'Polski'},
              {value: 'Português', label: 'Português'},
              {value: 'Suomi', label: 'Suomi'},
              {value: 'Svenska', label: 'Svenska'},
              {value: 'Türkçe', label: 'Türkçe'},
              {value: 'Íslenska', label: 'Íslenska'},
              {value: 'Čeština', label: 'Čeština'},
              {value: 'Русский', label: 'Русский'},
              {value: 'ภาษาไทย', label: 'ภาษาไทย'},
              {value: '中文 (简体)', label: '中文 (简体)'},
              {value: 'W">中文 (繁體)', label: 'W">中文 (繁體)'},
              {value: '日本語', label: '日本語'},
              {value: '한국어', label: '한국어'}]
          },
       }
    },
  created() {
    this.setActiveItem("services");
  },
  methods: {
    ...mapMutations(["setActiveItem"])
  },
  components: {
     [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    "cad-service":CardService
  }
};
</script>
<style lang="scss">
</style>
<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
            <div class="search">
               <base-input alternative class="mb-3"
                placeholder="Search by Item & Name"
       >
                </base-input>
               <base-button tag="a"
             class="mb-3 mb-sm-0">
             Search
             </base-button>
            </div>
             <base-button tag="a" href="#/formAddItem"
             class="mb-3 mb-sm-0">
             Add
             </base-button>
             <base-button tag="a" 
             class="mb-3 mb-sm-0">
             Export Data
             </base-button>
            <base-table-dashboard :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary"
                        >
                        <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field == 'details'">
                          <button type="button" class="btn btn-primary">
                          View Details
                          </button>
                        </span>
                        <span v-else>
                            {{props.formattedRow[props.column.field]}}
                        </span>
                      </template>
            </base-table-dashboard>
            
          </div>
        </card>
      </div>
      
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    
</template>
<script>
import BaseTableDashboard from '../components/BaseTableDashboard.vue';
const tableColumns = ["Item","Name","Qty","Category", "Price", "Weight","Size","City","image"] ;
const tableData = [
  {
    id: 1,
    item: "T-Shirts",
    name: "Jose Carillo",
    qty: "10",
    category: "Clothes",
    price: "20.000",
    weight: "10kg",
    size: "Medium",
    city: "Barcelona",
    image: ""
  
  },
  {
    id: 2,
    item: "T-Shirts",
    name: "Miguel Gallardo",
    qty: "3",
    category: "Clothes",
    price: "20.000",
    weight: "10kg",
    size: "Small",
    city: "Guadalajara",
    image: ""
  },
  {
    id: 3,
    name: "Antonio Escobar",
   
  },
  {
    id: 4,
    name: "Dakota Rice",
  
  },
  {
    id: 5,
    name: "Mason Porter",
  },
  {
    id: 6,
    name: "Doris Greene",
 
  },
  {
    id: 7,
    name: "Philip Chaney",
    
  },
  {
    id: 8,
    name: "Minerva Hooper",
    
  },
  {
    id: 9,
     name: "Jon Porter",
 
  },
  {
    id: 10,
    name: "Andres Smith",
  }
];

export default {
  components: {
    BaseTableDashboard
  },
  data() {
    return {
      table1: {
        title: "Toko *Henwin",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
};
</script>
<style>
  

</style>

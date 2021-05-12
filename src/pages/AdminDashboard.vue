<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <base-table-dashboard :data="table2.data"
                        :columns="table2.columns"
                        thead-classes="text-primary"
                        >
            </base-table-dashboard>
          <div class="table-responsive">
            

            <div class="search">
               <base-input alternative class="mb-3"
                placeholder="Search by Item"
              >
                </base-input>
               <base-button tag="a" 
             class="mb-3 mb-sm-0">
             Search
             </base-button>
            </div>
            <base-table-merchant :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary">
            </base-table-merchant>
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
import BaseTableMerchant from '../components/BaseTableMerchant.vue';
import BaseTableDashboard from '../components/BaseTableDashboard.vue';

const tableColumns = ["Merchant"] ;
const tableData = [
  {
    id: 1,
    merchant: "Toko Henwin",

  },
  {
    id: 2,
    merchant: "Toko Sejahtera",
  },
  {
    id: 3,
    merchant: "Toko Makmur",
  },
  {
    id: 4,
    merchant: "Toko Sentosa",
  },
  {
    id: 5,
    merchant: "Toko Jakarta",
  },
  {
    id: 6,
    merchant: "Toko Jaya",
  },
  {
    id: 7,
    merchant: "Toko Cahaya",
  },
  {
    id: 8,
    merchant: "Toko Surya",
  },
  {
    id: 9,
    merchant: "Toko Nusantara",
  },
  {
    id: 10,
    merchant: "Toko Senja",
  }
];
const tableColumnsDashboard = ["Item","Name","Qty","Category", "Price", "Weight","Size","City","image"] ;
const tableDataDashboard = [
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
    BaseTableMerchant,
    BaseTableDashboard
  
  },
  data() {
    return {
      table1: {
        title: "List Merchant",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title : "blablabla",
        columns: [...tableColumnsDashboard],
        data: [...tableDataDashboard]
      }
    };
  }
};
</script>
<style>
</style>

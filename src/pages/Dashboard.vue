<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
            <div class="search">
               <base-input alternative class="mb-3"
                placeholder="Search"
                addon-left-icon="ni ni-hat-3">
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
             <base-button tag="a" href="#/formAddItem"
             class="mb-3 mb-sm-0">
             Export Data
             </base-button>
            <base-table :data="table1.data"
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
            </base-table>
            
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
import { BaseTable } from "@/components";
const tableColumns = ["Barang","Qty","Name", "Address", "City","weight"] ;
const tableData = [
  {
    id: 1,
    barang: "Bajuu",
    qty: "10",
    name: "Dakota Rice",
    resi: "$36.738",
    address: "Niger",
    city: "Oud-Turnhout",
    weight: "10 kg",
  
  },
  {
    id: 2,
    name: "Minerva Hooper",
    resi: "$23,789",
    address: "Curaçao",
    city: "Sinaai-Waas"
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    resi: "$56,142",
    address: "Netherlands",
    city: "Baileux"
  },
  {
    id: 4,
    name: "Philip Chaney",
    resi: "$38,735",
    address: "Korea, South",
    city: "Overland Park"
  },
  {
    id: 5,
    name: "Doris Greene",
    resi: "$63,542",
    address: "Malawi",
    city: "Feldkirchen in Kärnten"
  },
  {
    id: 6,
    name: 'Mason Porter',
    resi: '$98,615',
    address: 'Chile',
    city: 'Gloucester'
  },
  {
    id: 7,
    name: 'Mason Porter',
    resi: '$98,615',
    address: 'Chile',
    city: 'Gloucester'
  },
  {
    id: 8,
    name: 'Mason Porter',
    resi: '$98,615',
    address: 'Chile',
    city: 'Gloucester'
  },
  {
    id: 9,
    name: 'Mason Porter',
    resi: '$98,615',
    address: 'Chile',
    city: 'Gloucester'
  },
  {
    id: 10,
    name: 'Jon Porter',
    resi: '$78,615',
    address: 'Portugal',
    city: 'Gloucester'
  }
];

export default {
  components: {
    BaseTable
  },
  data() {
    return {
      table1: {
        title: "Toko Henwin contohnya",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
};
</script>
<style>
  

</style>

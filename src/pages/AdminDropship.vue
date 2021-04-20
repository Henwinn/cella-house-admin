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
               <base-button tag="a" href="#/formAddItem"
             class="mb-3 mb-sm-0">
             Search
             </base-button>
            </div>
            <base-table :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary">
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
const tableColumns = ["Merchant", "Item", "Name", "Resi", "Status"] ;
const tableData = [
  {
    id: 1,
    merchant: "Toko Henwin",
    item: "T-shirts",
    name: "Dakota Rice",
    resi: "1244434",
    status: "on progress"
  },
  {
    id: 2,
    merchant: "Toko Henwin",
    item: "T-shirts",
    name: "Minerva Hooper",
    resi: "1222434",
    status: "on progress"
  },
  {
    id: 3,
    merchant: "Toko Henwin",
    item: "T-shirts",
    name: "Sage Rodriguez",
    resi: "1235434",
    status: "on progress"
  },
  {
    id: 4,
    merchant: "Toko Henwin",
    item: "T-shirts",
    name: "Philip Chaney",
    resi: "1244432",
    status: "on progress"
  },
  {
    id: 5,
    merchant: "Toko Henwin",
  },
  {
    id: 6,
    merchant: "Toko Henwin",
  },
  {
    id: 7,
    merchant: "Toko Henwin",
  },
  {
    id: 8,
    merchant: "Toko Henwin",
  },
  {
    id: 9,
    merchant: "Toko Henwin",
  },
  {
    id: 10,
    merchant: "Toko Henwin",
  }
];

export default {
  components: {
    BaseTable
  },
  data() {
    return {
      table1: {
        title: "LIST Dropship",
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title: "Table on Plain Background",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
};
</script>
<style>
</style>

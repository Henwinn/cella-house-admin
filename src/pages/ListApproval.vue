<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
            <base-table-approve :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary"
                        >
            </base-table-approve>
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
import BaseTableApprove from '../components/BaseTableApprove.vue';

const tableColumns = ["image","Name","Item","Qty","Category", "Price", "Weight","Size","City"] ;
const tableData= [
  {
    id: 1,
    image: "",
    name: "Toko Henwin",
    item: "T-Shirts",
    qty: "10",
    category: "Clothes",
    price: "20.000",
    weight: "10kg",
    size: "Medium",
    city: "Barcelona",
  },
  {
    id: 2,
    image: "",
    name: "Toko Sejahtera",
    item: "T-Shirts",
    qty: "10",
    category: "Clothes",
    price: "20.000",
    weight: "10kg",
    size: "Medium",
    city: "Barcelona"
  }
 
 
];

export default {
  components: {
    BaseTableApprove
  
  },
  data() {
    return {
      table1: {
        title: "List Approvals",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
};
</script>
<style>
</style>

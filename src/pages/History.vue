<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
            <div class="search">
               <base-input alternative class="mb-3"
                placeholder="Search by Name & Item"
               >
                </base-input>
               <base-button tag="a"
             class="mb-3 mb-sm-0">
             Search
             </base-button>
            </div>
            <base-table-history :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary">
            </base-table-history>
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
import BaseTableHistory from '../components/BaseTableHistory.vue';
const tableColumns = ["Name", "Item", "Send", "Resi", "Status"];
const tableData = [
  {
    id: 1,
    name: "Dakota Rice",
    item: "T-Shirts",
    send: "Jakarta",
    resi: "1244434",
    status: "On Progress",
  },
  {
    id: 2,
    name: "Minerva Hooper",
    item: "T-Shirts",
    send: "Jakarta",
    resi: "1222434",
    status: "On Progress",
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    item: "T-Shirts",
    send: "Jakarta",
    resi: "1235434",
    status: "On Progress",
  },
  {
    id: 4,
    name: "Philip Chaney",
   item: "T-Shirts",
    send: "Bandung",
    resi: "1244432",
    status: "On Progress",
  },
  {
    id: 5,
    name: "Doris Greene",
  },
  {
    id: 6,
    name: 'Mason Porter',
  },
  {
    id: 7,
    name: 'Jon Porter',
  }
];

export default {
  components: {
    BaseTableHistory
  },
  data() {
    return {
      table1: {
        title: "History Dropship",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
};
</script>
<style>
</style>

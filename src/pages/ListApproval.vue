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
          <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
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

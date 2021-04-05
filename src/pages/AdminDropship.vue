<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
            <base-table :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary">
            </base-table>
          </div>
        </card>
      </div>
      <!-- <div class="col-12">
        <card class="card-plain">
          <div class="table-full-width table-responsive">
            <base-table :title="table2.title" :sub-title="table2.subTitle" :data="table2.data"
                         :columns="table2.columns">

            </base-table>
          </div>
        </card>
      </div> -->

    </div>
</template>
<script>
import { BaseTable } from "@/components";
const tableColumns = ["Merchant", "Name", "Resi", "Status"] ;
const tableData = [
  {
    id: 1,
    merchant: "Toko Henwin",
    name: "Laptop",
    resi: "12123333",
    status: "on progress"
  },
  {
    id: 2,
    merchant: "Toko Henwin",
  },
  {
    id: 3,
    merchant: "Toko Henwin",
  },
  {
    id: 4,
    merchant: "Toko Henwin",
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

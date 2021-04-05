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

export default {
  components: {
    BaseTable
  },
  data() {
    return {
      table1: {
        title: "LIST MERCHANT",
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

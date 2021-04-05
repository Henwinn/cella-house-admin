<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
             <base-button tag="a" href="#/formAddItem"
             class="mb-3 mb-sm-0">
             Add
             </base-button>
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
const tableColumns = ["Barang","Qty","Name", "Address", "City","weight","Action"] ;
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

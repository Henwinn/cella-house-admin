<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
            <base-table-tracking :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary"
                        >
            </base-table-tracking>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
import BaseTableTracking from '../components/BaseTableTracking.vue';

const tableColumns = ["Date","Status"] ;
const tableData= [
  {
    id: 1,
     date: "5/5/2021",
    status: "Received",
  },

 
 
];

export default {
  components: {
    BaseTableTracking
  
  },
  data() {
    return {
      table1: {
        title: "Tracking",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
};
</script>
<style>
</style>

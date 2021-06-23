<template>
    <div class="row">
      <div class="col-12">

        
        <card>
         

         <div class="table-responsive">
          <table class="table is-striped is-bordered mt-2 is-fullwidth">
               <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Weight</th>
                    <th>Size</th>
                    <th>City</th>
                   
                    <th class="has-text-centered">Actions</th>
                  </tr>
               </thead>
               <tbody>

                    <!-- <tr v-for="dropship in dropships" :key="dropship.id">
                      <td>{{ dropship.qty }}</td>
                      <td>{{ dropship.customerName }}</td>
                      <td>{{ dropship.customerPhone }}</td>
                      <td>{{ dropship.province }}</td>
                      <td>{{ dropship.city }}</td>
                      <td>{{ dropship.postalCode }}</td>
                      <td>{{ dropship.address }}</td>
                      <td>{{ dropship.shipmentPrice }}</td>
                      <td>{{ dropship.paymentInvoice }}</td>
                      <td>{{ dropship.note }}</td>
                      <td>{{ dropship.status }}</td>
                      <td class="has-text-centered">
                        <button class="btn"
                        
                          >Withdraw item</button >
                       
                            <button class="btn">Tracking</button>
                        
                      </td>
                    </tr> -->
                </tbody>
             </table>

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




export default {
  components: {
    BaseTableApprove
  
  },
  data() {
    return {
     
    };
  }
};
</script>
<style>
</style>

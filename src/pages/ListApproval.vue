<template>
    <div class="row">
      <div class="col-12">

        
        <card>
         

         <div class="table-responsive">
           <h1>List Approval</h1>
          <table class="table is-striped is-bordered mt-2 is-fullwidth">
               <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Qty</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Province</th>
                    <th>City</th>
                    <th>Kelurahan</th>
                    <th>Postal Code</th>
                    <th>Address</th>
                    <th>Shipment Price</th>
                    <th>Status</th>
                   
                    <th class="has-text-centered">Actions</th>
                  </tr>
               </thead>
               <tbody>

                    <tr v-for="(product) in products" :key="product">
                      <td>{{ product.productId }}</td>
                      <td>{{ product.qty }}</td>
                      <td>{{ product.customerName }}</td>
                      <td>{{ product.customerPhone }}</td>
                      <td>{{ product.province }}</td>
                      <td>{{ product.city }}</td>
                      <td>{{ product.kelurahan }}</td>
                      <td>{{ product.postalCode }}</td>
                      <td>{{ product.address }}</td>
                      <td>{{ product.shipmentPrice }}</td>
                      <td>{{ product.status }}</td>
                     
                      
                      <td class="has-text-centered">
                        <button class="btn"
                        
                          >Approve</button >
                       
                            <button class="btn">Cancel</button>
                        
                      </td>
                    </tr> 
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
import axios from "axios";



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

<template>
    <div class="row">
      <div class="col-12">

        
        <card>
         

         <div class="table-responsive">
           <h1>List Approvals</h1>
          <table class="table is-striped is-bordered mt-2 is-fullwidth">
               <thead>
                  <tr>
                    <th>Merchant Name</th>
                    <th>Item Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Variant</th>
                    <th>Note</th>
                   
                   
                    <th class="has-text-centered">Actions</th>
                  </tr>
               </thead>
               <tbody>

                    <tr v-for="product in products" :key="product">
                      <td>{{ product.storeId}}</td>
                      <td>{{ product.name }}</td>
                      <td>{{ product.qty }}</td>
                      <td>{{ product.price }}</td>
                      <td>{{ product.categoryName }}</td>
                      <td>{{ product.variant }}</td>
                      <td>{{ product.note }}</td>
                     
                     
                      
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
      products: []
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
     async getProducts() {
        try {
          const response = await axios.get("http://localhost:3000/users"); //route ini untuk testing aja karena perlu login kalau pakai route asli
          this.products = response.data;
        } catch (err) {
          console.log(err);
          alert('err: ' + err)
        }
      },
  }
};
</script>
<style>
</style>

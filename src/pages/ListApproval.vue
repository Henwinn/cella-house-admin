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

                    <tr v-for="product in products" :key="product.id">
                      <td>{{ product.storeId}}</td>
                      <td>{{ product.name }}</td>
                      <td>{{ product.qty }}</td>
                      <td>{{ product.price }}</td>
                      <td>{{ product.categoryName }}</td>
                      <td>{{ product.variant }}</td>
                      <td>{{ product.note }}</td>
                      
                      <td class="has-text-centered">
                        <button class="btn" @click="approveProduct(product.id);">Approve</button>
                        <button class="btn" @click="rejectProduct(product.id)">Reject</button>
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
          :total="total"
          :page-size="pageSize"
          @current-change="page">
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
      products: [],
       pageSize:'',
        total:''
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:3000/admin/product/approve"); //route ini untuk testing aja karena perlu login kalau pakai route asli
        this.products = response.data.rows;
      } catch (err) {
        console.log(err);
        alert('err: ' + err)
      }
    },
    async approveProduct(val){
      try{
        await axios.post(`http://localhost:3000/admin/approve-product/${val}`)
        alert('Product Approved')
        this.getProducts()
      } catch(err) {
        console.log(err)
      }
    },
    async rejectProduct(val) {
      try {
        await axios.post(`http://localhost:3000/admin/reject-product/${val}`);
        alert('Product Rejected')
        this.getProducts();
      }catch (err) {
        console.log(err);
      }
    },
    page(){
      axios.get('http://localhost:3000/users?page=' + encodeURIComponent(value)) //Cara dapetin current page gimana
      .then((response) => {
        this.products = response.data.rows
        this.pageSize = response.data
        this.total = response.data.count
        })
      .catch(e => console.log(e));
    }
  }
};
</script>
<style>
</style>

<template>
    <div class="row">
      <div class="col-12">
        <card>
          <div class="table-responsive">
            <h1>Dashboard</h1>
            <div class="search">
               <input type="text" class="form-control" placeholder="Search by Item & Name" v-model="search">
                
              
            </div>
             <base-button tag="a" href="#/formAddItem"
             class="mb-3 mb-sm-0">
             Add
             </base-button>
             <base-button tag="a"
             class="mb-3 mb-sm-0">
             Export Data
             </base-button>
             <table class="table is-striped is-bordered mt-2 is-fullwidth">
               <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Category Name</th>
                    <th>Variant</th>
                    <th>Note</th>
                    <th>Status</th>
                    <th class="has-text-centered">Actions</th>
                  </tr>
               </thead>
               <tbody>

                    <tr v-for="(product, idx) in this.products" :key="idx">
                      <td>{{ product.name }}</td>
                      <td>{{ product.qty }}</td>
                      <td>{{ product.price }}</td>
                      <td>{{ product.categoryName }}</td>
                      <td>{{ product.variant }}</td>
                      <td>{{ product.note }}</td>
                      <td>{{ product.status }}</td>
                      <td class="has-text-centered">
                       
                          <router-link :to="{ path: 'formUpdateItem', query: { id: product.id }}">

                          <button tag="a"  class="btn" >Edit</button >
                          </router-link>

                            
                        
                       
                        <button class="btn" type="submit" @click="deleteProduct(product.id)">Delete</button>
                        <button class="btn" type="submit" @click="withdrawProduct(product.id)">Withdraw</button>
                        <button class="btn" type="submit" @click="withdrawProduct(product.id)">Dropship</button>
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
          v-model="pagination"
          :total="total"
          :page-size="pageSize"
          @current-change="page">
        </el-pagination>
    </div>
</template>
<script>
import axios from "axios";
import _ from "lodash";
import BaseButton from '../components/BaseButton.vue';
export default {
  components: { BaseButton },
    name:"productsList",
    data() {
      return {
        products: [],
        search: '',
        pageSize:'',
        total:''
      };
    },
    created() {
      this.getProducts();
      this.doSearch = _.debounce(this.doSearch, 400);
    },
    watch: { //ini bagian dari untuk search
      search(value){
        this.doSearch(value); 
      }
    },
    methods: {
      async getProducts() {
        try {
          const response = await axios.get("http://localhost:3000/users"); //route ini untuk testing aja karena perlu login kalau pakai route asli
          this.products = response.data.rows;
        } catch (err) {
          console.log(err);
          alert('err: ' + err)
        }
      },
      deleteProduct(id) {
        try {
          axios.post(`http://localhost:3000/products/delete/${id}`);
          this.getProducts();
        }catch (err) {
          console.log(err);
        }
      },
      withdrawProduct(id){
        try {
          axios.post(`http://localhost:3000/products/withdraw/${id}`);
          this.getProducts();
        }catch (err) {
          console.log(err);
        }
      },
      doSearch(value) { //ini bagian dari untuk search
        axios.get('http://localhost:3000/users?search=' + encodeURIComponent(value))
        .then((response) => {this.products = response.data.rows})
        .catch(e => console.log(e));
      },
      page(){
        axios.get('http://localhost:3000/users?page=' + encodeURIComponent(value)) //diganti dengan current page tapi gw gatau cara ambil current page
        .then((response) => {
          this.products = response.data.rows
          this.total = response.data.count
          })
        .catch(e => console.log(e));
      },
    }
    
};
</script>

<style>
.btn {
  padding: 10px;
  margin-right: 20px;

}

</style>

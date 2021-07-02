<template>
<div class="profile">
  <card type="user">
    <p class="card-text">
    </p>
    <div class="author">

     
      <img class="avatar" src="img/anime6.png" alt="...">
      <!-- <h5 class="title">*Store Name</h5>
      <h5 class="title">*Store Owner</h5>
      <h5 class="title">*Store Address</h5>
      <h5 class="title">*Store Number</h5> -->
      <tr v-for="(user, idx) in this.users" :key="idx">
                      <td>{{ user.fullName }}</td>
                      <td>{{ user.storeName }}</td>
                      <td>{{ user.username }}</td>
                      <td>{{ user.address }}</td>
                      <td>{{ user.phone }}</td>
                     
                      <td class="has-text-centered"></td> 
      </tr>
                       
      <!-- <p class="description">
        *Store Description
      </p> -->
    </div>
    <p></p>
    <p class="card-description">
      {{user.description}}
    </p>
  
    <div slot="footer" class="button-container">
      <base-button icon round class="btn-facebook">
        <i class="fab fa-facebook"></i>
      </base-button>
      <base-button icon round class="btn-twitter">
        <i class="fab fa-twitter"></i>
      </base-button>
      <base-button icon round class="btn-google">
        <i class="fab fa-google-plus"></i>
      </base-button>
      
    </div>
    
  </card>
  <card>
   <div class="search">
        <input type="text" class="form-control" placeholder="Search" v-model="search">
  </div>
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

                          <button tag="a"  class="btn" @click="updateItem(product.id)">Edit</button >
                          </router-link>
                        
                       
                        <button class="btn" type="submit" @click="deleteProduct(product.id)">Delete</button>
                        
                      </td>
                    </tr>
                </tbody>
             </table>
             <el-pagination
        
          background
          layout="prev, pager, next"
          :total="total"
          :page-size="pageSize"
          @current-change="page">
        </el-pagination>
  </card>
  
</div>
</template>
<script>
import Card from '../components/Cards/Card.vue';
  export default {
  components: { Card },
    props: {
      user: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
  data() {
    return {
      
        users: [],
        products: []
      
      
    }
  },
  created: function (){
    this.getMerchantProfileById();
    this.getProduts();
  },
  methods: {
    async getMerchantProfileById(id){
        try{
          const response = await axios.get(`http://localhost:3000/users/${id}`) //get user id nya
          this.users = response.data;
        } catch (err) {
          console.log(err)
        }
      },
     async getProducts() {
        try {
          const response = await axios.get(`http://localhost:3000/products/user/${id}`); //get table nya berdasarkan user nya
          this.products = response.data.rows;
        } catch (err) {
          console.log(err);
          alert('err: ' + err)
        }
      },
  }
  }
</script>
<style>
</style>

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

      <h5 class="title">{{ user.fullName }}</h5>
        <h5 class="title">{{ user.storeName }}</h5>
        <h5 class="title">{{ user.username }} </h5>
        <h5 class="title">{{ user.email }}</h5>
        <h5 class="title">{{ user.address }}</h5>
        <h5 class="title">{{ user.phone }}</h5>

        
      <!-- <tr v-for="(item, idx) in this.users" :key="idx">
        <td>{{ item.fullName }}</td>
        <td>{{ item.storeName }}</td>
        <td>{{ item.username }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.phone }}</td>

        <td class="has-text-centered"></td>
      </tr> -->

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
    <div class="table-responsive">
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
                   
                  </tr>
               </thead>
               <tbody>

                    <tr v-for="(product,idx) in this.products" :key="idx">
                      <td>{{ product.name }}</td>
                      <td>{{ product.qty }}</td>
                      <td>{{ product.price }}</td>
                      <td>{{ product.categoryName }}</td>
                      <td>{{ product.variant }}</td>
                      <td>{{ product.note }}</td>
                      <td>{{ product.status }}</td>
        
                    </tr>
                </tbody>
             </table>
    </div>
              </card>

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
import Card from '../components/Cards/Card.vue';
import axios from "axios";

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
        products: [],
        search: '',
        total: '',
        pageSize: '',
        currPage: 0
      }
    },
    created(){
      this.getMerchantProfileById();
      this.getProducts();
      this.doSearch = _.debounce(this.doSearch, 400);
    },
    watch: {
      search(value){
          this.doSearch(value); 
        }
    },
    methods: {
      async getMerchantProfileById(id){
        try{
          const response = await axios.get(`http://localhost:3000/admin/user?id=${this.$route.query.id}`) //get user id nya
          this.user = response.data;
          // alert(this.users)
          // console.log('json: ' + this.users)
        } catch (err) {
          console.log(err)
        }
      },
      async getProducts() {
        try {
          const response = await axios.get(`http://localhost:3000/products/user?id=${this.$route.query.id}&page=${this.currPage}`); //get table nya berdasarkan user nya
          this.products = response.data.rows;
          this.total = response.data.count
          this.pageSize = 5
        } catch (err) {
          console.log(err);
          alert('err: ' + err)
        }
      },
      doSearch(value) { //ini bagian dari untuk search
        axios.get('http://localhost:3000/users?search=' + encodeURIComponent(value))
        .then((response) => {this.products = response.data.rows})
        .catch(e => console.log(e));
      },
      page(val){
        this.currPage = val - 1
        this.getProducts(val)
      }
    }
  }
</script>
<style>
</style>

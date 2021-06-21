<template>
    <div class="row">
      <div class="col-12">
        <card>
          <div class="table-responsive">
            <h1>Dashboard</h1>
            <div class="search">
               <input type="text" class="form-control" placeholder="Search by Item & Name" v-model="search">
                
               <button tag="a"
             class="btn" >
             Search
             </button>
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

                    <tr v-for="product in this.products" :key="product">
                      <td>{{ product.name }}</td>
                      <td>{{ product.qty }}</td>
                      <td>{{ product.price }}</td>
                      <td>{{ product.categoryName }}</td>
                      <td>{{ product.variant }}</td>
                      <td>{{ product.note }}</td>
                      <td>{{ product.status }}</td>
                      <td class="has-text-centered">
                        <button class="btn">Edit</button >
                        <!-- <a
                          class="button is-danger is-small"
                          @click="deleteProduct(product.id)"
                          >Delete</a> -->
                            <button class="btn" type="submit" @click="deleteProduct(product.id)">Delete</button>
                        
                      </td>
                    </tr>
                </tbody>
             </table>
          </div>
        </card>
      </div>

      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

</template>
<script>
import axios from "axios";
import BaseButton from '../components/BaseButton.vue';
export default {
  components: { BaseButton },
    name:"productsList",
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
      async deleteProduct(id) {
        try {
          await axios.delete('http://localhost:3000/users/${id}');
          this.getProducts();
        }catch (err) {
          console.log(err);
        }
      }
    }
};
</script>
<style>


</style>

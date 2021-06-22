<template>
    <div class="row">
      <div class="col-12">
        <card>
          <div class="table-responsive">
            <h1>List Merchants</h1>
            <div class="search">
               <base-input alternative class="mb-3"
                placeholder="Search by Merchant's Name"
       >
                </base-input>
               <base-button tag="a"
             class="mb-3 mb-sm-0">
             Search
             </base-button>
            </div>
             <table class="table is-striped is-bordered mt-2 is-fullwidth">
               <thead>
                  <tr>
                    <th>Merchant</th>
                    <th class="has-text-centered">Actions</th>
                  </tr>
               </thead>
               <tbody>

                    <tr v-for="user in users" :key="user.id">
                      <td>{{ user.storeName }}</td>
                      <td class="has-text-centered">
                        <button class="btn">Profile</button >
                        <button class="btn">Delete</button>
                        
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
import axios from "axios";
import BaseButton from '../components/BaseButton.vue';
export default {
  components: { BaseButton },
    name:"merchantsList",
    data() {
      return {
        users: []
      };
    },
    created() {
      this.getMerchants();
    },
    methods: {
      async getMerchants() {
        try {
          const response = await axios.get("http://localhost:3000/users"); //route ini untuk testing aja karena perlu login kalau pakai route asli
          this.users = response.data;
        } catch (err) {
          console.log(err);
          alert('err: ' + err)
        }
      },
      async deleteProduct(id) {
        try {
          await axios.delete("http://localhost:3000/users/${id}");
          this.getMerchants();
        }catch (err) {
          console.log(err);
        }
      }
    }
};
</script>
<style>


</style>

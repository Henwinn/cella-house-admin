<template>
    <div class="row">
      <div class="col-12">
        <card>
          <div class="table-responsive">
            <h1>Dropships History</h1>
            <div class="search">
               <base-input alternative class="mb-3"
                placeholder="Search by Item & Name"
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
                    <th>Qty</th>
                    <th>Customer Name</th>
                    <th>Customer Phone</th>
                    <th>Province</th>
                    <th>City</th>
                    <th>Postal Code</th>
                    <th>Address</th>
                    <th>Shipment Price</th>
                    <th>Payment Invoice</th>
                    <th>Note</th>
                    <th>Status</th>
                    <th class="has-text-centered">Actions</th>
                  </tr>
               </thead>
               <tbody>

                    <tr v-for="user in users" :key="user.id">
                      
                      <td>{{ user.qty }}</td>
                      <td>{{ user.customerName }}</td>
                      <td>{{ user.customerPhone }}</td>
                      <td>{{ user.province }}</td>
                      <td>{{ user.city }}</td>
                      <td>{{ user.postalCode }}</td>
                      <td>{{ user.address }}</td>
                      <td>{{ user.shipmentPrice }}</td>

                      
                      <!-- <td>{{ dropship.paymentInvoice }}</td> //ini buat apa ya? ada paymentInvoice?
                      <td>{{ dropship.note }}</td>
                      <td>{{ dropship.status }}</td> -->
                      <td class="has-text-centered">
                        <button class="btn"
                        
                          >Update Status</button >
                        <!-- <a
                          class="button is-danger is-small"
                          @click="deleteProduct(product.id)"
                          >Delete</a> -->
                            <button class="btn">Tracking</button>
                        
                      </td>
                    </tr>
                </tbody>
             </table>
          </div>
        </card>
      </div>
<!-- 
              <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination> -->
    </div>

</template>
<script>
import axios from "axios";
import BaseButton from '../components/BaseButton.vue';
export default {
  components: { BaseButton },
    name:"dropshipsList",
    data() {
      return {
        users: []
      };
    },
    created() {
      this.getUsers();
    },
    methods: {
      async getUsers() {
        try {
          const response = await axios.get("http://localhost:3000/users");
          this.users = response.data;
          //UNFINISHED
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

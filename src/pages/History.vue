<template>
    <div class="row">
      <div class="col-12">
        <card>
          <div class="table-responsive">
            <h1>Dropships History</h1>
            <div class="search">
               <input type="text" class="form-control" placeholder="Search by Item & Name" v-model="search">
                
               <button tag="a"
             class="btn" @click="searchData">   
             Search  
             </button>  
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

                    <tr v-for="dropship in dropships" :key="dropship.id">
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
                        <button class="btn" @click="withdrawItem(dropship.id)">Withdraw item</button >
                        <!-- <a
                          class="button is-danger is-small"
                          @click="deleteProduct(product.id)"
                          >Delete</a> -->
                            <button class="btn" >Tracking</button>
                        
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
import axios from "axios";
import BaseButton from '../components/BaseButton.vue';
export default {
  components: { BaseButton },
    name:"dropshipsList",
    data() {
      return {
        dropships: [],
        search: '',
        pageSize:'',
        total:''
      };
    },
    created() {
      this.getDropships();
    },
    methods: {
      async getDropships() {
        try {
          const response = await axios.get("http://localhost:3000/users/get/dropship"); //route ini untuk testing aja karena perlu login kalau pakai route asli
          this.dropships = response.data.rows;
          alert(response.data.rows[0].qty)
        } catch (err) {
          console.log(err);
          alert('err: ' + err)
        }
      },
      async withdrawItem(id) {
        try {
          await axios.delete(`http://localhost:3000/users/${id}`); //Gw gatau get url nya
          this.getDropships();
        }catch (err) {
          console.log(err);
        }
      },
      
    searchData() {
      axios.get("http://localhost:3000/users/get/dropship?search=" + this.search)
        .then(response => {
          this.dropships = response.data.rows;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    page(){
        axios.get('http://localhost:3000/users/get/dropship?page=' + encodeURIComponent(value)) //Gw gatau get url nya
        .then((response) => {
          this.dropships = response.data
          this.pageSize = response.data
          this.total = resp.data
          })
        .catch(e => console.log(e));
      }
  }
}
    

</script>
<style>


</style>

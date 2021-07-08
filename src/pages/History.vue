<template>
    <div class="row">
      <div class="col-12">
        <card>
          <div class="table-responsive">
            <h1>Dropships History</h1>
            <div class="search">
               <input type="text" class="form-control" placeholder="Search by Item & Name" v-model="search">
              
            </div>
            
             <table class="table is-striped is-bordered mt-2 is-fullwidth">
               <thead>
                  <tr>
                    <th>Qty</th>
                    <th>Product Name</th>
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
                      <td>{{ dropship.products[0].name }}</td>
                      <td>{{ dropship.customer.name }}</td>
                      <td>{{ dropship.customer.phone }}</td>
                      <td>{{ dropship.city.province_name }}</td>
                      <td>{{ dropship.city.city_name }}</td>
                      <td>{{ dropship.city.postal_code }}</td>
                      <td>{{ dropship.address }}</td>
                      <td>{{ dropship.shipmentPrice }}</td>
                      <td>{{ dropship.paymentInvoice }}</td>
                      <td>{{ dropship.note }}</td>
                      <td>{{ dropship.status }}</td>
                      <td class="has-text-centered">
                        <button class="btn" @click="insertInvoice(dropship.id)" v-if="dropship.status == 'PENDING PAYMENT'">Insert Invoice Number</button >
                        <button class="btn" @click="cancelDropship(dropship.id)" v-if="dropship.status == 'PENDING PAYMENT'">Cancel Dropship</button >
                          <!-- <router-link :to="{ path: 'tracking', query: { id: user.id }}"> -->

                          <button tag="a"  class="btn" v-if="dropship.status != 'REJECTED' && dropship.status != 'CANCELED' && dropship.status != 'PENDING PAYMENT' " >Tracking</button >
                          <!-- </router-link> -->
                       
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
import _ from "lodash";
import BaseButton from '../components/BaseButton.vue';
export default {
  components: { BaseButton },
    name:"dropshipsList",
    data() {
      return {
        dropships: [],
        users:[],
        search: '',
        pageSize: 5,
        total:'',
        currPage: 0,
        paymentInvoice: ''
      };
    },
    created() {
      this.getDropships();
      this.getDropships = _.debounce(this.getDropships, 400);
    },
    watch: { //ini bagian dari untuk search
      search(value){
        this.getDropships(value); 
      }
    },
    methods: {
      async getDropships() {
        try {
          const response = await axios.get(`http://localhost:3000/users/get/dropship?page=${this.currPage}&search=${this.search}`); //route ini untuk testing aja karena perlu login kalau pakai route asli
          this.dropships = response.data.rows;
          this.total = response.data.count
        } catch (err) {
          console.log(err);
        }
      },
      async cancelDropship(id) {
        // try {
        //   await axios.delete(`http://localhost:3000/users/${id}`); //Gw gatau get url nya
        //   this.getDropships();
        // }catch (err) {
        //   console.log(err);
        // }
        try {
          await axios.post(`http://localhost:3000/users/dropship/cancel/${id}`);
          this.getDropships();
        }catch (err) {
          console.log(err);
        }
      },
      async insertInvoice(id) {
        
        this.paymentInvoice = prompt("Enter invoice number")
        let data = {
          paymentInvoice: this.paymentInvoice 
        }
        const response = await axios.post(`http://localhost:3000/users/dropship/insert-invoice/${id}`, data)
        if(response.data == 'success'){
          alert(`Thank you for your payment, we will be checking your invoice soon!`)
        }
        this.getDropships()
      },      
    // searchData() {
    //   axios.get("http://localhost:3000/users/get/dropship?search=" + this.search)
    //     .then(response => {
    //       this.dropships = response.data.rows;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },

    page(val){
      this.currPage = val - 1
      this.getDropships(val)
    }
  }
}
    

</script>
<style>


</style>

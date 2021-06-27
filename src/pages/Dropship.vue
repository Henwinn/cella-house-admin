<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                Dropship
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Input Your Dropship</small>
                            </div>




                            <form role="form">
                                 <!-- <base-dropdown title-classes="btn btn-secondary" title="Item Name">
                                       
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                 </base-dropdown> -->


                                  <div class="form-group" >
                                    <input type="text" placeholder="Item Name" v-model="ItemName" name="ItemName" class="form-control"  />
                                </div>

                                <div class="form-group" >
                                    <input type="text" placeholder="Customer Name" v-model="custName" name="custName" class="form-control"  />
                                </div>

                                 <div class="form-group" >
                                    <input type="text" placeholder="Customer Address" v-model="custAddress" name="custAddress" class="form-control"  />
                                </div>

                                 <div class="form-group" >
                                    <input type="number" placeholder="Customer Phone" v-model="custPhone" name="custPhone" class="form-control"  />
                                </div>

<!-- 
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Item Name"
                                            v-model="itemName"
                                           >
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Customer Name"
                                            v-model="custName"
                                           >
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Customer Address"
                                            v-model="custAddress"
                                           >
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Customer Phone"
                                            v-model="custPhone"
                                           >
                                </base-input> -->





                             
                               <!-- <select v-model="kota">
                                <option disabled value="">Please select one</option>
                                <option v-for="city in cities" :key="city.id"> {{ city.city_name }} </option>
                                
                                </select>  -->





                                <!-- nanti kalau mau tes, coba salah satu select di uncomment aja, terus save. klo udah save terus di refresh manual chrome nya -->
                                
                                  <base-dropdown title-classes="btn btn-secondary" title="Kota" v-model="kota" >
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>

                                 </base-dropdown>

                               <select v-model="provinsi">
                                <option disabled value="">Please select one</option>
                                <option v-for="province in provinces" :key="province.id"> {{ province.province_name }} </option>
                                
                                </select>
                                
                                    


                                   <base-dropdown title-classes="btn btn-secondary" title="Provinsi" v-model="provinsi" >
                                   
                                    <option v-for="province in provinces" :key="province.id"> {{ province.province_name }} </option>
                                   
                                 </base-dropdown>

                                

                                   <base-dropdown title-classes="btn btn-secondary" title="Kode Pos" v-model="postalCode">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                 </base-dropdown>
                                  <base-dropdown title-classes="btn btn-secondary" title="Select Kurir" >
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                 </base-dropdown>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Check Price"
                                            v-model="price"
                                            >
                                </base-input>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">Create Dropship</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from "axios";
export default {
    
    data(){

        
        return {
            itemName: "",
            custName: "",
            custAddress: "",
            custPhone: "",
            kota: "",
            postalCode: "",
            provinsi: "",
            price: "",
            options: []
        };
    },
  created() {
      this.getProvinces();
    this.getCities();
    },
    methods: {
        async getProvinces() {
            try {
            const response = await axios.get("http://localhost:3000/province/all"); //route ini untuk testing aja karena perlu login kalau pakai route asli
            this.provinces = response.data;
            } catch (err) {
            console.log(err);
            alert('err: ' + err)
            }
        },
        async getCities() {
            try {
            const response = await axios.get("http://localhost:3000/city/all"); //route ini untuk testing aja karena perlu login kalau pakai route asli
            this.cities = response.data;
            } catch (err) {
            console.log(err);
            alert('err: ' + err)
            }
        }
    }
};
</script>
<style>
</style>

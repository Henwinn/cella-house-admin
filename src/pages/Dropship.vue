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




                            <form @submit.prevent="handleSubmit" method="post">
                                
                                    <p v-if="errors.length">
                                    <b>Please correct the following error(s):</b>
                                    <ul>
                                    <li v-for="error in errors">{{ error }}</li> <!-- yang ini emang cacing merah ya, jangan di apa apain  -->
                                    </ul>
                                </p>


                                <div class="form-group" >
                                    <input type="text" placeholder="Item Name" v-model="ItemName" name="ItemName" class="form-control"  />
                                </div>

                                <div class="form-group" >
                                    <input type="number" placeholder="Quantity" v-model="qty" name="qty" class="form-control"  />
                                </div>

                                <div class="form-group" >
                                    <input type="number" placeholder="Item Weight(gr)" v-model="ItemWeight" name="ItemWeight" class="form-control"  />
                                </div>

                                <div class="form-group" >
                                    <input type="text" placeholder="Customer Phone" v-model="custPhone" name="custPhone" class="form-control" />
                                </div>

                                <div class="form-group" >
                                    <input type="text" placeholder="Customer Name" v-model="custName" name="custName" class="form-control"  />
                                </div>

                                <div class="form-group" >
                                    <input type="text" placeholder="Customer Address" v-model="custAddress" name="custAddress" class="form-control"  />
                                </div>                             
                        
                                <div class="provinces-dropdown">
                                    <select v-model="selectedProvinces" @change="getCities()" placeholder="select" name="selectedProvinces" :hide-selected="true">
                                        <option disabled value="" selected>Please select one</option>
                                        <option v-for="province in provinces" :key="province.id" :value="province"> {{ province.province_name }} </option>
                                    </select>
                                </div>
                                <div class="cities-dropdown">
                                    <select v-model="selectedCities" @change="getPostalCode()" name="selectedCities">
                                        <option disabled value="">Please select one</option>
                                        <option v-for="city in cities" :key="city.id" :value="city"> {{ city.city_name }} </option>
                                    </select>
                                </div>

                                <div class="form-group" >
                                    <input type="text" placeholder="Postal Code" v-model="postalCode" name="postalCode" class="form-control" disabled />
                                </div>
                                 
                                <div class="courier-dropdown">
                                    <select v-model="courier" name="courier" @change="getPrice()">
                                        <option disabled value="">Please select one</option>
                                        <option value="jne"> JNE </option>
                                        <option value="pos"> POS INDONESIA </option>
                                        <option value="tiki"> TIKI </option>
                                    </select>
                                </div>
                                    
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Shipment Price"
                                            v-model="price"
                                            >
                                </base-input>

                                <div class="text-center">
                                    <button class="btn" type="submit" @click="handleSubmit()">Create Dropship</button>
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
import _ from "lodash";

export default {
    name:'Dropship',
    // el: '#app',
    data(){
        return {
            ItemName: "",
            ItemWeight: 0,
            qty: 0,
            custName: "",
            custAddress: "",
            custPhone: "",
            kota: "",
            postalCode: "",
            provinsi: "",
            courier: "",
            price: "",
            provinces: [],
            cities: [],
            selectedCities: [],
            selectedProvinces: [],
            errors: [],
            success: []
        };
    },
    created() {
        this.getProvinces();
        this.getCustomer = _.debounce(this.getCustomer, 550)
    },
    watch: {
        custPhone(){
            this.getCustomer()
        }
    },
    methods: {
        async getProvinces() {
            try {
                const response = await axios.get("http://localhost:3000/province/all"); //route ini untuk testing aja karena perlu login kalau pakai route asli
                this.provinces = response.data;
            } catch (err) {
                console.log(err);
            }
        },
        async getCities() {
            try {
                const response = await axios.get(`http://localhost:3000/city/province/${this.selectedProvinces.id}`); 
                this.cities = response.data;
            } catch (err) {
                console.log(err);
            }
        },
        async getPostalCode() {
            this.postalCode = this.selectedCities.postal_code
        },
        async getCustomer(){
            try {
                const response = await axios.get(`http://localhost:3000/customers/${this.custPhone}/7`) //should be storeId from session
                this.custName = response.data.name
            } catch(err) {
                console.log(err)
            }
        },
        // async getPrice(){
        //     alert('getprice')
        //     let data = {
        //         origin: '501',
        //         destination: '500',
        //         weight: 100,
        //         courier: 'jne'
        //     }
        //     try{
        //         axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
        //         const config = {
        //             headers: {
        //                 "Access-Control-Allow-Origin": "*"
        //                 // 'Authorization': 'API Key 86fd1b1d861933d64c01dbf67235569e'
        //             }   
        //         }
        //         const response = await axios.post(
        //             `https://api.rajaongkir.com/starter/cost`,
        //             data,
        //             config,
        //             {crossorigin: true}
        //         )
        //         alert('tes: ' + response.data.results.cost[0].cost.value)
        //     } catch(err){
        //         alert(err)
        //         console.log(err)
        //     }
        // },
        async handleSubmit(){
            this.errors = [];
            
            // if (!this.ItemName) {
            //     this.errors.push("Name required");
            // }

            // if (!this.custName) {
            //     this.errors.push("Customer Name required");
            // }

            // if (!this.custAddress) {
            //     this.errors.push("Customer Address required");
            // }
            
            // if (!this.custPhone) {
            //     this.errors.push("Customer Phone required");
            // }

            // if (!this.selectedProvinces) {
            //     this.errors.push("Select provinces required");
            // }

        
            // if (!this.selectedCities) {
            //     this.errors.push("Select City required");
                
            // }

            if (!this.errors.length) {
                let data = {
                    qty: this.qty,
                    itemWeight: this.ItemWeight,
                    custPhone: this.custPhone,
                    custName: this.custName,
                    custAddress: this.custAddress,
                    provinceIdDestination: this.selectedProvinces.id,
                    cityIdDestination: this.selectedCities.id,
                    courier: this.courier,
                    shipmentPrice: this.price
                }
                axios.post(`http://localhost:3000/users/dropship/submission/8`, data) //harusnya id product
                .then(respond => {
                    if(respond.data == 'success'){
                        alert('success')
                    } else {
                        alert('fail')
                    }
                })
            }
            e.preventDefault();
        },





    }
};
</script>
<style>
.provinces-dropdown > select{
    background-color: #26293D;
     border: 1px solid #273553;
    color:aliceblue;
    padding: 8px;
    padding-right: 95px;
    border-radius: 8px;
    margin-bottom: 10px;
}
.cities-dropdown > select{
    background-color: #26293D;
     border: 1px solid #273553;
    color:aliceblue;
    padding: 8px;
    padding-right: 215px;
    border-radius: 8px;
    margin-bottom: 10px;
}
.courier-dropdown > select{
    background-color: #26293D;
     border: 1px solid #273553;
    color:aliceblue;
    padding: 8px;
    padding-right: 215px;
    border-radius: 8px;
    margin-bottom: 10px;
}
</style>

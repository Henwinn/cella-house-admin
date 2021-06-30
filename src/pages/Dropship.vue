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




                            <form id="app" @submit.prevent="handleSubmit" method="post">
                                
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
                                    <input type="text" placeholder="Customer Name" v-model="custName" name="custName" class="form-control"  />
                                </div>

                                <div class="form-group" >
                                    <input type="text" placeholder="Customer Address" v-model="custAddress" name="custAddress" class="form-control"  />
                                </div>

                                <div class="form-group" >
                                    <input type="number" placeholder="Customer Phone" v-model="custPhone" name="custPhone" class="form-control"  />
                                </div>

                             
                        
                                <div class="provinces-dropdown">
                                    <select v-model="selectedProvinces" @change="getCities()" placeholder="select" name="selectedProvinces" :hide-selected="true">
                                        <option disabled value="">Please select one</option>
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
                                 
                                    
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Shipment Price"
                                            v-model="price"
                                            disabled>
                                </base-input>

                                <div class="text-center">
                                    <button class="btn" type="submit">Create Dropship</button>
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
    name:'Dropship',
    el: '#app',
    data(){

        
        return {
            ItemName: "",
            custName: "",
            custAddress: "",
            custPhone: "",
            kota: "",
            postalCode: "",
            provinsi: "",
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
                const response = await axios.get(`http://localhost:3000/city/province/${this.selectedProvinces.id}`); //cara ngambil id province yang dipilih gimana ya?
                this.cities = response.data;
            } catch (err) {
                console.log(err);
            }
        },
        async getPostalCode() {
            this.postalCode = this.selectedCities.postal_code
        },

          handleSubmit: function(e){
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
                    ItemName: e.target.elements.ItemName.value,
                    custName: e.target.elements.custName.value,
                    custAddress: e.target.elements.custAddress.value,
                    custPhone: e.target.elements.custPhone.value,
                    selectedProvinces: e.target.elements.selectedProvinces.value,
                    selectedCities: e.target.elements.selectedCities.value,
                    postalCode:e.target.elements.postalCode.value,
                    // address: e.target.elements.address.value,
                    // password: e.target.elements.password.value
                }
                axios.post('http://localhost:3000/users/dropship/submission', data)
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
</style>

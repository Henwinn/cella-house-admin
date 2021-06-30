<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
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
                             Update Item
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Update Your Item</small>
                            </div>
                            <form id="app" @submit.prevent="updateItem" method="post">
                                <p v-if="errors.length">
                                    <b>Please correct the following error(s):</b>
                                   
                                </p>

                                <div class="form-group" >
                                    <input type="text" placeholder="Name" v-model="name" name="name" class="form-control"  />
                                </div>

                                  <div class="form-group" >
                                    <input type="number" placeholder="Quantity" v-model="qty" name="qty" class="form-control"  />
                                </div>

                                <div class="form-group" >
                                    <input type="number" placeholder="Price" v-model="price" name="price" class="form-control"  />
                                </div>

                                <select v-model="categoryName">
                                    <option disabled>Please Select One</option>
                                    <option v-for="category in categories" :key="category.name" :value="category.name"> {{category.name}} </option>
                                </select>

                                 <div class="form-group" >
                                    <input type="text" placeholder="Variant" v-model="variant" name="variant" class="form-control"  />
                                </div>

                                <div class="form-group" >
                                    <input type="text" placeholder="Note" v-model="note" name="note" class="form-control"  />
                                </div>

                                 <div class="text-center">
                                    <!-- <base-button type="primary" class="my-4" @click="saveItem">Add Item</base-button> -->
                                    <button class="btn" type="submit" >    Add </button>
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
    name: "AddItem",
    el: '#app',
    data() {
        return {
            name:"",
            qty:"",
            price:"",
            categoryName: "",
            variant: "",
            note: "",
            status: "",
            errors: [],
            success: []
        };
    },
    created: function () {
        this.getProductById();
    },
    methods: {
        async getProductById() { //getbyid
        try {
          const response = await axios.get (`http://localhost:3000/users`);
          this.name = response.data.name;
          this.qty = response.data.qty;
          this.price = response.data.price;
          this.categoryName = response.data.categoryName;
          this.variant = response.data.variant;
          this.note = response.data.note;
          
           
        }catch (err) {
          console.log(err);
        }
      },
         

        async updateItem(val){
            try {
                await axios.post(`http://localhost:3000/products/update?prodId=${val}`, {
                    name: this.name,
                    qty: this.qty,
                    price: this.price,
                    categoryName: this.category,
                    variant: this.variant,
                    note: this.note,
                });
                this.itemName = "";
                this.qty = "";
                this.price = "";
                this.category = "";
                this.variant = "";
                this.note = "";
                
            }catch (err) {
                console.log(err);
            }
        },
    },
    //  saveItem: function(e){
        //     this.errors = [];
            
        //     if (!this.name) {
        //         this.errors.push("Name required");
        //     }

        //     if (!this.qty) {
        //         this.errors.push("Quantity required");
        //     }

        //     if (!this.price) {
        //         this.errors.push("Price required");
        //     }
            
        //     if (!this.categoryName) {
        //         this.errors.push("Select the Category required");
        //     }

        //     if (!this.variant) {
        //         this.errors.push("Variant required");
               
        //     }
            

        //      if (!this.errors.length) {
        //         let data = {
        //             name: this.name,
        //             qty: e.target.elements.qty.value,
        //             price: e.target.elements.price.value,
        //             categoryName: e.target.elements.categoryName.value,
        //             variant: e.target.elements.variant.value,
        //             note: e.target.elements.note.value,
                  
        //         }
        //         axios.post('http://localhost:3000/products/add', data)
        //         .then(respond => {
        //             if(respond.data == 'success'){
        //                 alert('success add item')
                        
                       
        //             } else {
        //                 alert('fail')
        //             }
        //         })
        //     }
            
        //     e.preventDefault();
        // }
};
</script>
<style>
.uploadimage{
 display: flex;
 flex-direction: row;
}

.uploadimage > button{
 margin-left: 10px;
 padding-right: 10px;
 padding-left: 10px;
 height: 35px;
 margin-top: 2px;
}

button {
    background-color: #344675;
    color: white;
    border: none;
}

</style>

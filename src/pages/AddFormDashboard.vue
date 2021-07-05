<template>
    <card>
    
        <template>
           <h5 slot="header" class="title">Add Item</h5>
            <form @submit.prevent="saveItem" method="post">
                <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
                <ul>
                 <li v-for="error in errors">{{ error }}</li> <!-- yang ini emang cacing merah ya, jangan di apa apain  -->
                </ul>
                </p>

                                        <div class="row">
                                <div class="col-md-5 pr-md-1">
                                    <div class="form-group" >
                                        <input  type="text" placeholder="Item Name" v-model="name" name="name" class="form-control"  />
                                    </div>
                                </div>
                                <div class="col-md-4 pl-md-1">
                                    <div class="form-group" >
                                        <input  type="number" placeholder="Quantity" v-model="qty" name="qty" class="form-control"  />
                                    </div>
                                </div>
                                <div class="col-md-3 px-md-1">
                                    <div class="form-group" >
                                        <input  type="number" placeholder="Price" v-model="price" name="price" class="form-control"  />
                                    </div>
                                </div>
                                
                                </div>
                                
                                <div class="row">
                                <div class="categories-dropdown">
                                    <select v-model="categoryName">
                                        <option disabled>Please Select One</option>
                                        <option v-for="category in categories" :key="category.name" :value="category.name"> {{category.name}} </option>
                                    </select>
                                </div>
                                <div class="col-md-6 pl-md-1">
                                    <div class="form-group" >
                                    <input  type="text" placeholder="Variant" v-model="variant" name="variant" class="form-control"  />
                                    </div>
                                </div>
                                </div>
                                <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group" >
                                    <input  type="text" placeholder="Note" v-model="note" name="note" class="form-control"  />
                                    </div>
                                </div>
                                </div>

                                 <div class="text-center">
                                    <!-- <base-button type="primary" class="my-4" @click="saveItem">Add Item</base-button> -->
                                    <button class="btn" type="submit" >    Add </button>
                                </div>
                            </form>
                        </template>
                    </card>
            
</template>
<script>
import axios from "axios";
export default {
    name: "AddItem",
    data() {
        return {
            name:"",
            qty:"",
            price:"",
            categoryName: "",
            categories: [],
            variant: "",
            note: "",
            status: "",
            errors: [],
            success: []
        };
    },
    created() {
        this.getCategories();
    },
    methods: {
        getCategories: async function(){
            try {
                const response = await axios.get('http://localhost:3000/categories')
                this.categories = response.data
            } catch(err) {
                console.log(err)
            }
        },

        saveItem: function(e){
            this.errors = [];
            
            if (!this.name) {
                this.errors.push("Name required");
            }

            if (!this.qty) {
                this.errors.push("Quantity required");
            }

            if (!this.price) {
                this.errors.push("Price required");
            }
            
            if (!this.categoryName) {
                this.errors.push("Select the Category required");
            }

            if (!this.variant) {
                this.errors.push("Variant required");
                
            }
        
            if (!this.errors.length) {
                let data = {
                    name: this.name,
                    qty: e.target.elements.qty.value,
                    price: e.target.elements.price.value,
                    categoryName: this.categoryName,
                    variant: e.target.elements.variant.value,
                    note: e.target.elements.note.value,
                    
                }
                axios.post('http://localhost:3000/users/products/add', data) //ini untuk testing add product, nanti diubah ke route aslinya
                .then(respond => {
                    if(respond.data == 'success'){
                        alert('success add item')
                        this.$router.push('dashboard')
                        
                        
                    } else {
                        alert('fail')
                    }
                })
            }
            
            e.preventDefault();
        }
         

        // async saveItem(){
        //     try {
        //         await axios.post("http://localhost:3000/users", {
        //             name: this.itemName,
        //             qty: this.qty,
        //             price: this.price,
        //             categoryName: this.category,
        //             variant: this.variant,
        //             note: this.note,
        //             status: this.status
        //         });
        //         this.itemName = "";
        //         this.qty = "";
        //         this.price = "";
        //         this.category = "";
        //         this.variant = "";
        //         this.note = "";
        //         this.status = "";
        //         this.$router.push('dashboard');
        //     }catch (err) {
        //         console.log(err);
        //     }
        // },
    },
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

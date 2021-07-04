<template>
  <card>
    <h5 slot="header" class="title">Edit Item</h5>
    <div class="row">
      <div class="col-md-5 pr-md-1">
        <div class="form-group" >
            <input  type="text" placeholder="Item Name" v-model="name" name="name" class="form-control"  />
        </div>
      </div>
       <div class="col-md-4 pl-md-1">
        <div class="form-group" >
            <input  type="text" placeholder="Quantity" v-model="qty" name="qty" class="form-control"  />
        </div>
      </div>
      <div class="col-md-3 px-md-1">
        <div class="form-group" >
            <input  type="text" placeholder="Price" v-model="price" name="price" class="form-control"  />
        </div>
      </div>
     
    </div>
     <select v-model="categoryName" name="categoryName">
                                    <option disabled>Please Select One</option>
                                    <option v-for="category in categories" :key="category.name" :value="category.name"> {{category.name}} </option>
                                </select>  gak kedetect ini category nya, gak tau kenapa
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <div class="form-group" >
            <input  type="text" placeholder="Category" v-model="categoryName" name="categoryName" class="form-control"  />
        </div>
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
    
    <div class="row">
      <div class="col-md-8">
        <base-input>
          <label>Description</label>
          <textarea rows="4" cols="80"
                    class="form-control"
                    placeholder="Here can be your description"
                    v-model="model.about">

              </textarea>
        </base-input>
      </div>
    </div>
    <button class="btn" type="submit" @change="updateProfile">Save</button>
  </card>
</template>
<script>
import axios from "axios";
export default {
   

     props: {
      model: {
        type: Object,
        default: () => {
          return {

          };
        }
      }
    },
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
        async getProductById(id) { //getbyid
        try {
          const response = await axios.get (`http://localhost:3000/products/${id}`);
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
                    categoryName: this.categoryName,
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

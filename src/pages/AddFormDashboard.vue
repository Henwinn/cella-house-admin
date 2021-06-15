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
                               Add Item
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Input Your Item</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name"
                                            v-model="itemName"
                                           >
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Quantity"
                                            v-model="qty"
                                          >
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Price"
                                            v-model="price"
                                      >
                                </base-input>
                                <!-- <div class="category">
                                    <base-dropdown title-classes="btn btn-secondary" title="Category" >
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                    </base-dropdown>
                                </div> -->
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Category"
                                            v-model="category"
                                      >
                                </base-input>
                               
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Variant"
                                            v-model="variant"
                                          >
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Note"
                                            v-model="note"
                                           >
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Status"
                                            v-model="status"
                                           >
                                </base-input>
                               <!-- <div class="uploadimage">
                                    <base-input alternative
                                                class="mb-3"
                                                placeholder="Choose Image" >
                                            
                                    </base-input>
                                    <button>Upload</button>
                               </div> -->
                                <div class="text-center">
                                    <!-- <base-button type="primary" class="my-4" @click="saveItem">Add Item</base-button> -->
                                    <button class="button is success" @click="saveItem">    Add </button>
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
    data() {
        return {
            itemName: "",
            qty: "",
            price: "",
            category: "",
            variant: "",
            note: "",
            status: "",
        };
    },
    methods: {
        async saveItem(){
            try {
                await axios.post("http://localhost:3000/users", {
                    name: this.itemName,
                    qty: this.qty,
                    price: this.price,
                    categoryName: this.category,
                    variant: this.variant,
                    note: this.note,
                    status: this.status
                });
                this.itemName = "";
                this.qty = "";
                this.price = "";
                this.category = "";
                this.variant = "";
                this.note = "";
                this.status = "";
                this.$router.push("/dashboard");
            }catch (err) {
                console.log(err);
            }
        },
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

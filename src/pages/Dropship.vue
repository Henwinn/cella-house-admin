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
                                </base-input>
                                  <base-dropdown title-classes="btn btn-secondary" title="Kota" v-model="city" >
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                 </base-dropdown>
                                   <base-dropdown title-classes="btn btn-secondary" title="Provinsi" v-model="province" >
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
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
export default {
    data(){
        return {
            itemName: "",
            custName: "",
            custAddress: "",
            custPhone: "",
            city: "",
            postalCode: "",
            province: "",
            price: ""
        };
    }
};
</script>
<style>
</style>

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
                                Update Item
                            </div>
                        </template>
                        <template>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Item"
                                            >
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name"
                                            >
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Quantity"
                                           >
                                </base-input>
                               <div class="category">
                                    <base-dropdown title-classes="btn btn-secondary" title="Category" >
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                    </base-dropdown>
                                </div>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Price"
                                            >
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Weight"
                                            >
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Size"
                                            >
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="City"
                                            >
                                </base-input>
                               <div class="uploadimage">
                                    <base-input alternative
                                                class="mb-3"
                                                placeholder="Choose Image" >
                                            
                                    </base-input>
                                    <button>Upload</button>
                               </div>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">Update Item</base-button>
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
export default {};
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

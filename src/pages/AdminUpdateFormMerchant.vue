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
                                Merchant
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Update Merchant</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Name"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Owner"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Address"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Number"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Description"
                                            addon-left-icon="ni ni-hat-3">
                                </base-input>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">Update</base-button>
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
</style>

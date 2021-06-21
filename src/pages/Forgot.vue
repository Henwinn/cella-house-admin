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
                                <small>Forgot Password</small>
                            </div>
                        </template>
                        <template>
                            <!-- <form action="http://localhost:3000/users/login" method="POST"> -->
                            <form @submit.prevent="handleSubmit">
                                <!-- <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            v-model="username"
                                            name="username"
                                       >
                                </base-input> -->
                                <input type="text" class="form-control" v-model="email" name="email"  placeholder="Email">
                                <!-- <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            v-model="password"
                                            name="password"
                                         >
                                </base-input> -->
                                
                                <div class="text-center">
                                    <button type="submit" class="btn" value="Login">submit</button>
                                    
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
    name: "Forgot",
    data(){
        return{
            email:''
        }
    },
    methods: {
       async handleSubmit(){
           const response = await axios.post('forgot', { //forgot ada di db?
               email: this.email
           });


           console.log(response)
        }
    }
};
</script>
<style>
.form-control{
    margin-bottom: 10px;
}
</style>

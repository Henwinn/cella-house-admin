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
                                <small>Log In</small>
                            </div>
                        </template>
                        <template>
                            <!-- <form action="http://localhost:3000/users/login" method="POST"> -->
                            <form @submit="login">
                                <!-- <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            v-model="username"
                                            name="username"
                                       >
                                </base-input> -->
                                <input type="text" class="form-control" v-model="username" name="username"  placeholder="Username">
                                <!-- <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            v-model="password"
                                            name="password"
                                         >
                                </base-input> -->
                                <input type="password" class="form-control" v-model="password" name="password"  placeholder="Password">
                                
                                <div class="text-center">
                                    <button type="submit" class="btn" value="Login">submit</button>
                                    
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                           
                        </div>
                        <div class="col-6 text-right">
                            <a href="#/register" class="text-light">
                                <small>Create new account</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from "axios";

export default {
    name: "Login",
    methods: {
        login(e) {
            let self = this;
            e.preventDefault()
            let data = {
                username: e.target.elements.username.value,
                password: e.target.elements.password.value
            }
            axios.post("http://localhost:3000/users/login", data)
            .then((response) => {
                if(response.data == 'success'){
                    console.log("logged")
                    this.$router.push({name: 'dashboard'})
                } else {
                    console.log("fail")
                    alert('username or password incorrect!')
                }
            })
            .catch(err => console.log(err))
        }
    }
};
</script>
<style>
.form-control{
    margin-bottom: 10px;
}
</style>

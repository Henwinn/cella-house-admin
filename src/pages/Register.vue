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
                               REGISTER
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Create Account</small>
                            </div>


                            <form @submit.prevent="handleSubmit">


                                <div class="form-group" >
                                    <input type="text" placeholder="Fullname" v-model="fullName" class="form-control"  />
                                </div>

                                <div class="form-group" >
                                    <input type="text" placeholder="Store name" v-model="storeName" class="form-control"  />
                                </div>

                                <div class="form-group" >
                                    <input type="text" placeholder="Username" v-model="userName" class="form-control"  />
                                </div>

                                 <div >
                                    <date-picker v-model="dob" valueType="format" placeholder="Birth of date"></date-picker>
                                    <br><br>
                                     
                                </div>

                                 <div class="gender">
                                     Gender<br>
                                     <input type="radio" id="male" name="gender" v-model="gender" value="male">
                                     <label class ="male" for="male">Male</label> 
                                     <input type="radio" id="female" name="gender" v-model="gender" value="female">
                                     <label class ="female" for="female">Female</label> 
                                 </div>

                                   <div class="form-group" >
                                    <input type="email" placeholder="Store Email" v-model="storeEmail" class="form-control"  />
                                </div>

                                 <div class="form-group" >
                                    <input type="number" placeholder="Phone Number" v-model="storePhoneNum" class="form-control"  />
                                </div>

                                 <div class="form-group" >
                                    <input type="text" placeholder="Store Address" v-model="storeAddress" class="form-control"  />
                                </div>

                                  <div class="form-group" >
                                    <input type="password" placeholder="Password" v-model="password" class="form-control"  />
                                </div>

                                <div class="form-group" >
                                    <input type="password" placeholder="Confirm Password" v-model="confpassword" class="form-control"  />
                                </div>

                                 <div class="text-center">
                                    <button class="btn">Create new account</button>
                                </div>




                                <!-- <base-input type="text" alternative
                                            class="mb-3"
                                            placeholder="Full Name"
                                            v-model="fullName"
                                           >
                                </base-input>
                              <base-input type="text" alternative
                                            class="mb-3"
                                            placeholder="Store Name"
                                            v-model="storeName"
                                           >
                                </base-input>
                                  <base-input type="text" alternative
                                            class="mb-3"
                                            placeholder="Username"
                                            v-model="userName"
                                           >
                                </base-input>
                                 <div class="uploadimage">
                                    <base-input alternative
                                                class="mb-3"
                                                placeholder="Choose Profile Image" >
                                            
                                    </base-input>
                                    <button>Upload</button>
                               </div>
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Owner's Date of Birth"
                                            v-model="dob"
                                            >
                                </base-input> -->

                               
                                <!-- <base-input type="email" alternative
                                            class="mb-3"
                                            placeholder="Store Email"
                                            v-model="storeEmail"
                                            >
                                            
                                </base-input>
                                <base-input type="number" alternative
                                            class="mb-3"
                                            placeholder="Store Phone Number"
                                            v-model="storePhoneNum"
                                            >
                                </base-input>
                                <base-input type="text" alternative
                                            class="mb-3"
                                            placeholder="Store Address"
                                            v-model="storeAddress"
                                            >
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            v-model="password"
                                            >
                                </base-input>
                                 <base-input alternative
                                            type="password"
                                            placeholder="Confirm Password"
                                            v-model="confpassword"
                                           >
                                </base-input> -->
                                
                                
                               
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
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    name:'Register',
    components: { DatePicker },
    data() {
        return {
            fullName: "",
            storeName: "",
            userName:"",
           dob: null,
           gender: "",
           storeEmail: "",
          storePhoneNum: "",
          storeAddress: "",
           password: "",
          confpassword: "",  
        };
    },
    methods: {
        async handleSubmit(){
           const response = await axios.post('users',  { //gak bisa di post
                fullName: this.fullName,
                storeName: this.storeName,
                userName: this.userName,
                dob: this.dob,
                gender: this.gender,
                storeEmail: this.storeEmail,
                storePhoneNum: this.storePhoneNum,
                storeAddress: this.storeAddress,
                password: this.password,
                confpassword: this.confpassword

            });

            console.log(response)
        }
    }
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

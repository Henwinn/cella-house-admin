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
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Full Name"
                                            v-model="fullName"
                                           >
                                </base-input>
                              <base-input alternative
                                            class="mb-3"
                                            placeholder="Store Name"
                                            v-model="storeName"
                                           >
                                </base-input>
                                  <base-input alternative
                                            class="mb-3"
                                            placeholder="Username"
                                            v-model="userName"
                                           >
                                </base-input>
                                 <!-- <div class="uploadimage">
                                    <base-input alternative
                                                class="mb-3"
                                                placeholder="Choose Profile Image" >
                                            
                                    </base-input>
                                    <button>Upload</button>
                               </div> -->
                                 <base-input alternative
                                            class="mb-3"
                                            placeholder="Owner's Date of Birth"
                                            v-model="dob"
                                            >
                                </base-input>
                                 <div class="gender">
                                     <input type="radio" id="male" name="gender" value="male">
                                     <label class ="male" for="male">Male</label> 
                                     <input type="radio" id="female" name="gender" value="female">
                                     <label class ="female" for="female">Female</label> 
                                 </div>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Store Email"
                                            v-model="storeEmail"
                                            >
                                            
                                </base-input>
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Store Phone Number"
                                            v-model="storePhoneNum"
                                            >
                                </base-input>
                                <base-input alternative
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
                                </base-input>
                                <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">Create new account</base-button>
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
    data() {
        return {
            fullName: "",
            storeName: "",
            userName:"",
           dob: "",
           storeEmail: "",
         storePhoneNum: "",
          storeAddress: "",
           password: "",
          confpassword: "",
           
        };
    },
    methods: {
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

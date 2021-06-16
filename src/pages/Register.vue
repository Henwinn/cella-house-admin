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
                                 <!-- <base-input alternative
                                            class="mb-3"
                                            placeholder="Owner's Date of Birth"
                                            v-model="dob"
                                            >
                                </base-input> -->

                                <div class="dob">
                                    <date-picker v-model="dob" valueType="format" placeholder="Birth of date"></date-picker>
                                    <br><br>
                                     
                                </div>

                                 <div class="gender">
                                     <div>
                                        <label class = "lbl-gender">Gender</label>
                                     </div>
                                     <div class="radio-btn">
                                         <span class="male-radio-btn">
                                            <input type="radio" id="male" name="gender" value="male">
                                            <label class ="male" for="male">Male</label> 
                                         </span>
                                         <span class="female-radio-btn">
                                            <input type="radio" id="female" name="gender" value="female">
                                            <label class ="female" for="female">Female</label> 
                                         </span>
                                     </div>
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
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    components: { DatePicker },
    data() {
        return {
            fullName: "",
            storeName: "",
            userName:"",
           dob: null,
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
.mx-input {
    background-color: #26293D;
    border: 1px solid #273553;
    font-size: 12px;
    padding-left: 18px;
}
.dob {
   margin-bottom: -10px;
}

.gender {

    padding-left: 5px;
}

.gender > .radio-btn > .male-radio-btn {
   margin-right: 10px;
}

.gender > .radio-btn > .male-radio-btn > .male {
    margin-left: 5px;
}

.gender > .radio-btn > .female-radio-btn > .female {
    margin-left: 5px;
}

</style>

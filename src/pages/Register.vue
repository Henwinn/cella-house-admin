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


                            <form id="app" @submit.prevent="handleSubmit" method="post">

                                 <p v-if="errors.length">
                                    <b>Please correct the following error(s):</b>
                                    <ul>
                                    <li v-for="error in errors">{{ error }}</li> <!-- yang ini emang cacing merah ya, jangan di apa apain  -->
                                    </ul>
                                </p>
<!--  -->

                                <div class="form-group" >
                                    <input type="text" placeholder="Fullname" v-model="fullName" name="full_name" class="form-control"  />
                                </div>

                                <div class="form-group" >
                                    <input type="text" placeholder="Store name" v-model="storeName" name="store_name" class="form-control"  />
                                </div>
                                
                                <div class="row" v-if="hideStorename">
                                    <div class="col-sm-12"><small style="color: red; padding-left: 4%;"><i>Store name already exist, please choose another store name!</i></small></div>
                                </div>

                                <div class="form-group" >
                                    <input type="text" placeholder="Username" v-model="userName" name="username" class="form-control"  />
                                </div>

                                <div class="row" v-if="hideUsername">
                                    <div class="col-sm-12"><small style="color: red; padding-left: 4%;"><i>Username already exist, please choose another username!</i></small></div>
                                </div>

                                 <div class="dob">
                                    <date-picker v-model="dob"  valueType="format"  name="dob" placeholder="Date of Birth"></date-picker>
                                    <!-- <input type="date" v-model="birthdate" value="date" name="dob" placeholder="Date Of Birth"/> -->
                                    <br><br>
                                </div>

                                 <div class="gender">
                                     <div>
                                        <label class = "lbl-gender">Gender</label>
                                     </div>
                                     <div class="radio-btn">
                                         <span class="male-radio-btn">
                                            <input type="radio" id="male" v-model="gender" name="gender" value="male">
                                            <label class ="male" for="male">Male</label> 
                                         </span>
                                         <span class="female-radio-btn">
                                            <input type="radio" id="female" v-model="gender" name="gender" value="female">
                                            <label class ="female" for="female">Female</label> 
                                         </span>
                                     </div>
                                 </div>

                                <div class="form-group" >
                                    <input type="email" placeholder="Store Email" v-model="storeEmail" name="email" class="form-control"  />
                                </div>

                                <div class="row" v-if="hideStoreemail">
                                    <div class="col-sm-12"><small style="color: red; padding-left: 4%;"><i>This email has been used!</i></small></div>
                                </div>

                                 <div class="form-group" >
                                    <input type="number" placeholder="Phone Number" v-model="storePhoneNum" name="phone" class="form-control"  />
                                </div>

                                 <div class="form-group" >
                                    <input type="text" placeholder="Store Address" v-model="storeAddress" name="address" class="form-control"  />
                                </div>

                                  <div class="form-group" >
                                    <input type="password" placeholder="Password" v-model="password" name="password" class="form-control"  />
                                </div>

                                <div class="form-group" >
                                    <input type="password" placeholder="Confirm Password" v-model="confpassword" class="form-control"  />
                                </div>

                                 <div class="text-center">
                                    <button class="btn" type="submit">Create new account</button>
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
import _ from "lodash";
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    name:'Register',
    el: '#app',
    components: { DatePicker },
    data() {
        return {
            fullName: "",
            storeName: "",
            userName:"",
            dob: "",
            gender: "",
            storeEmail: "",
            storePhoneNum: "",
            storeAddress: "",
            password: "",
            confpassword: "", 
            errors: [],
            success: [],
            hideUsername: false,
            hideStorename: false,
            hideStoreemail: false
        };
    },
    watch: {
        userName(){
            this.getUsername()
        },
        storeName(){
            this.getStorename()
        },
        storeEmail(){
            this.getEmail()
        }
    },
    created() {
        this.getUsername = _.debounce(this.getUsername, 600),
        this.getStorename = _.debounce(this.getStorename, 600)
        this.getEmail = _.debounce(this.getEmail, 600)
    },
    methods: {
        handleSubmit: function(e){
            this.errors = [];
            
            if (!this.fullName) {
                this.errors.push("Name required");
            }

            if (!this.storeName) {
                this.errors.push("Store Name required");
            }

            if (!this.userName) {
                this.errors.push("username required");
            }
            
            if (!this.dob) {
                this.errors.push("Date of birth required");
            }

            if (!this.gender) {
                this.errors.push("Select the gender");
            }

            if (!this.storeEmail || !this.validEmail(this.storeEmail)) {
                this.errors.push("Email required");

            }

            if (!this.storePhoneNum) {
                this.errors.push("Phone Number required");
               
            }
            if (!this.storeAddress) {
                this.errors.push("Address required");
            }

            // if (!this.password ) {

            //     if (this.password > 6) {
            //         this.errors.push("password min 6 characters");
            //     }
            //     this.errors.push("password required");
            // }

            if (!this.confpassword) {
                this.errors.push("confirm password required");
            }else if(this.confpassword != this.password){
                this.errors.push("Confirm password and password must be same");
            }
            


            //yang password ini gimana ya bkin nya? sama username nya itu cek di database biar gak name is choosen gmna?

           

            if (!this.errors.length) {
                let data = {
                    full_name: e.target.elements.full_name.value,
                    store_name: e.target.elements.store_name.value,
                    username: e.target.elements.username.value,
                    dob: this.dob, 
                    gender: e.target.elements.gender.value,
                    email: e.target.elements.email.value,
                    phone: e.target.elements.phone.value,
                    address: e.target.elements.address.value,
                    password: e.target.elements.password.value,
                }
                if(this.hideUsername || this.hideStorename){
                    return
                } else {
                    axios.post('http://localhost:3000/users/register', data)
                    .then(respond => {
                        if(respond.data == 'success'){
                            alert('success')
                            this.$router.push('login')
                        } else {
                            alert('fail')
                        }
                    })
                }
            }
            e.preventDefault();
        },
        validEmail: function(storeEmail){
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(storeEmail);
        },
        async getUsername(){
            if(this.userName != ''){
                const response = await axios.get(`http://localhost:3000/users/validation/username?search=${this.userName}`)
                if(response.data == 'not exist'){
                    this.hideUsername = false
                } else {
                    this.hideUsername = true
                }
            } else {
                this.hideUsername = false
            }
        },
        async getStorename(){
            if(this.storeName != ''){
                const response = await axios.get(`http://localhost:3000/users/validation/storeName?search=${this.storeName}`)
                if(response.data == 'not exist'){
                    this.hideStorename = false
                } else {
                    this.hideStorename = true
                }
            } else {
                this.hideStorename = false
            }
        },
        async getEmail(){
            if(this.storeEmail != ''){
                const response = await axios.get(`http://localhost:3000/users/validation/email?search=${this.storeEmail}`)
                if(response.data == 'not exist'){
                    this.hideStoreemail = false
                } else {
                    this.hideStoreemail = true
                }
            } else {
                this.hideStoreemail = false
            }
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
.mx-input {
    background-color: #26293D;
    border: 1px solid #273553;
    font-size: 12px;
    padding-left: 18px;
}
.dob {
   margin-bottom: -18px;
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

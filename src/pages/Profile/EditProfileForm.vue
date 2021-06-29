<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <div class="row">
      <div class="col-md-5 pr-md-1">
        <div class="form-group" >
            <input  type="text" placeholder="Store Name" v-model="storeName" name="storeName" class="form-control"  />
        </div>
      </div>
       <div class="col-md-4 pl-md-1">
        <div class="form-group" >
            <input  type="text" placeholder="Owner's Full Name" v-model="fullName" name="fullName" class="form-control"  />
        </div>
      </div>
      <div class="col-md-3 px-md-1">
        <div class="form-group" >
            <input  type="text" placeholder="Username" v-model="username" name="username" class="form-control"  />
        </div>
      </div>
     
    </div>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <div class="form-group" >
            <input  type="text" placeholder="Store Email" v-model="storeEmail" name="storeEmail" class="form-control"  />
        </div>
      </div>
      <div class="col-md-6 pl-md-1">
        <div class="form-group" >
            <input  type="text" placeholder="Store Number" v-model="storeNumber" name="storeNumber" class="form-control"  />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
  <div class="form-group" >
            <input  type="text" placeholder="Address" v-model="address" name="address" class="form-control"  />
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-8">
        <base-input>
          <label>Description</label>
          <textarea rows="4" cols="80"
                    class="form-control"
                    placeholder="Here can be your description"
                    v-model="model.about">

              </textarea>
        </base-input>
      </div>
    </div>
    <button class="btn" type="submit" @change="updateProfile">Save</button>
  </card>
</template>
<script>
import axios from 'axios';
  export default {
    props: {
      model: {
        type: Object,
        default: () => {
          return {

          };
        }
      }
    },
    data(){
      return {
        storeName: "",
        fullName: "",
        username: "",
        storeEmail: "",
        storeNumber: "",
        address: "",
      };
    },
    created: function () {
      this.getUserById();
    },
    methods: {
      async getUserById() { //getbyid
        try {
          const response = await axios.get ('http://localhost:3000/users');
          this.storeName = response.data.storeName;
          this.fullName = response.data.fullName;
          this.username = response.data.username;
          this.storeEmail = response.data.email;
          this.storeNumber = response.data.phone;
          this.address = response.data.address;

        }catch (err) {
          console.log(err);
        }
      },
      async updateProfile() { //update
        try {
          await axios.put('http://localhost:3000/users/profile?username=${username}',
          {
            storeName: this.storeName,
            fullName: this.fullName,
            username: this.username,
            email: this.storeEmail,
            phone: this.storeNumber,
            address: this.address
          }
          );
          this.storeName = "";
          this.fullName ="";
          this.username ="";
          this.storeEmail="";
          this.storeNumber="";
          this.address="";
        }catch (err){
          console.log(err);
        }
      }
    }

  }
</script>
<style>
</style>

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
            <input  type="text" placeholder="Username" v-model="unsername" name="username" class="form-control"  />
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
      <div class="col-md-4 pr-md-1">
       <div class="form-group" >
            <input  type="text" placeholder="City" v-model="city" name="city" class="form-control"  />
        </div>
      </div>
      <div class="col-md-4 px-md-1">
       <div class="form-group" >
            <input  type="text" placeholder="Country" v-model="country" name="country" class="form-control"  />
        </div>
      </div>
      <div class="col-md-4 pl-md-1">
       <div class="form-group" >
            <input  type="text" placeholder="Postal Zip" v-model="postalZip" name="postalZip" class="form-control"  />
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
    <base-button slot="footer" type="primary" fill>Save</base-button>
  </card>
</template>
<script>
  export default {
    props: {
      model: {
        type: Object,
        default: () => {
          return {

          };
        }
      }
    }
  }
</script>
<style>
</style>

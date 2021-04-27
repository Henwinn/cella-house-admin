<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <div class="row">
      <div class="col-md-5 pr-md-1">
        <base-input label="Store Name"
                  placeholder="Store Name"
                  v-model="model.company"
                  >
        </base-input>
      </div>
       <div class="col-md-4 pl-md-1">
        <base-input label="Owner's Full Name"
                  placeholder="Owner's Full Name">
        </base-input>
      </div>
      <div class="col-md-3 px-md-1">
        <base-input label="Username"
                  placeholder="Username"
                  v-model="model.username">
        </base-input>
      </div>
     
    </div>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <base-input label="Store Email"
                  placeholder="Store Email">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1">
        <base-input label="Store Number"
                  placeholder="Store Number">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <base-input label="Address"
                  v-model="model.address"
                  placeholder="Home Address">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input label="City"
                  v-model="model.city"
                  placeholder="City">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1">
        <base-input label="Country"
                  v-model="model.country"
                  placeholder="Country">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Postal Code"
                  placeholder="ZIP Code">
        </base-input>
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
          return {};
        }
      }
    }
  }
</script>
<style>
</style>

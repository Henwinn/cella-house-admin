<template>
  <div class="row">
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
    <div class="col-md-7">
       <card>
      <h5 slot="header" class="title">Admin Profile</h5>
      <h6>Contact Information</h6>
      <form>     
        <div class="information">
          <div class="contact-info">
                <div class="coninformation">
                  <label> Email</label>
              
                </div>
                <div class="coninformation">
                  <label> Phone Number</label>
  
                </div>
                <div class="coninformation">
                  <label> Address</label>

                </div>
          </div>
        </div>
      </form>
    </card>
    </div>
  </div>
  
</template>
<script>
  import EditProfileForm from './Profile/EditProfileForm';
  import UserCard from './Profile/UserCard'
  export default {
    components: {
      EditProfileForm,
      UserCard
    },
    data() {
      return {
      }
    }
  }
</script>
<style>

</style>

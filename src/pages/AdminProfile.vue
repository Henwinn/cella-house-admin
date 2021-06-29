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
            <table>
              <tr>
                <td>
                  <div class="coninformation">
                    <label> Date of Birth</label>
                  </div>
                </td>
                <td>
                   <div class="coninformation col-md-10">
                 
                
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="coninformation">
                    <label> Email</label>
                  </div>
                </td>
                <td>
                   <div class="coninformation col-md-10">
              
                  
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="coninformation">
                    <label> Phone Number</label>
                  </div>
                </td>
                <td>
                  <div class="coninformation col-md-10">
                  
                 
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="coninformation">
                    <label> Address</label>
                  </div>
                </td>
                <td>
                  <div class="coninformation col-md-10">
                   
                
                  </div>
                </td>
              </tr>
              
            </table>
          </div>
        </div>
      </form>
    </card>
    </div>
  </div>
  
</template>
<script>
  import axios from "axios";
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
    },
    created(){
      this.getUsers();
    },
    methods: {
      async getUsers() {
        try {
          const response = await axios.get("http://localhost:3000/users"); //route ini untuk testing aja karena perlu login kalau pakai route asli
          this.users = response.data.rows;
        } catch (err) {
          console.log(err);
          alert('err: ' + err)
        }
      }
    }
  }
</script>
<style>

</style>

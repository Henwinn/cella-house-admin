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
                    <label> *14 July 1997</label>
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
                    <label> *henwin@gmail.com</label>
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
                    <label> *08124456538192</label>
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
                    <label> *Jl. Nusantara No. 5, Palmerah, Jakarta Barat, DKI Jakarta</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="coninformation">
                    <label> City</label>
                  </div>
                </td>
                <td>
                  <div class="coninformation col-md-10">
                    <label> *Jakarta</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="coninformation">
                    <label> Country</label>
                  </div>
                </td>
                <td>
                  <div class="coninformation col-md-10">
                    <label>*Indonesia</label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="coninformation">
                    <label> ZIP Code</label>
                  </div>
                </td>
                <td>
                  <div class="coninformation col-md-10">
                    <label> *76126</label>
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

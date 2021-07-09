<template>
<div class="profile-admin">
  <div class="col-md-4">
    <card type="user">
      <p class="card-text">
      </p>
      <div class="author">
        <div class="block block-one"></div>
        <div class="block block-two"></div>
        <div class="block block-three"></div>
        <div class="block block-four"></div>
        <a href="#">
          
          <img v-bind:src="user.profilePic" class="avatar" @error='alternativeImg()' />
          

          <h5 class="title">{{ user.fullName }}</h5>
          <h5 class="title">{{ user.username }} </h5>
          <label> Halo, Admin {{ user.fullName }} </label>
        </a>
      </div>
      <p></p>

      <center>
        <router-link :to="{ path: 'editProfileAdmin', query: { id: user.id }}">
              <button tag="a"  class="btn" >Edit</button >
          </router-link>
      </center>
      <div slot="footer" class="button-container">
        <base-button icon round class="btn-facebook">
          <i class="fab fa-facebook"></i>
        </base-button>
        <base-button icon round class="btn-twitter">
          <i class="fab fa-twitter"></i>
        </base-button>
        <base-button icon round class="btn-google">
          <i class="fab fa-google-plus"></i>
        </base-button>
      </div>
    </card>
  </div>
    <div class="col-md-7">
       <card>
      <h5 slot="header" class="title">{{ user.fullName }} </h5>
      <h6>Information</h6>
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
                     <label>{{ user.dob }} </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="coninformation">
                    <label> Gender</label>
                  </div>
                </td>
                <td>
                   <div class="coninformation col-md-10">
                     <label>{{ user.gender }} </label>
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
                      <label>{{ user.email}} </label>
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
                    <label> {{ user.phone }} </label>
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
                    <label> {{ user.address }} </label>
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
import Card from '../components/Cards/Card.vue';
  export default {
     components: { Card },
    props: {
      user: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
  data() {
    return {
      
    };
  },
  created(){
    this.getUsers();
  },
  methods: {
    async getUsers(id) {
        try {
          const response = await axios.get(`http://localhost:3000/users/`); 
          this.user = response.data;
          
        } catch (err) {
          console.log(err);
          alert('err: ' + err)
        }
      },
      async alternativeImg(){
        this.user.profilePic = '/img/default-avatar.png'
      }
  }
  }
</script>
<style>
button {
    background-color: #344675;
    color: white;
    border: none;
    margin-bottom: 20px;
}
.profile-admin {
    display: flex;
}
</style>

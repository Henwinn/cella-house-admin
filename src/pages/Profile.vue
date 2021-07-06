<template>
<div class="profile">
  <card type="user">
    <p class="card-text">
    </p>
    <div class="author">
      <div class="block block-one"></div>
      <div class="block block-two"></div>
      <div class="block block-three"></div>
      <div class="block block-four"></div>
      <a href="#">
        <img :src="user.profilePict" class="avatar" alt="...">
        
        
        <h5 class="title">{{ user.storeName }}</h5>
        <h5 class="title">{{ user.fullName }}</h5>
        <h5 class="title">{{ user.username }} </h5>
        <h5 class="title">{{ user.email }}</h5>
        <h5 class="title">{{ user.address }}</h5>
        <h5 class="title">{{ user.number }}</h5>
      </a>
      <p class="description">
        *Store Description
      </p>
    </div>
    <p></p>
    <p class="card-description">
      {{user.description}}
    </p>
    <center>
       <router-link :to="{ path: 'editProfile', query: { id: user.id }}">
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
          const response = await axios.get(`http://localhost:3000/users/7`); //sementara gini dlu
          this.user = response.data;
          
        } catch (err) {
          console.log(err);
          alert('err: ' + err)
        }
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
</style>

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
        <img class="avatar" src="img/anime6.png" alt="...">
          
     <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">select file</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">upload to server</el-button>
        <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
      </el-upload>

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


       <router-link
                          :to="{ name: 'Edit', params: { id: user.id } }"
                          class="button is-info is-small"
                          > 
                          <button href="#/editProfile" class="btn" @click="updateProfile(user.id)">Edit Profile</button >
                          </router-link
                        >
    <button tag="a"
             class="mb-3 mb-sm-0" href="#/editProfile">
             Edit Profile
    </button>
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
  export default {
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
    async getUsers() {
        try {
          const response = await axios.get("http://localhost:3000/users"); 
          this.users = response.data.rows;
        } catch (err) {
          console.log(err);
          alert('err: ' + err)
        }
      },
      submitUpload() {
        this.$refs.upload.submit();
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

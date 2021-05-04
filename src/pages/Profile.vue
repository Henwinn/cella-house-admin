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
          
        <center>                     
          <button>Update</button>
        </center>

        <h5 class="title">*Store Name</h5>
        <h5 class="title">*Owner</h5>
        <h5 class="title">*Username</h5>
        <h5 class="title">*Store Email</h5>
        <h5 class="title">*Store Address</h5>
        <h5 class="title">*Store Number</h5>
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
    <base-button tag="a"
             class="mb-3 mb-sm-0" href="#/editProfile">
             Edit Profile
             </base-button>
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

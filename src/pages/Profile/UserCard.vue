<template>
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
        <h5 class="title">*Admin Name</h5>
      </a>
      <p class="description">
        *Admin Position
      </p>
    </div>
    <p></p>
    <p class="card-description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Impedit odio aut eaque quas, doloremque sed maxime deleniti 
      tempora ea id aliquid laborum ratione temporibus, ullam similique 
      beatae accusantium, ipsum ducimus?
    </p>
    <center>
    <base-button tag="a"
             class="mb-3 mb-sm-0" href="#/admin/editProfileAdmin">
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
</template>
<script>
  export default {
    props: {
      user: {
        default: () => {
          return {};
        }
      }
    }
  }
</script>
<style>
</style>

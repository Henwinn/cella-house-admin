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
         <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :auto-upload="false">
            <el-button slot="trigger" class="btn" type="primary">select file</el-button>
            <el-button style="margin-left: 10px;" class="btn" size="small" type="success" @click="submitUpload">upload to server</el-button>
            <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
          </el-upload>
        <h5 class="title">*Henwin</h5>
        <h5 class="title">*hen_win</h5>
      </a>
    </div>
    <p></p>
    <p class="card-description">
     
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
button {
    background-color: #344675;
    color: white;
    border: none;
}
</style>

<template>
<div class="profile">
  <card type="user">
    <p class="card-text">
    </p>
    <div class="author">

      <a href="#">
        <img class="avatar" src="img/anime6.png" alt="...">
        <h5 class="title">*Store Name</h5>
        <h5 class="title">*Store Owner</h5>
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
  <div class="search">
               <base-input alternative class="mb-3"
                placeholder="Search"
                addon-left-icon="ni ni-hat-3">
                </base-input>
               <base-button tag="a" 
             class="mb-3 mb-sm-0">
             Search
             </base-button>
  </div>

            <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
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
      users: [],
    }
  },
  created: function (){
    this.getMerchantProfileById();
  },
  methods: {
    async getMerchantProfileById(id){
        try{
          const response = await axios.get("http://localhost:3000/admin/user")
          this.users = response.data;
        } catch (err) {
          console.log(err)
        }
      },
  }
  }
</script>
<style>
</style>

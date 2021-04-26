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
    <center>
    <base-button tag="a" href="#/admin/formUpdateMerchant"
             class="mb-3 mb-sm-0">
             Update Profile Merchant
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
    <base-button tag="a" href="#/admin/formAddItem"
             class="mb-3 mb-sm-0">
             Add
    </base-button>
  <base-table-profile-merchant :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary">
  </base-table-profile-merchant>
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
import BaseTableProfileMerchant from '../components/BaseTableProfileMerchant.vue';
const tableColumns = ["Item","Name","Qty","Category", "Price", "Weight","Size","City","image"] ;
const tableData = [
  {
    id: 1,
    item: "T-shirts",
    name: "Jose Carillo",
    qty: "10",
    category: "Clothes",
    price: "20.000",
    weight: "10kg",
    size: "",
    image: ""
  
  },
  {
    id: 2,
    name: "Miguel Gallardo",
  },
  {
    id: 3,
    name: "Antonio Escobar",
   
  },
  {
    id: 4,
    name: "Dakota Rice",
  
  },
  {
    id: 5,
    name: "Mason Porter",
  },
  {
    id: 6,
    name: "Doris Greene",
 
  },
  {
    id: 7,
    name: "Philip Chaney",
    
  },
  {
    id: 8,
    name: "Minerva Hooper",
    
  },
  {
    id: 9,
     name: "Jon Porter",
 
  },
  {
    id: 10,
    name: "Andres Smith",
  }
];
  export default {
    props: {
      user: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
    components: {
    BaseTableProfileMerchant
  },
  data() {
    return {
      table1: {
        title: "LIST Dropship",
        columns: [...tableColumns],
        data: [...tableData]
      },
    };
  }
  }
</script>
<style>
</style>

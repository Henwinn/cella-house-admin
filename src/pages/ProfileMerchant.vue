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
    <base-button tag="a" href="#/admin/"
             class="mb-3 mb-sm-0">
             Add
    </base-button>
  <base-table :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary">
            </base-table>
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
import { BaseTable } from "@/components";
const tableColumns = ["Barang","Qty","Name", "Address", "City","weight","Action"] ;
const tableData = [
  {
    id: 1,
    barang: "Bajuu",
    qty: "10",
    name: "Dakota Rice",
    resi: "$36.738",
    address: "Niger",
    city: "Oud-Turnhout",
    weight: "10 kg",
  
  },
  {
    id: 2,
    name: "Minerva Hooper",
    resi: "$23,789",
    address: "Curaçao",
    city: "Sinaai-Waas"
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    resi: "$56,142",
    address: "Netherlands",
    city: "Baileux"
  },
  {
    id: 4,
    name: "Philip Chaney",
    resi: "$38,735",
    address: "Korea, South",
    city: "Overland Park"
  },
  {
    id: 5,
    name: "Doris Greene",
    resi: "$63,542",
    address: "Malawi",
    city: "Feldkirchen in Kärnten"
  },
  {
    id: 6,
    name: 'Mason Porter',
    resi: '$98,615',
    address: 'Chile',
    city: 'Gloucester'
  },
  {
    id: 7,
    name: 'Mason Porter',
    resi: '$98,615',
    address: 'Chile',
    city: 'Gloucester'
  },
  {
    id: 8,
    name: 'Mason Porter',
    resi: '$98,615',
    address: 'Chile',
    city: 'Gloucester'
  },
  {
    id: 9,
    name: 'Mason Porter',
    resi: '$98,615',
    address: 'Chile',
    city: 'Gloucester'
  },
  {
    id: 10,
    name: 'Jon Porter',
    resi: '$78,615',
    address: 'Portugal',
    city: 'Gloucester'
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
    BaseTable
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

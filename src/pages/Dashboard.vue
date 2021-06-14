<template>
    <div class="row">
      <div class="col-12">
        <card>
          <div class="table-responsive">
            <h1>Dashboard</h1>
            <div class="search">
               <base-input alternative class="mb-3"
                placeholder="Search by Item & Name"
       >
                </base-input>
               <base-button tag="a"
             class="mb-3 mb-sm-0">
             Search
             </base-button>
            </div>
             <base-button tag="a" href="#/formAddItem"
             class="mb-3 mb-sm-0">
             Add
             </base-button>
             <base-button tag="a"
             class="mb-3 mb-sm-0">
             Export Data
             </base-button>
             <table class="table is-striped is-bordered mt-2 is-fullwidth">
               <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Category Name</th>
                    <th>Variant</th>
                    <th>Note</th>
                    <th>Status</th>
                    <th class="has-text-centered">Actions</th>
                  </tr>
               </thead>
               <tbody>

                    <tr v-for="product in products" :key="product.id">
                      <td>{{ product.name }}</td>
                      <td>{{ product.qty }}</td>
                      <td>{{ product.price }}</td>
                      <td>{{ product.categoryName }}</td>
                      <td>{{ product.variant }}</td>
                      <td>{{ product.note }}</td>
                      <td>{{ product.status }}</td>
                      <td class="has-text-centered">
                        <router-link
                          :to="{ name: 'Edit', params: { id: product.id } }"
                          class="button is-info is-small"
                          >Edit</router-link
                        >
                        <a
                          class="button is-danger is-small"
                          @click="deleteProduct(product.id)"
                          >Delete</a
                        >
                      </td>
                    </tr>
                </tbody>
             </table>
            <!-- <base-table-dashboard :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary"
                        >
                        <template slot="table-row" slot-scope="props">
                        <span v-if="props.column.field == 'details'">
                          <button type="button" class="btn btn-primary">
                          View Details
                          </button>
                        </span>
                        <span v-else>
                            {{props.formattedRow[props.column.field]}}
                        </span>
                      </template>
            </base-table-dashboard> -->

          </div>
        </card>
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
// import BaseTableDashboard from '../components/BaseTableDashboard.vue';
import axios from "axios";
import BaseTableDashboard from '../components/BaseTableDashboard.vue';
import BaseButton from '../components/BaseButton.vue';
// const tableColumns = ["Item","Name","Qty","Category", "Price", "Weight","Size","City","image"] ;
// const tableData = [
//   {
//     id: 1,
//     item: "T-Shirts",
//     name: "Jose Carillo",
//     qty: "10",
//     category: "Clothes",
//     price: "20.000",
//     weight: "10kg",
//     size: "Medium",
//     city: "Barcelona",
//     image: ""

//   },
//   {
//     id: 2,
//     item: "T-Shirts",
//     name: "Miguel Gallardo",
//     qty: "3",
//     category: "Clothes",
//     price: "20.000",
//     weight: "10kg",
//     size: "Small",
//     city: "Guadalajara",
//     image: ""
//   },
//   {
//     id: 3,
//     name: "Antonio Escobar",

//   },
//   {
//     id: 4,
//     name: "Dakota Rice",

//   },
//   {
//     id: 5,
//     name: "Mason Porter",
//   },
//   {
//     id: 6,
//     name: "Doris Greene",

//   },
//   {
//     id: 7,
//     name: "Philip Chaney",

//   },
//   {
//     id: 8,
//     name: "Minerva Hooper",

//   },
//   {
//     id: 9,
//      name: "Jon Porter",

//   },
//   {
//     id: 10,
//     name: "Andres Smith",
//   }
// ];

// export default {
//   components: {
//     BaseTableDashboard
//   },
//   data() {
//     return {
//       table1: {
//         title: "DASHBOARD *TOKO HENWIN*",
//         columns: [...tableColumns],
//         data: [...tableData]
//       }
//     };
//   }
// };
export default {
  components: { BaseButton },
    name:"productsList",
    data() {
      return {
        products: []
      };
    },
    created() {
      this.getProducts();
    },
    methods: {
      async getProducts() {
        try {
          const response = await axios.get("http://localhost:3000/users"); //route ini untuk testing aja karena perlu login kalau pakai route asli
          this.products = response.data;
        } catch (err) {
          console.log(err);
          alert('err: ' + err)
        }
      }
    }
};
</script>
<style>


</style>

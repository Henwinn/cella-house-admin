<template>
    <div class="row">
      <div class="col-md-10">
        <card >
        <h1>Tracking</h1>
        <form class="track">
          <table>
            <tr>
              <td>
                <div class="merchantName">
                  <label>Merchant Name</label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="custName">
                  <label>Customer Name</label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="address">
                  <label>Address</label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="evenSet">
                  <label>Event Set</label>
                </div>
              </td>
            </tr>
          </table>
        </form>
             <!-- <div class="table-responsive">
            <h1>Tracking</h1>
            
            
             <table class="table is-striped is-bordered mt-2 is-fullwidth">
               <thead>
                  <tr>
                    <th>Merchant Name</th>
                    <th>Customer Name</th>
                    <th>Address</th>
                    <th>Event Set</th>
                  </tr>
               </thead>
               <tbody>

                    <tr v-for="(tracking, idx) in this.products" :key="idx">
                      <td>{{ product.name }}</td>
                      <td>{{ product.qty }}</td>
                      <td>{{ product.price }}</td>
                      <td>{{ product.categoryName }}</td>
                      <td>{{ product.variant }}</td>
                      <td>{{ product.note }}</td>
                      <td>{{ product.status }}</td>
                      <td class="has-text-centered">
                       
                         

                            
                        
                       
                        
                      </td>
                    </tr>
                </tbody>
             </table>
          </div> -->
       
        </card>
      </div>
    </div>
</template>
<script>

export default {

  data() {
    return {
    
      }
    }
  }
</script>
<style>

.track  {
  padding-bottom: 700px;
}
</style>

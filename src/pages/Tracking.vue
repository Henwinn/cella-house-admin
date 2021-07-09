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
    },
  created() {
        this.getTracking();
      
    },
    methods: {
       async getTracking() {
        try {
          const response = await axios.get(`https://tracking.bring.com/api/tracking.json?q=TESTPACKAGE-AT-PICKUPPOINT`); //route ini untuk testing aja karena perlu login kalau pakai route asli
          // this.products = response.data.rows; masih bingung ini gimana 
          // this.total = response.data.count
        } catch (err) {
          console.log(err);
          alert('err: ' + err)
        }
      },

    }


  }
</script>
<style>

.track  {
  padding-bottom: 700px;
}
</style>

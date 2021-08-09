import VueRouter from "vue-router";
import routes from "./routes";
import axios from "axios"

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
});

router.beforeEach(async (to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    let response = await axios.get('http://localhost:3000/validation/check/isloggedin')

    if(response.data == false){
      next({name: 'login'})
    } else {
      if(to.matched.some(record => record.meta.isUser)){
        if(response.data == "1"){
          next({name: 'adminDashboard'})
        }
      } else if(to.matched.some(record => record.meta.isAdmin)){
        if(response.data == "2"){
          next({name: 'dashboard'})
        }
      }
      next()
    }
  } else {
    next()
  }
})

export default router;

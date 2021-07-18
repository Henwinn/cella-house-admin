import VueRouter from "vue-router";
import routes from "./routes";

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

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    console.log(document.cookie)
    if(!window.isLoggedIn){
      next({name: 'login'})
    } else {
      if(to.matched.some(record => record.meta.isUser)){
        if(!window.isUser){
          console.log('admin block: ' + window.isUser + ' ' + window.isAdmin)
          next({name: 'adminDashboard'})
        }
      } else if(to.matched.some(record => record.meta.isAdmin)){
        if(!window.isAdmin){
          console.log('user block: ' + window.isUser + window.isAdmin)
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

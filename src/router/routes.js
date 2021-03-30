import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";


// Admin pages
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Dropships = () => import(/* webpackChunkName: "common" */ "@/pages/Dropships.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const History = () => import(/* webpackChunkName: "common" */ "@/pages/History.vue");

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/login",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "profile",
        name: "profile",
        component: Profile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "dropships",
        name: "dropships",
        component: Dropships
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "history",
        name: "history",
        component: History
      },
      {
        path: "login",
        name: "login",
        component: Login
      },
      {
        path: "register",
        name: "register",
        component: Register
      }
    ],
    
   
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   components: {
  //     header: AppHeader,
  //     default: Login,
  //     footer: AppFooter
  //   }
  // },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;

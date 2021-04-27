import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import AdminDashboardLayout from "@/layout/dashboard/AdminDashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import Dropship from "@/pages/Dropship.vue";
import AddFormDashboard from "@/pages/AddFormDashboard.vue";
import UpdateFormDashboard from "@/pages/UpdateFormDashboard.vue";
import AdminDropship from "@/pages/AdminDropship.vue";
import AdminProfile from "@/pages/AdminProfile.vue";
import AdminAddFormMerchant from "@/pages/AdminAddFormMerchant.vue";
import ProfileMerchant from "@/pages/ProfileMerchant.vue";
import AdminUpdateFormMerchant from "@/pages/AdminUpdateFormMerchant.vue";
import EditProfileForm from "@/pages/Profile/EditProfileForm.vue";
import EditProfileAdminForm from "@/pages/Profile/EditProfileAdminForm.vue";


const Dashboard = () => import("@/pages/Dashboard.vue");
const AdminDashboard = () => import("@/pages/AdminDashboard.vue");
const Profile = () => import("@/pages/Profile.vue");
const Notifications = () => import("@/pages/Notifications.vue");
const Dropships = () => import("@/pages/Dropships.vue");
const Typography = () => import("@/pages/Typography.vue");
const History = () => import("@/pages/History.vue");

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
      // {
      //   path: "dropships",
      //   name: "dropships",
      //   component: Dropships
      // },
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
        path: "dropship",
        name: "dropship",
        component: Dropship
      },
      {
        path: "formAddItem",
        name: "formDashboard",
        component: AddFormDashboard
      },
      {
        path: "formUpdateItem",
        name: "formDashboard",
        component: UpdateFormDashboard
      },
      {
        path: "editProfile",
        name: "editProfile",
        component: EditProfileForm
      }
    ],
    
   
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/admin",
    component: AdminDashboardLayout,
    redirect: "/login",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: AdminDashboard
      },
      {
        path: "dropship",
        name: "dropship",
        component: AdminDropship
      },
      {
        path: "profile",
        name: "profile",
        component: AdminProfile
      },
      {
        path: "formAddMerchant",
        name: "formAddMerchant",
        component: AdminAddFormMerchant
      },
      {
        path: "formUpdateMerchant",
        name: "formUpdateMerchant",
        component: AdminUpdateFormMerchant
      },
      {
        path: "profileMerchant",
        name: "profileMerchant",
        component: ProfileMerchant
      },
      {
        path: "formAddItem",
        name: "formDashboard",
        component: AddFormDashboard
      },
      {
        path: "formUpdateItem",
        name: "formDashboard",
        component: UpdateFormDashboard
      },
      {
        path: "editProfileAdmin",
        name: "editProfileAdmin",
        component: EditProfileAdminForm
      }
    ]
  },
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

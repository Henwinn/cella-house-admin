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
import ListApproval from "@/pages/ListApproval.vue";
import Tracking from "@/pages/Tracking.vue";
import Forgot from "@/pages/Forgot.vue";

const Dashboard = () => import("@/pages/Dashboard.vue");
const AdminDashboard = () => import("@/pages/AdminDashboard.vue");
const Profile = () => import("@/pages/Profile.vue");
const Notifications = () => import("@/pages/Notifications.vue");
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
        component: Dashboard,
        meta: {
          requiresAuth: true,
          isUser: true
        }
      },
      {
        path: "profile",
        name: "profile",
        component: Profile,
        meta: {
          requiresAuth: true,
          isUser: true
        }
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications,
        meta: {
          requiresAuth: true,
          isUser: true
        }
      },
      // {
      //   path: "dropships",
      //   name: "dropships",
      //   component: Dropships
      // },
      {
        path: "typography",
        name: "typography",
        component: Typography,
        meta: {
          requiresAuth: true,
          isUser: true
        }
      },
      {
        path: "history",
        name: "history",
        component: History,
        meta: {
          requiresAuth: true,
          isUser: true
        }
      },
      {
        path: "dropship",
        name: "dropship",
        component: Dropship,
        meta: {
          requiresAuth: true,
          isUser: true
        }
      },
      {
        path: "formAddItem",
        name: "formDashboard",
        component: AddFormDashboard,
        meta: {
          requiresAuth: true,
          isUser: true
        }
      },
      {
        path: "formUpdateItem",
        name: "formDashboard",
        component: UpdateFormDashboard,
        meta: {
          requiresAuth: true,
          isUser: true
        }
      },
      {
        path: "editProfile",
        name: "editProfile",
        component: EditProfileForm,
        meta: {
          requiresAuth: true,
          isUser: true
        }
      },
      {
        path: "tracking",
        name: "tracking",
        component: Tracking,
        meta: {
          requiresAuth: true,
          isUser: true
        }
      }
    ],
    
   
  },
  {
    path: "/login",
    name: 'login',
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/forgot",
    component: Forgot
  },
  {
    path: "/admin",
    component: AdminDashboardLayout,
    redirect: "/login",
    children: [
      {
        path: "dashboard",
        name: "adminDashboard",
        component: AdminDashboard,
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
      },
      {
        path: "dropship",
        name: "dropship",
        component: AdminDropship,
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
      },
      {
        path: "profile",
        name: "profile",
        component: AdminProfile,
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
      },
      {
        path: "formAddMerchant",
        name: "formAddMerchant",
        component: AdminAddFormMerchant,
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
      },
      {
        path: "formUpdateMerchant",
        name: "formUpdateMerchant",
        component: AdminUpdateFormMerchant,
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
      },
      {
        path: "profileMerchant",
        name: "profileMerchant",
        component: ProfileMerchant,
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
      },
      {
        path: "formAddItem",
        name: "formDashboard",
        component: AddFormDashboard,
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
      },
      {
        path: "formUpdateItem",
        name: "formDashboard",
        component: UpdateFormDashboard,
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
      },
      {
        path: "editProfileAdmin",
        name: "editProfileAdmin",
        component: EditProfileAdminForm,
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
      },
      {
        path: "listApproval",
        name: "listApproval",
        component: ListApproval,
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
      },
      {
        path: "tracking",
        name: "tracking",
        component: Tracking,
        meta: {
          requiresAuth: true,
          isAdmin: true
        }
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

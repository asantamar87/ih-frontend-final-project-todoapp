import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth.vue";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue"
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import PasswordReset from "../components/PasswordReset.vue";
import UpdateUser from "../components/UpdateUser.vue";

const routes = [
  {
    path: "/auth",
    component: Auth,
    children: [
      { path: "login", component: SignIn },
      { path: "signup", component: SignUp },
      { path: "resetpass", component: PasswordReset },
      { path: "update", component: UpdateUser}
    ],
  },
  { path: "/", component: Home },
  { path: "/account", component: Account }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


// router.beforeEach(async (to, from) => {
//   if (
//     // make sure the user is authenticated
//     !isAuthenticated &&
//     // ! Avoid an infinite redirect
//     to.name !== 'Login'
//   ) {
//     // redirect the user to the login page
//     return { name: 'Login' }
//   }


// if (
//   to.hash.includes('type=recovery') &&
//   to.name !== 'reset-password'
// ) {
//   const accessToken = to.hash.split('&')[0]
//   const token = accessToken.replace('#access_token=', '')
//   return {
//     name: 'reset-password',
//     query: {
//       token
//     } 
//   }
// }
// })




// router.beforeEach({
  
  // if (
  //   to.hash.includes('type=recovery') &&
  //   to.name !== 'reset-password'
  // ) {
  //   const accessToken = to.hash.split('&')[0]
  //   const token = accessToken.replace('#access_token=', '')
  //   return { name: 'reset-password', query: { token } }
  // }
// }); 


export default router;

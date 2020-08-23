import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from "js-cookie"
import "@/assets/keycloak.js";
import moduleApi from "@/api.js";

//element-ui
import ElementUI from 'element-ui';
Vue.use(ElementUI);
// import 'element-ui/lib/theme-chalk/index.css';

//css
import '@/assets/less/index.less';

Vue.config.productionTip = false;

Vue.filter('timefmt', function (timelong) {
  if(!timelong) return '--';
  return new Date(timelong).format("yyyy/MM/dd");
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



// // 部署到服务器需要修改的地方
// export var keycloak = Keycloak({
//   url: process.env.VUE_APP_KEYCLOAK_URL,
//   realm: "muti-studio",
//   clientId: "muti-studio-cli"
// });

// var getUserInfo = async function(cb) {
//   var res = await moduleApi.currentUser();
//   if (res.code == "0") {
//     var data = res.data;
//     Cookies.set("fs-user-id", data.id);
//     Cookies.set("fs-user-account", data.account);
//     cb && cb();
//   }
// };

// window.onload = function() {
//   keycloak.init({ onLoad: "login-required", checkLoginIframeInterval: 1 }).success(function() {
//     if (keycloak.authenticated) {
//       getUserInfo(() => {
//         new Vue({
//           router,
//           store,
//           render: h => h(App)
//         }).$mount("#app");
//       });
//     } else {
//       keycloak.login({ redirectUri: process.env.VUE_APP_KEYCLOAK_REDIRECT_URI });
//     }
//   });
// };

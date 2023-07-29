import { createApp } from "vue";
//import './style.css'
import App from "./App.vue";
import "./index.css";
import router from "../src/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faLink,
  faEnvelope,
  faLocationDot,
  faBuilding, 
  faCalendarAlt, faHome
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faLink, faGithub, faEnvelope, faLocationDot, faBuilding, faCalendarAlt, faHome);

/* const myApp = createApp(App);

myApp.component("VuePaginationTw", VuePaginationTw);
myApp.use(router)
myApp.mount('#app');  */

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");

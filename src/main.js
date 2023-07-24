import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import './index.css'
import router from '../src/router'
    
/* const myApp = createApp(App);

myApp.component("VuePaginationTw", VuePaginationTw);
myApp.use(router)
myApp.mount('#app');  */



createApp(App).use(router).mount('#app') 


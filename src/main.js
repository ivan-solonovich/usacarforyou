import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueWriter from "vue-writer";
import gsap from "gsap";


const app = createApp(App)
app.use(

    VueWriter,
    gsap)

    .mount('#app')

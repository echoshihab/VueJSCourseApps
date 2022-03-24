import { createApp } from 'vue';



import App from './App.vue';
import router from './router.js';



// router.afterEach(function(to,from) {
//     console.log("coming from " + from.fullPath)
//     console.log("to" + to.fullPath)
// })

const app = createApp(App)
app.use(router);

app.mount('#app');

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import App from './App.vue'
// import router from './router'
// import './styles/index.scss'
//
// const app = createApp(App)
//
// app.use(createPinia())
// app.use(router)
// app.use(ElementPlus)
//
// app.mount('#app')
// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// import { createPinia } from 'pinia';
//
// const pinia = createPinia();
// const app = createApp(App);
//
// app.use(router);
// app.use(pinia);
// app.mount('#app');
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')

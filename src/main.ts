import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router';
import "vuetify";
import { createVuetify } from 'vuetify';
import * as components from "vuetify/components";
import * as directives from "vuetify/components";

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)

app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount('#app')

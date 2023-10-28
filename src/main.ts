import "@/style.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue';
import router from './router';

import "vuetify";
import { createVuetify } from 'vuetify';
import * as components from "vuetify/components";
import * as directives from "vuetify/components";
import { characterStore } from "./stores/store";
import { useDiceStore } from "./stores/diceStore";


const vuetify = createVuetify({
    components,
    directives,
})

const pinia = createPinia();

const app = createApp(App)

app.use(vuetify);

app.use(pinia);
app.use(router);

app.mount('#app')

const characterSheetStore = characterStore();
const diceStore = useDiceStore();
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CharacterSheet from './components/Character-Sheet.vue';

import { ref } from 'vue'

const drawer = ref<null|boolean>(null)
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!--Character Sheet and Characer Builder-->
      <CharacterSheet />
    </v-main>
  </v-app>
</template>

<template>
    <div class="tw-border-2 tw-p-2">
        <div v-for="(attri, key) in store.getSkills" class="tw-flex tw-relative checkbox-group">
            <input type="checkbox" :id="key.toString()" v-model="store.skills[key][0]" class="checkbox-field"/>
            <label class="checkbox-label" :for="key.toString()">
                <span>{{ store.getSkills[key][2] }}</span>  {{ store.getSkills[key][1] }}
            </label>
        </div>
        <h3 class="tw-text-center">Skills</h3>
    </div>
</template>

<script setup lang="ts">
import { characterStore } from '@/stores/store';


const store = characterStore()
store.getSkills
</script>
<template>
    <div class=" tw-border-2 tw-rounded-sm tw-p-2">
        <div v-for="(attr, key) in store.savingThrows" class="tw-flex tw-relative checkbox-group">
            <input type="checkbox" :id="key.toString()" v-model="store.savingThrows[key][0]" class="checkbox-field">
            <label class="checkbox-label" :for="key.toString()"><span class="tw-mr-3">{{ store.characterSavingThrowsModifiers[key][1] }}</span>{{ key}}</label>
        </div>  
        <h3 class="tw-text-center">Saving throws</h3>
    </div>
</template>

<script setup lang="ts">
import { characterStore } from '@/stores/store';

const store = characterStore()
store.characterSavingThrowsModifiers
</script>

<style scoped>
.checkbox-label::before {
    content: "";
    position: absolute;
    left: 0;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background: white;
    border-width: 2px;
    border-color: #161B22;
}

.checkbox-label::after {
    content: "";
    position: absolute;
    left: -0px;
    top: 4.5px;
    width: 13px;
    height: 13px;
    border-radius: 100%;
    background: black
}

.checkbox-field:not(:checked)+.checkbox-label::after {
    transform: scale(0);
    opacity: 0;
}
</style>
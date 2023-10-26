<template>
    <div class="tw-border-2 tw-border-black tw-w-min">
        <div v-for="(attr, key) in store.savingThrows" class="tw-flex tw-gap-2">
            <label>
                <input type="checkbox" id="proficiencySavingThrow" v-model="attr[0]" class="round-checkbox">
                <span class="checkmark">Check</span>
            </label>
            <p>{{ attr[1] }}</p>
            <p class="tw-ml-5">{{ key }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { characterStore } from '@/stores/store';

const store = characterStore()
</script>
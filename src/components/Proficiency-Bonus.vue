<template>
    <div class="tw-flex tw-flex-row tw-border-2 tw-gap-2 tw-p-1">
        <span class="tw-px-2 tw-mr-2 tw-bg-slate-200">{{ store.getProficiencyBonus }}</span>
        <p>Proficiency Bonus</p>
    </div>
</template>

<script setup lang="ts">
import { characterStore } from '@/stores/store';


const store = characterStore();
</script>
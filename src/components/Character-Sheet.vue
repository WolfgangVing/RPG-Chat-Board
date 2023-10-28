<template>
    <CharacterInfo />
    <div class="tw-max-w-5xl tw-p-2 tw-flex tw-flex-row tw-container tw-mt-6">
        <div class="tw-w-1/3 tw-flex tw-flex-row tw-justify-around tw-mt-10">
            <Attributes />
            <div class="tw-flex tw-flex-col tw-gap-4">
                <Inspiration />
                <ProficiencyBonus />
                <SavingThrowVue />
                <Skills />
            </div>
        </div>
        <div class="tw-w-1/3 tw-grid tw-flex-col">
            Column 2
        </div>
        <div class="tw-w-1/3 tw-grid tw-flex-col">
            Column 3
        </div>
    </div>
</template>

<script setup lang="ts">
import SavingThrowVue from "./Saving-throw.vue";
import CharacterInfo from "./Character-Info.vue";
import Attributes from "./Attributes.vue";
import Inspiration from "./Inspiration.vue";
import  ProficiencyBonus from "./Proficiency-Bonus.vue";
import Skills from "./Skills.vue";

</script>
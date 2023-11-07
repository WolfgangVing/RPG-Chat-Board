<template>
    <div class="tw-flex tw-flex-col tw-justify-around tw-w-min cols tw-bg-gray-200 tw-p-2 tw-rounded-md">
        
        <div
            class="tw-flex tw-flex-col tw-w-20 tw-align-middle tw-text-center tw-border-2 tw-border-slate-900 tw-rounded tw-pt-1 tw-pb-3 tw-bg-white">
            <p>{{ "Strength".slice(0, 3) }}</p>
            <p>{{ store.characterAttributeModifier["strength"] }}</p>
            <div class="tw-flex tw-justify-center tw-relative">
                <input type="number" v-model="store.attributes.strength" @input="handleAttributeInput('strength', $event)"
                    class="tw-text-center tw-flex tw-rounded-[50%] tw-border-2 tw-border-black tw-w-2/3 tw-absolute" />
            </div>
        </div>

        <div
            class="tw-flex tw-flex-col tw-w-20 tw-align-middle tw-text-center tw-border-2 tw-border-slate-900 tw-rounded tw-pt-1 tw-pb-3 tw-bg-white">
            <p>{{ 'Dexterity'.slice(0, 3) }}</p>
            <p>{{ store.characterAttributeModifier['dexterity'] }}</p>
            <div class="tw-flex tw-justify-center tw-relative">
                <input type="number" v-model="store.attributes['dexterity']"
                    @input="handleAttributeInput('dexterity', $event)"
                    class="tw-text-center tw-flex tw-rounded-[50%] tw-border-2 tw-border-black tw-w-2/3 tw-absolute" />
            </div>
        </div>

        <div
            class="tw-flex tw-flex-col tw-w-20 tw-align-middle tw-text-center tw-border-2 tw-border-slate-900 tw-rounded tw-pt-1 tw-pb-3 tw-bg-white">
            <p>{{ 'Constitution'.slice(0, 3) }}</p>
            <p>{{ store.characterAttributeModifier['constitution'] }}</p>
            <div class="tw-flex tw-justify-center tw-relative">
                <input type="number" v-model="store.attributes['constitution']"
                    @input="handleAttributeInput('constitution', $event)"
                    class="tw-text-center tw-flex tw-rounded-[50%] tw-border-2 tw-border-black tw-w-2/3 tw-absolute" />
            </div>
        </div>

        <div
            class="tw-flex tw-flex-col tw-w-20 tw-align-middle tw-text-center tw-border-2 tw-border-slate-900 tw-rounded tw-pt-1 tw-pb-3 tw-bg-white">
            <p>{{ 'Intelligence'.toString().slice(0, 3) }}</p>
            <p>{{ store.characterAttributeModifier['intelligence'] }}</p>
            <div class="tw-flex tw-justify-center tw-relative">
                <input type="number" v-model="store.attributes['intelligence']"
                    @input="handleAttributeInput('intelligence', $event)"
                    class="tw-text-center tw-flex tw-rounded-[50%] tw-border-2 tw-border-black tw-w-2/3 tw-absolute" />
            </div>
        </div>

        <div
            class="tw-flex tw-flex-col tw-w-20 tw-align-middle tw-text-center tw-border-2 tw-border-slate-900 tw-rounded tw-pt-1 tw-pb-3 tw-bg-white">
            <p>{{ 'Wisdom'.slice(0, 3) }}</p>
            <p>{{ store.characterAttributeModifier['wisdom'] }}</p>
            <div class="tw-flex tw-justify-center tw-relative">
                <input type="number" v-model="store.attributes['wisdom']" @input="handleAttributeInput('wisdom', $event)"
                    class="tw-text-center tw-flex tw-rounded-[50%] tw-border-2 tw-border-black tw-w-2/3 tw-absolute" />
            </div>
        </div>

        <div
            class="tw-flex tw-flex-col tw-w-20 tw-align-middle tw-text-center tw-border-2 tw-border-slate-900 tw-rounded tw-pt-1 tw-pb-3 tw-bg-white">
            <p>{{ 'Charisma'.slice(0, 3) }}</p>
            <p>{{ store.characterAttributeModifier['charisma'] }}</p>
            <div class="tw-flex tw-justify-center tw-relative">
                <input type="number" v-model="store.attributes['charisma']"
                    @input="handleAttributeInput('charisma', $event)"
                    class="tw-text-center tw-flex tw-rounded-[50%] tw-border-2 tw-border-black tw-w-2/3 tw-absolute" />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import type { TAttributes, TModifiers } from "@/types"
import { characterStore } from "@/stores/store";


const store = characterStore();

//An handle input to range the value of attributes between 0~20 by common rules as 20 is the ceiling for characters.
const handleAttributeInput = (key: keyof TAttributes, event: Event) => {
    const inputValue = parseInt((event.target as HTMLInputElement).value, 10)
    if (!isNaN(inputValue)) {
        store.attributes[key] = Math.min(20, Math.max(0, inputValue));
    }

}

</script>

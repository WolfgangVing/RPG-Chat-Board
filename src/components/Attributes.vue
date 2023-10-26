<template>
    <div class="tw-flex tw-flex-col tw-gap-5 tw-justify-around tw-w-min cols tw-bg-gray-200 tw-p-2 tw-rounded-md">
        <div v-for="(attribute, key) in store.attributes" :key="key"
            class="tw-flex tw-flex-col tw-w-20 tw-align-middle tw-text-center tw-border-2 tw-border-slate-900 tw-rounded tw-pt-1 tw-pb-3 tw-bg-white">

            <p>{{ key.toString().slice(0, 3) }}</p>
            <P>{{ store.modifiers[key] }}</P>
            <div class="tw-flex tw-justify-center tw-relative">
                <input type="number" v-model="store.attributes[key]" @input="handleAttributeInput(key, $event)"
                    class="tw-text-center tw-flex tw-rounded-[50%] tw-border-2 tw-border-black tw-w-2/3 tw-absolute" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TModifiers } from "@/types"
import { characterStore } from "@/stores/store";


const store = characterStore();


//An handle input to range the value of attributes between 0~20 by common rules as 20 is the ceiling for characters.
const handleAttributeInput = (key: keyof TModifiers, event: Event) => {
    const inputValue = parseInt((event.target as HTMLInputElement).value, 10)
    if (!isNaN(inputValue)) {
        store.attributes[key] = Math.min(20, Math.max(0, inputValue));
    }
}


</script>
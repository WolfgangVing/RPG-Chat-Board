<template>
    <div class="tw-flex tw-flex-col tw-gap-2 tw-justify-around tw-mt-10 tw-w-min cols">
            <div v-for="(attribute, key) in store.attributes" 
                :key="key" 
                class="tw-flex tw-flex-col tw-w-20 tw-align-middle tw-text-center tw-border-2 tw-rounded"

            >
                <div class="">
                    <p>{{ key.toString().slice(0, 3) }}</p>
                    <P>{{ store.modifiers[key] }}</P>
                </div>
                <input type="number" v-model="store.attributes[key]" @input="handleAttributeInput(key, $event)" 
                    class="tw-text-center tw-flex tw-rounded-[50%] tw-border-2" />
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
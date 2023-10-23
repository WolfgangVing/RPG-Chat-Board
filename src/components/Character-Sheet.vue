<template>
    <h3>Character Name</h3>
    <div>
        <div>
            <p>Class & Level</p>
            <input type="text" v-model="classLevel" id="classLevel">
        </div>
        <div>
            <p>Race</p>
            <input type="text" v-model="store.race" id="classLevel">
        </div>
        <div>
            <p>Allignment</p>
            <input type="text" v-model="store.allignment" id="classLevel">
        </div>
        <div>
            <p>Experience Points</p>
            <input type="text" v-model="store.experiencePoints" id="classLevel">
        </div>
        <div>
            <p>Background</p>
            <input type="text" v-model="store.background" id="classLevel">
        </div>
        <div>
            <p>Player Name</p>
            <input type="text" v-model="store.PlayerName" id="classLevel">
        </div>
    </div>
    <div>
        <h3>
            Attributes
        </h3>
        <div v-for="(attribute, key) in store.attributes" :key="key" class="">
            <p>{{ key.toString().slice(0, 3) }}</p>
            <span>{{store.modifiers[key]}}</span>
            <input type="number" v-model="store.attributes[key]" @input="handleAttributeInput(key, $event)">
        </div>
    </div>
</template>

<script setup lang="ts">
import type {TCharacter, TModifiers} from "@/types"
import { characterStore } from "@/stores/store";
import { ref } from "vue";
import { watch } from "vue";

const store = characterStore();
type TClassLevel = TCharacter["classLevel"]
const classLevel = ref<string>("")


//An handle input to range the value of attributes between 0~20 by common rules as 20 is the ceiling for characters.
const handleAttributeInput = (key: keyof TModifiers, event: Event) => {
    const inputValue = parseInt((event.target as HTMLInputElement).value, 10)
    if(!isNaN(inputValue)){
        store.attributes[key] = Math.min(20, Math.max(0, inputValue));
    }
}

/**
 * Whenever the client user types a class and ends with a number with a space between as common knowledge suggest
 *  said input will be split, that last character will be converted to number and then both values will be registered in
 *  the store.
 */
watch(classLevel, (newClassLevel, oldClassLevel) => {
    const [chClass, level] = newClassLevel.split(" ");
    if(newClassLevel === "") {
        store.classLevel = ["", 0]
    } else if (!Number.isNaN(parseInt(level))){
        store.classLevel = [chClass, parseInt(level)]
    }
})
</script>
<template>
    <h3>Character Name</h3>
    <div>
        <span>
            <p>Class & Level</p>
        </span>
        <span>
            <p>Race</p>
        </span>
        <span>
            <p>Allignment</p>
        </span>
        <span>
            <p>Experience Points</p>
        </span>
        <span>
            <p>Background</p>
        </span>
        <span>
            <p>Player Name</p>
        </span>
    </div>
    <div>
        <h3>
            Attributes
        </h3>
        <div v-for="(attribute, key) in character.attributes" :key="key">
            <p>{{ key }}</p>
            <div>{{characterAttributeModifier[key]}}</div>
            <input type="number" v-model="character.attributes[key]" @input="handleAttributeInput(key, $event)">
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';
import type {TCharacter, TModifiers} from "@/types"


const character = ref<TCharacter>({
    attributes: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10
    }
})

const calculateModifier = (value: number) => {
    const baseModifier = (value - 10) / 2
    if(value < 10) {
        return Math.floor(baseModifier * -1) * -1
    } else {
        return Math.floor(baseModifier)
    }
}

const modifiers = ref<TModifiers>({
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    })

const characterAttributeModifier = computed(() =>{
    for(const key in character.value.attributes) {
        modifiers.value[key] = calculateModifier(character.value.attributes[key]);
    }

    return modifiers.value;
})

const handleAttributeInput = (key: keyof TModifiers, event: Event) => {
    const inputValue = parseInt((event.target as HTMLInputElement).value, 10)
    if(!isNaN(inputValue)){
        character.value.attributes[key] = Math.min(20, Math.max(0, inputValue))
    }
}
</script>
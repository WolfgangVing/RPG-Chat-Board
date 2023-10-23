import { type TAttributes, type TCharacterSheet } from "@/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const CharacterSheet = defineStore("CharacterSheet", () => {
    const Attributes = ref<TAttributes>({
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10
    })
    const Modifiers = ref<TAttributes>({
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    })
    
    const characterAttributeModifier = computed(() =>{
        for(const key in Attributes.value) {
            Modifiers.value[key] = calculateModifier(Attributes.value[key]);
        }
    
        return Modifiers.value;
    })
    
    const calculateModifier = (value: number) => {
        const baseModifier = (value - 10) / 2
        if(value < 10) {
            return Math.floor(baseModifier * -1) * -1
        } else {
            return Math.floor(baseModifier)
        }
    }
})
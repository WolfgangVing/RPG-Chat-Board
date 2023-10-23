import type { TCharacter, TCharacterSheet } from "@/types";
import { defineStore } from "pinia";

export const characterStore = defineStore("CharacterSheet", {
    state: (): TCharacter => ({
        name: "",
        background: "",
        allignment: "",
        classLevel: ["", 0],
        race: "",
        PlayerName: "",
        experiencePoints: 0,
        proficiencyBonus: 0,
        savingThrows: {
            charisma: null,
            constitution: null,
            dexterity: null,
            intelligence: null,
            strength: null,
            wisdom: null
        },
        attributes: {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10
        },
        modifiers: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        },
    }),
    getters: {
        characterAttributeModifier: (state) => {
            for(const key in state.attributes) {
                const attrValue = state.attributes[key]
                const baseModifier = (attrValue - 10) / 2;
                state.modifiers[key] = attrValue < 10 ? Math.floor(baseModifier * -1) * -1 : Math.floor(baseModifier)
                return state.modifiers
            }
        
            return state.modifiers;
        }
    }
})
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
            charisma: [false, 0],
            constitution: [false, 0],
            dexterity: [false, 0],
            intelligence: [false, 0],
            strength: [false, 0],
            wisdom: [false, 0]
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
            }
        
            return state.modifiers;
        },
        characterSavingThrowsModifiers: (state) => {
            for(const key in state.savingThrows) {
                const isProficienty = state.savingThrows[key][0]
                const proficiencyBonus = state.savingThrows[key][1]
                state.savingThrows[key][1] = !isProficienty ? state.modifiers[key] : state.modifiers[key] + state.proficiencyBonus
            }

            return state.savingThrows
        },
        getProficiencyBOnus: (state) => {
            const level = state.classLevel[1];
            
            if(level > 0 && level <= 4) {
                return state.proficiencyBonus = 2;
            } else if(level > 4 && level <= 8) {
                return state.proficiencyBonus = 3;
            } else if(level > 8 && level <= 12) {
                return state.proficiencyBonus = 4;
            } else if(level > 12 && level <= 16) {
                return state.proficiencyBonus = 5;
            } else if(level >16 && level <= 20) {
                return state.proficiencyBonus = 6;
            }
        }
    }
})
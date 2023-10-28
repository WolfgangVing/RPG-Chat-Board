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
        skills: {
            "Acrobatics": [false, "dexterity", 0],
            "Animal Handling": [false, "wisdom", 0],
            "Arcana": [false, "intelligence", 0],
            "Athletics": [false, "strength", 0],
            "Deception": [false, "charisma", 0],
            "History": [false, "intelligence", 0],
            "Insight": [false, "wisdom", 0],
            "Intimidation": [false, "charisma", 0],
            "Investigation": [false, "intelligence", 0],
            "Medicine": [false, "wisdom", 0],
            "Nature": [false, "intelligence", 0],
            "Perception": [false, "wisdom", 0],
            "Performance": [false, "charisma", 0],
            "Persuasion": [false, "charisma", 0],
            "Religion": [false, "intelligence", 0],
            "Sleight of Hand": [false, "dexterity", 0],
            "Stealth": [false, "dexterity", 0],
            "Survival": [false, "wisdom", 0]
        }
    }),
    getters: {
        characterAttributeModifier: (state) => {
            for (const key in state.attributes) {
                const attrValue = state.attributes[key]
                const baseModifier = (attrValue - 10) / 2;
                state.modifiers[key] = attrValue < 10 ? Math.floor(baseModifier * -1) * -1 : Math.floor(baseModifier)
            }

            return state.modifiers;
        },
        characterSavingThrowsModifiers: (state) => {
            for (const key in state.savingThrows) {
                const isProficienty = state.savingThrows[key][0]
                state.savingThrows[key][1] = !isProficienty ? state.modifiers[key] : state.modifiers[key] + state.proficiencyBonus
            }

            return state.savingThrows
        },
        getProficiencyBonus: (state) => {
            const level = state.classLevel[1];
            console.log(state.proficiencyBonus)
            if (level > 0 && level <= 4) {
                return state.proficiencyBonus = 2;
            } else if (level > 4 && level <= 8) {
                return state.proficiencyBonus = 3;
            } else if (level > 8 && level <= 12) {
                return state.proficiencyBonus = 4;
            } else if (level > 12 && level <= 16) {
                return state.proficiencyBonus = 5;
            } else if (level > 16 && level <= 20) {
                return state.proficiencyBonus = 6;
            }
        },
        getSkills: (state) => {
            for (const key in state.skills) {
                const isProficienty = state.skills[key][0]
                const attributeName = state.skills[key][1]
                state.skills[key][2] = isProficienty ? 
                state.modifiers[attributeName] + state.proficiencyBonus : 
                state.modifiers[attributeName]
            }

            return state.skills
        }
    }
})
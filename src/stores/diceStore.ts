import { defineStore } from "pinia";
import type { TDice } from "@/types";


export const useDiceStore = defineStore("diceSotre", {
    state: () => ({
        result: 0,
        diceType: {
            "1d4": 4,
            "1d6": 6,
            "1d8": 8,
            "1d10": 10,
            "1d12": 12,
            "1d20": 20 
        } as TDice
    }),
    actions: {
        rollDice(dice: keyof TDice){
            this.result = Math.floor(Math.random() * this.diceType[dice]) +1
        }
    }
})
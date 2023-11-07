<template>
    <div class="tw-flex tw-flex-col tw-h-min tw-w-96 tw-bg-characterSheet tw-p-3 tw-gap-3">
        <div class="tw-flex tw-flex-row tw-p-1 tw-gap-3 tw-justify-around tw-text-center">
            <div class="tw-flex tw-flex-col tw-items-center tw-w-1/3 tw-gap-2">
                <input type="number" id="armor-class" class="tw-w-8" v-model="characStore.armorClass" />
                <p>Armor Class</p>
            </div>
            <div class="tw-flex tw-flex-col tw-items-center tw-w-1/3 tw-gap-2">
                <div class="relative">
                    <input type="number" id="combat-initiative" class="tw-w-8" v-model="characStore.initiative" />
                    <div class="dice-wrapper tw-relative">
                        <img src="../assets/Dice20.svg" width="18" id="dice"
                            class="tw-absolute -tw-top-3 -tw-right-3 tw-cursor-pointer"
                            @click="handleRollDice('1d20', characStore.modifiers.dexterity, $event)">
                    </div>
                </div>
                <p>Initiative</p>
            </div>
            <div class="tw-flex tw-flex-col tw-items-center tw-w-1/3 tw-gap-2">
                <input type="number" id="combat-speed" class="tw-w-8" v-model="characStore.speed" />
                <p>Speed</p>
            </div>
        </div>

        <div class="tw-flex tw-flex-col tw-gap-2">
            <div class="tw-h-32 tw-flex tw-flex-col tw-justify-around tw-bg-white ">
                <span class="tw-flex tw-flex-row">
                    <p class="tw-text-xs tw-text-center">Hit Point Maximum</p>
                    <input type="text" class="tw-h-6 tw-border-b-2 tw-text-base tw-w-3/5" />
                </span>
                <input type="number" class="tw-h-16 chs-input-current-life" />
                <p class="tw-text-center">
                    Currenty Hit Points
                </p>
            </div>

            <div class="tw-h-28 tw-flex tw-flex-col tw-justify-around tw-bg-white  tw-text-center">
                <input type="number" class="tw-h-16 chs-input-current-life" />
                Temporary Hit Points
            </div>
        </div>

        <div class="tw-flex tw-flex-row tw-justify-around">
            <div class="tw-w-36 tw-h-28 tw-flex tw-flex-col tw-justify-between tw-bg-white tw-p-1">
                <div class="tw-flex tw-flex-row tw-gap-2">
                    <p>Total</p>
                    <input type="text" class="tw-w-2/3 tw-border-b-2" />
                </div>
                <input type="text" class="tw-text-lg" />
                <p class="tw-text-center">
                    Hit dice
                </p>
            </div>

            <div class="tw-flex tw-flex-col tw-justify-between tw-gap-1">
                <DeathSaves />

                <p class="tw-text-center">
                    Death Saves
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDiceStore } from '@/stores/diceStore';
import { characterStore } from '@/stores/store';
import DeathSaves from './Death-Saves.vue';

const diceStore = useDiceStore()
const characStore = characterStore()

function handleRollDice(dice: "1d20", modifiers: number | number[], event: Event) {
    event.preventDefault();
    const result = diceStore.rollDice(dice)
    console.log(`Rolled: ${result} + ${modifiers}`)
    characStore.initiative = result + (modifiers as number)
}
</script>


<style scoped>
#combat-initiative-rolldice {
    background-image: url("/src/assets/Dice20.svg");
}

input {
    text-align: center;
}

.chs-input-current-life {
    border-radius: 5%;
    font-size: x-large;
}
</style>
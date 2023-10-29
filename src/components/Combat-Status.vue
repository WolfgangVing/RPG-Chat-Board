<template>
    <div class="tw-flex tw-flex-col tw-h-min tw-bg-characterSheet ">
        <div class="tw-flex tw-flex-row tw-p-5 tw-gap-3 tw-justify-around">
            <div class="tw-flex tw-flex-col tw-items-center tw-w-1/3">
                <input type="number" id="armor-class" class="tw-w-8" v-model="characStore.armorClass"/>
                <p>Armor Class</p>
            </div>
            <div class="tw-flex tw-flex-col tw-items-center tw-w-1/3">
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
            <div class="tw-flex tw-flex-col tw-items-center tw-w-1/3">
                <input type="number" id="combat-speed" class="tw-w-8" v-model="characStore.speed"/>
                <p>Speed</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useDiceStore } from '@/stores/diceStore';
import { characterStore } from '@/stores/store';

const diceStore = useDiceStore()
const characStore = characterStore()

function handleRollDice(dice: "1d20", modifiers: number | number[], event: Event) {
    event.preventDefault();
    const result = diceStore.rollDice(dice)
    alert(`Rolled: ${result} + ${modifiers}`)
    characStore.initiative = result + (modifiers as number)
}
</script>


<style scoped>
#combat-initiative-rolldice {
    background-image: url("/src/assets/Dice20.svg");
}

#dice {}
</style>
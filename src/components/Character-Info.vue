<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <div class="tw-border-b-2 tw-border-black tw-mr-2">
                    <p>Name</p>
                    <input type="text" v-model="store.name">
                </div>
            </v-col>
                
            <v-col cols="9">
                <v-row>
                    <div class="tw-border-b-2 tw-border-black tw-mr-2">
                        <p>Class & Level</p>
                        <input type="text" v-model="classLevel" id="classLevel">
                    </div>
                    <div class="tw-border-b-2 tw-border-black tw-mr-2">
                        <p>Race</p>
                        <input type="text" v-mofodel="store.race" id="classLevel">
                    </div>
                    <div class="tw-border-b-2 tw-border-black tw-mr-2">
                        <p>Allignment</p>
                        <input type="text" v-model="store.allignment" id="classLevel">
                    </div>
                </v-row>
                <v-row>
                    <div class="tw-border-b-2 tw-border-black tw-mr-2">
                        <p>Experience Points</p>
                        <input type="text" v-model="store.experiencePoints" id="classLevel">
                    </div>
                    <div class="tw-border-b-2 tw-border-black tw-mr-2">
                        <p>Background</p>
                        <input type="text" v-model="store.background" id="classLevel">
                    </div>
                    <div class="tw-border-b-2 tw-border-black tw-mr-2">
                        <p>Player Name</p>
                        <input type="text" v-model="store.PlayerName" id="classLevel">
                    </div>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">
import { characterStore } from "@/stores/store";
import { ref } from "vue";
import { watch } from "vue";

const store = characterStore();
const classLevel = ref<string>("")

const rules = [
    (value: any) => !!value || 'Required.',
    (value: any) => (value && value.length >= 3) || 'Min 3 characters'
]

/**
 * Whenever the client user types a class and ends with a number with a space between as common knowledge suggest
 *  said input will be split, that last character will be converted to number and then both values will be registered in
 *  the store.
 */
watch(classLevel, (newClassLevel, oldClassLevel) => {
    const [chClass, level] = newClassLevel.split(" ");
    if (newClassLevel === "") {
        store.classLevel = ["", 0]
    } else if (!Number.isNaN(parseInt(level))) {
        store.classLevel = [chClass, parseInt(level)]
    }
})
</script>
<template>
    <div class="tw-text-sm tw-flex tw-flex-row tw-gap-2">
        <p class="suc-fail-text">
            Successes
        </p>
        <div class="tw-flex tw-flex-row tw-gap-0 line">

            <input type="checkbox" class="checkbox-field" id="success-1" v-model="savingsSuccess[0]"
                @click="handleSaving(savingsSuccess, $event)">
            <label class="checkbox-label" for="success-1"><span class="line"></span></label>

            <input type="checkbox" class="checkbox-field" id="success-2" v-model="savingsSuccess[1]"
                @click="handleSaving(savingsSuccess, $event)">
            <label for="success-2" class="checkbox-label"></label>


            <input type="checkbox" class="checkbox-field" id="success-3" v-model="savingsSuccess[2]"
                @click="handleSaving(savingsSuccess, $event)">
            <label class="checkbox-label" for="success-3"></label>

        </div>
    </div>

    <div class="tw-text-sm tw-flex tw-flex-row tw-gap-2 tw-justify-end">
        <p class="suc-fail-text">
            Failures
        </p>
        <div class="tw-flex tw-flex-row tw-gap-0 line">

            <input type="checkbox" class="checkbox-field" id="fails-1" v-model="savingsFailures[0]" @click="handleSaving(savingsFailures, $event)">
            <label class="checkbox-label" for="fails-1"></label>

            <input type="checkbox" class="checkbox-field" id="fails-2" v-model="savingsFailures[1]" @click="handleSaving(savingsFailures, $event)">
            <label for="fails-2" class="checkbox-label"></label>


            <input type="checkbox" class="checkbox-field" id="fails-3" v-model="savingsFailures[2]" @click="handleSaving(savingsFailures, $event)">
            <label class="checkbox-label" for="fails-3"></label>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type TSavingsArray = [boolean, boolean, boolean]
const savingsSuccess = ref<TSavingsArray>([false, false, false]);
const savingsFailures = ref<TSavingsArray>([false, false, false]);

const handleSaving = (savingArray: TSavingsArray, event: Event) => {
    const htmlInput = event.target as HTMLInputElement

    const index = parseInt(htmlInput.id.split("-")[1]) - 1 //Should return a array of string of length 2, first element saying if is success or failure, second the index

    savingArray[index] = !savingArray[index]
}

</script>

<style scoped>
.suc-fail-text {
    text-align: center;
}

.tw-saving-input-wrapper {
    position: relative;
}

.checkbox-label::before {
    content: "";
    position: absolute;
    left: -1;
    top: 3px;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: white;
    border-width: 2px;
    border-color: #161B22;
}

.checkbox-label::after {
    content: "";
    position: absolute;
    left: -0px;
    top: 3px;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: black
}

.checkbox-label>span {
    position: absolute;
    content: "";
    left: -1px;
    top: 3px;
    z-index: -1;
}

.checkbox-field:not(:checked)+.checkbox-label::after {
    transform: scale(0);
    opacity: 0;
}
</style>
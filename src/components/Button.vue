<script setup>
defineProps({
    text:{
        type:String,
        require:true
    },
    event:{
        type:Function
    }
})
</script>

<template>
    <button class="button" @click="event">{{ text }}</button>
</template>

<style scoped>
    .button {
        display: flex;
        height: 50px;
        padding: 15px;
        line-height: 50px;
        background-color: #4A90E2;
        color: white;
        font-family: Arial, sans-serif;
        font-size: 16px;
        align-items: center;
        justify-content: center;
        border: 0px;
        border-radius: 5px;
        transition: 0.1s box-shadow;
        margin: 5px;
    }

    .button:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        background-color: #357ABD;
    }

    .button:enabled:hover {
        transition: all 0.2s ease-in-out;
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        color: white;
        cursor: pointer;
    }

    .button:disabled {
        opacity: 0.3;
    }

    .button:enabled {
        opacity: 1;
    }
</style>
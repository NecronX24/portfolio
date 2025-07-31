<script setup>
defineProps({
    text:{
        type:String,
        required:true
    },
    event:{
        type:Function
    },
    colors:{
        type:Object,
        default: () =>({backgroundColor: "#4A90E2", textColor:"#ffffff", activeColor:"#357ABD"}),
        validator(value){ return ( value && 'backgroundColor' in value && 'textColor' in value && 'activeColor' in value) }
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
        background-color: v-bind('colors.backgroundColor');
        color: v-bind('colors.textColor');
        font-family: Comfortaa;
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
        background-color: v-bind('colors.activeColor');
    }

    .button:enabled:hover {
        transition: all 0.2s ease-in-out;
        box-shadow: 3px 2px 22px 1px rgba(141, 141, 141, 0.24);
        cursor: pointer;
    }

    .button:disabled {
        opacity: 0.3;
    }

    .button:enabled {
        opacity: 1;
    }
</style>
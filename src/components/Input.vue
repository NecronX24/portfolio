<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    spanText: {
        type: String,
        required: true
    },
    hexColors: {
        type: String,
        default: '000000'
    },
    type: {
        type: String,
        default: 'text'
    },
    name: {
        type:String,
        required: true
    },
    textArea:{
        type: Boolean,
        default:false
    }
});

let inputText = ref('');
</script>


<template>
    <div class="div">
        <span :class="['placeholder', { 'has-value': inputText }]">
            {{ spanText }}
        </span>
        <input 
            v-if="!textArea"
            class="input" 
            :style="{ boxShadow: `0 0 8px #${hexColors}` }"
            :type="type"
            :name="name"
            v-model="inputText"
        />
        <textarea 
            v-if="textArea"
            class="input" 
            :style="{ boxShadow: `0 0 8px #${hexColors}` }"
            :type="type"
            :name="name"
            v-model="inputText"
        />
    </div>
</template>


<style scoped>
    .div {
        display: block;
        position: relative;
        padding: 20px;
    }

    .placeholder {
        position: absolute;
        margin-left: 7px;
        margin-top: 10px;
        opacity: 0.5;
        transition: 0.3s;
        font-size: 1.2em;
    }

    .div:hover .placeholder,
    .placeholder.has-value {
        margin-top: -30px;
        opacity: 1;
        font-size: 1.15em;
    }

    .input {
        border-color: black;
        border-style: solid;
        border-width: 1.5px;
        border-radius: 6px;
        height: 40px;
        font-size: 1em;
    }
</style>

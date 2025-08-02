<script setup>
import Button from './Button.vue';
import { ref } from 'vue';
defineProps({
    elements:{
        type:Array,
        required:true
    }
})
const selected = ref(0);
const selectItem = (index) =>{
    selected.value = index;
}
</script>

<template>
    <div class="container">
        <h1 class="home-button">
            Angel C
        </h1>
        <div class="element-container">
            <h1 class="element"
                v-for="(element, index) in elements"
                :key="index"
                @click="()=>{element[1]; selectItem(index)}"
                :class="{'selected': selected ===index}"
            >
                {{ element[0] }}</h1>
        </div>
        <Button text="Contáctame" :colors="{backgroundColor:'#37ac62', textColor:'white', activeColor:'#206d3d'}"/>
    </div>
</template>

<style scoped>
@font-face{
  font-family: 'PlayfairDisplay';
  src: url('./assets/PlayfairDisplay.ttf') format('truetype');
}
.container{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #282828;
    margin:0;
    width: 100%;
    height: 10vh;
    align-items: center;
    position: fixed;
    z-index: 10;
}

.home-button{
    cursor:pointer;
    margin-left: 25px;
    font-weight: 900;
    font-family: 'PlayfairDisplay';
    color: #37ac62;
    transition: 0.3s;
}

.home-button:hover{
    color:white;
}

.element-container{
    display: flex;
    flex-direction: row;
}

.element{
    cursor:pointer;
    transition: 0.3s;
    color:white;
    position: relative;
    padding-bottom: 5px;
    margin:9px;
}
.element:hover{
    color:#37ac62;
}

.button{
    margin-right: 20px;
}

.element.selected{
    color:#37ac62;
}

.element.selected::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #37ac62;
    animation: underline 0.3s ease;
}

@keyframes underline {
    from {
        transform: scaleX(0);
    }
    to {
        transform: scaleX(1);
    }
}
</style>
<script setup>
import Button from './Button.vue';
defineProps({
    elements:{
        type:Array,
        require:true
    }
})
</script>

<template>
    <div class="container">
        <h1 class="home-button">
            Angel C
        </h1>
        <div class="element-container">
            <h1 class="element" v-for="element in elements" @click="element[1]">{{ element[0] }}</h1>
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
    width: 100vw;
}

.home-button{
    cursor:pointer;
    margin:25px;
    font-weight: 900;
    font-family: 'PlayfairDisplay';
    color: #37ac62;
    transition: 0.3s;
}

.home-button:hover{
    color:white;
}

.element{
    cursor:pointer;
    transition: 0.3s;
    margin-top: 25px;
    color:white;
}
.element:hover{
    color:#37ac62;
}

.button{
    margin:12px;
    margin-right: 20px;
    margin-top: 17px;
}
</style>
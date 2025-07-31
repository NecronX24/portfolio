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
        <Button text="Contáctame"/>
    </div>
</template>

<style scoped>
.container{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #3f3f3f;
    margin:0;
    width: 100vw;
}

.home-button{
    margin:25px;
    font-weight: 900;
}

.element{
    transition: 0.5s;
}
.element:hover{
    color:white;
}

.button{
    margin:12px;
    margin-right: 20px;
}
</style>
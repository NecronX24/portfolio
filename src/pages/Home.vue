<script setup>
import Navbar from '@/components/Navbar.vue';

let elements =[
    ["Hola", ()=>{alert('Hola')}]
]
</script>

<template>
    <Navbar :elements="elements"></Navbar>
    <h1>Hello World</h1>
</template>

<styles scoped>

</styles>
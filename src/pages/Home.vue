<script setup>
import Button from '@/components/Button.vue';
import Navbar from '@/components/Navbar.vue';

let elements =[
    ["Home", ()=>{alert('Hola')}],
    ["About", ()=>{alert('Hola')}]
]
</script>

<template>
    <Navbar :elements="elements"></Navbar>
    <div class="home">
        <div class="home-text">
            <h1 class="home-title">Hello!, I'm Angel Cueche</h1>
            <h2 class="home-subtitle">Junior Developer</h2>
            <p class="home-p">
                Computer Engineering's Student
            </p>
            <p class="home-p"> A passionate person who is looking for real experience in the programming world!</p>
        </div>
    </div>
    <div class="projects">
        <div>Hello Wold</div>
    </div>
</template>

<style scoped>
.home{
    background: linear-gradient(270deg, #08b51f82, #055610db);
    min-height: 90vh;
}
.home-text{
    padding-top:4%;
    padding-left:7%;
    width: 30%;
    color:white;
}

.home-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.home-subtitle {
  font-size: 2rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.home-p {
  font-size: 1.2rem;
  line-height: 1.6;
}
</style>
<script setup>
import Button from '@/components/Button.vue';
import Navbar from '@/components/Navbar.vue';
import Slider from '@/components/Slider.vue';

let elements =[
    ["Home", ()=>{alert('Hola')}],
    ["About", ()=>{alert('Hola')}]
]
</script>

<template>
    <Navbar :elements="elements"></Navbar>
    <div class="home">
        <div class="home-text">
            <h1 class="home-h1">Hello!, I'm Angel Cueche</h1>
            <h2 class="home-h2">Junior Developer</h2>
            <p class="home-p">
                Computer Engineering Student
            </p>
            <p class="home-p"> A passionate person who is looking for real experience in the programming world!</p>
        </div>
    </div>
    <div class="division-div">
        <h1 class="about-me-h1">Who am I?</h1>
        <div class="about-me-text">
            <h2 class="about-me-h2">Lifelong learner</h2>
            <p class="about-me-p">An enthusiastic person looking for ways to apply the knowledge gathered during college.</p>
        </div>
    </div>
    
    <div class="projects division-div">
        <h1 class="about-me-h1"> Projects</h1>
        <Slider :total-slides="2">
            <template #slide-0 >
                <div style="display: flex; flex-direction: row; width: 100%;">
                    <div style="display: flex; justify-content: center; flex-direction: column; align-items: center;padding: 5%;">
                        <h1 style="margin-bottom: 0; height: 10%;">React <img src="../assets/react.png" style="max-width: 20%; max-height: 100%;"/></h1>
                        <p>A project for creating and managing notes, which includes the implementation of a personal server to securely and personally handle user sessions.</p>
                        <a href="https://note-project-react.vercel.app/" target="_blank"><img src="../assets/vercel.svg" title="Vercel" style="width: 200%;"/></a>
                    </div>
                    <Slider :total-slides="3" style="margin-right: 4%; margin-top: 14%">
                        <template #slide-0>
                            <img src="../assets/react/1.png" style="width: 100%; height:auto; max-width: 100%;"/>
                        </template>
                        <template #slide-1>
                            <img src="../assets/react/2.png" style="width: 100%; height:auto; max-width: 100%;"/>
                        </template>
                        <template #slide-2>
                            <img src="../assets/react/3.png" style="width: 100%; height:auto; max-width: 100%;"/>
                        </template>
                    </Slider>
                </div>
            </template>
            <template #slide-1>
                <h1>Prueba2</h1>
            </template>
        </Slider>
    </div>

</template>

<style scoped>
.home{
    background: linear-gradient(270deg, #08b51f82, #055610db);
    min-height: 100vh;
}

.division-div{
    height: 90vh;
}

.home-text{
    padding-top:8%;
    padding-left:7%;
    width: 30%;
    color:white;
}

h1{
  font-size: 3rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.about-me-h1{
    display: flex;
    justify-content: center;
    padding: 1%;
}

.about-me-text{
    float: right;
    width: 30%;
    padding: 3%;
    padding-right: 7%;
}

.projects{
    height: 90vh;
}
</style>
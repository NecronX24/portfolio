<script setup>
import Button from '@/components/Button.vue';
import Navbar from '@/components/Navbar.vue';
import Slider from '@/components/Slider.vue';
import CardSlider from '@/components/CardSlider.vue';

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
        <Slider :total-slides="3">
            <template #slide-0 >
                <CardSlider
                name="React"
                image="/public/react.png"
                content="A project for creating and managing notes, which includes the implementation of a personal server to securely and personally handle user sessions."
                github="https://github.com/NecronX24/note-project-react"
                vercel="https://note-project-react.vercel.app/"
                :slides="{
                    0:`public/react/1.png`,
                    1:`public/react/2.png`,
                    2:`public/react/3.png`
                }"
                ></CardSlider>
            </template>
            <template #slide-1>
                <CardSlider
                name="Angular"
                image="/public/angular.png"
                content="A project with ten clocks built as Angular components, including a personal server for secure session handling."
                github="https://github.com/NecronX24/clocks-angular"
                vercel="https://clocks-angular.vercel.app/clocks"
                :slides="{
                    0:`public/angular/1.png`,
                    1:`public/angular/2.png`,
                    2:`public/angular/3.png`
                }"
                ></CardSlider>
            </template>
            <template #slide-2>
                <CardSlider
                name="Vue"
                image="/public/vue.png"
                content="A portfolio built with Vue, showcasing component-based design and modern UI practices."
                github="https://github.com/NecronX24/portfolio"
                vercel="https://necronx24-portfolio.vercel.app/"
                :slides="{

                }"
                />
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
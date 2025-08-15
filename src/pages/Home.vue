<script setup>
import Button from '@/components/Button.vue';
import Navbar from '@/components/Navbar.vue';
import { onMounted, onBeforeUnmount, ref } from 'vue';
import AccordionImplementation from './AccordionImplementation.vue';
import ChartImplementation from './ChartImplementation.vue';
import SliderImplementation from './SliderImplementation.vue';

let elements =[
    ["Home", "home"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["About", "about"]
]

const navbarRef = ref(null);

let observers = [];

onMounted(() => {
    elements.forEach(([name, id], index) => {
        const section = document.getElementById(id);
        if (section) {
            const observer = new IntersectionObserver(
                (entries)  => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            if (navbarRef.value) {
                                navbarRef.value.selectItem(index);
                            }
                        }
                    });
                },
                { threshold: 0.6 } 
            );
            observer.observe(section);
            observers.push(observer);
        }
    });
});

onBeforeUnmount(() => {
    observers.forEach((observer) => observer.disconnect());
})
</script>

<template>
    <Navbar :elements="elements" ref="navbarRef"></Navbar>
    <div class="home" id="home">
        <div class="home-text">
            <h1 class="home-h1">Hello!, I'm Angel Cueche</h1>
            <h2 class="home-h2">Junior Developer</h2>
            <p class="home-p">
                Computer Engineering Student
            </p>
            <p class="home-p"> A passionate person who is looking for real experience in the programming world!</p>
        </div>
        <div class="image">
            <img src="/me.png" style="height: 100%; width: 100%; box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); border-radius: 50%;"/>
        </div>
    </div>
    <div class="division-div" id="skills">
        <h1 class="division-title">Skills</h1>
        <ChartImplementation/>
    </div>
    
    <div class="division-div" id="projects">
        <h1 class="division-title"> Projects</h1>
        <SliderImplementation/>
    </div>

    <div class="division-div" id="about">
        <h1 class="division-title">Who am I?</h1>
        <AccordionImplementation/>
    </div>

</template>

<style scoped>
.home{
    height: 100vh;
    display: flex;
    flex-direction: row;
    gap:5vw
}

.image{
    display: flex;
    align-items: center;
    justify-content: end;
    height: 70%;
    width: 28%;
    padding-top: 20vh;
}

.division-div{
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.home-text{
    padding-top:20vh;
    padding-left:10vw;
    width: 50vw;
}

.division-title{
    margin-top: 10vh;
    margin-bottom: 1.5vh;
    padding: 1vh;
    display: flex;
    justify-content: center;
}
</style>
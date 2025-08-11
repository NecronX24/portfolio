<script setup>
import Button from '@/components/Button.vue';
import Navbar from '@/components/Navbar.vue';
import Slider from '@/components/Slider.vue';
import CardSlider from '@/components/CardSlider.vue';
import { onMounted, onBeforeUnmount, ref } from 'vue';
import RadarChart from '@/components/RadarChart.vue';
import Accordion from '@/components/Accordion.vue';
import AccordionItem from '@/components/AccordionItem.vue';

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
                { threshold: 0.3 } 
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
        <h1>Skills</h1>
        <div style="display: flex; gap:5%">
            <div style="display: flex; flex-direction: column; align-items: center;">
                <h1>Active Skills</h1>
                <div class="chart">
                    <RadarChart :data="[
                        { name: 'HTML', value: 65 },
                        { name: 'CSS', value: 50 },
                        { name: 'JS', value: 75 },
                        { name: 'Vue', value: 50 },
                        { name: 'Angular', value: 50 },
                        { name: 'React', value: 50 },
                        { name: 'Design', value: 50 },
                    ]"/>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center;">
                <h1>Pasive Skills</h1>
                <div class="chart">
                    <RadarChart :data="[
                        { name: 'Critical Thinking', value: 90 },
                        { name: 'Flexibility', value: 100 },
                        { name: 'Communication', value: 90 },
                        { name: 'Grow Mindset', value: 89 },
                        { name: 'Leadership', value: 80 },
                    ]"/>
                </div>
            </div>
        </div>
    </div>
    
    <div class="projects division-div" id="projects">
        <h1 class="about-me-h1"> Projects</h1>
        <Slider :total-slides="4">
            <template #slide-0 >
                <CardSlider
                name="React"
                image="/react.png"
                content="A project for creating and managing notes, which includes the implementation of a personal server to securely and personally handle user sessions."
                github="https://github.com/NecronX24/note-project-react"
                vercel="https://note-project-react.vercel.app/"
                :slides="{
                    0:`/react/1.png`,
                    1:`/react/2.png`,
                    2:`/react/3.png`
                }"
                ></CardSlider>
            </template>
            <template #slide-1>
                <CardSlider
                name="Angular"
                image="/angular.png"
                content="A project with ten clocks built as Angular components, including a personal server for secure session handling."
                github="https://github.com/NecronX24/clocks-angular"
                vercel="https://clocks-angular.vercel.app/clocks"
                :slides="{
                    0:`/angular/1.png`,
                    1:`/angular/2.png`,
                    2:`/angular/3.png`
                }"
                ></CardSlider>
            </template>
            <template #slide-2>
                <CardSlider
                name="Vue"
                image="/vue.png"
                content="A portfolio built with Vue, showcasing component-based design and modern UI practices."
                github="https://github.com/NecronX24/portfolio"
                vercel="https://necronx24-portfolio.vercel.app/"
                :slides="{
                    0:`/vue/1.png`
                }"
                />
            </template>
            <template #slide-3>
                <h1>Other projects</h1>
                <div style="display: flex; flex-direction:row; gap:2%; align-items: center; justify-content: center;">
                    <p >A backend project made in</p> <img src="/node.png" style="width: 10%;"/>
                </div>
                <div style="display: flex; flex-direction:row; gap:2%; align-items: center; justify-content: center;">
                    <p >Basic projects made in</p> <img src="/c++.png" style="width: 5%;"/>
                    <p> and </p> <img src="/java.png" style="width: 5%;"/>
                </div>
            </template>
        </Slider>
    </div>

    <div class="division-div" id="about">
        <h1 class="about-me-h1">Who am I?</h1>
        <Accordion :single-open=true>
            <AccordionItem id="experience" title="Experience">
                <div style="display: flex; flex-direction: row; justify-content: center; gap: 3%;">
                    <img src="/about/1.png" style="border-radius: 10%; width: 30vw; height: auto;"></img>
                    <div >
                        <h1 style="margin: 0; width: 30vw;">Store Manager - Barista</h1>
                        <h2 style = "margin:0">Tres Puntos Cafe</h2>
                        <p style="margin: 0;">2020 - 2022</p>
                        <p style="font-weight: bolder; margin:0">Experience</p>
                        <ul style="margin:3%; width: 30vw;">
                            <li>Operation of espresso machine and coffee preparation</li>
                            <li>Staff supervision, shift management, and inventory control</li>
                            <li>Customer service - Host</li>
                        </ul>
                    </div>
                </div>
            </AccordionItem>
            <AccordionItem id="education" title="Education">
                <div style="display: flex; flex-direction: row; justify-content: center; gap: 3%;">
                    <img src="/about/2.png" style="border-radius: 10%; width: 20vw; height: auto;"></img>
                    <div>
                        <h2 style="margin: 0; width: 50vw;">Bachelor's Degree in Computer Engineering</h2>
                        <p style = "margin:0">Universidad Rafael Urdaneta</p>
                        <p style="margin: 0;">2021 - Present</p>
                        <p style="font-style: italic; margin:0">Honored four times on the Dean’s List and counting...</p>
                        <h2 style="margin:0; width: 50vw; margin-top: 1%;">Barista Course</h2>
                        <p style = "margin:0">Tercera Ola, EICV, Raul Martinez SCA Trainer</p>
                        <p style="margin: 0;">2019, 2022, 2024</p>
                        <h2 style="margin:0; width: 50vw; margin-top: 1%;">English Course</h2>
                        <p style = "margin:0">CEVAZ</p>
                        <p style="margin: 0;">2018 - 2020</p>
                    </div>
                </div>
            </AccordionItem>
            <AccordionItem id="personal-information" title="Personal Information">
                <ul>
                    <li>Mail: angeljavicueche@gmail.com</li>
                    <li>Phone: +58-412-6244-554</li>
                    <li>Location: Maracaibo, Venezuela</li>
                    <li>English Level: B2</li>
                </ul>
            </AccordionItem>
            <AccordionItem id="hobbies" title="Hobbies">
                <ul>
                    <li>Programming</li>
                    <li>Barista skills</li>
                    <li>Personal growth</li>
                    <li>Video games</li>
                    <li>Reading</li>
                    <li>Gardening</li>
                </ul>
            </AccordionItem>
        </Accordion>
    </div>

</template>

<style scoped>
#home{
    height: 100vh;
    display: flex;
    flex-direction: row;
    gap:20%
}

#skills{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 90vh;
    width: 100vw;
}

.chart{
    height: auto;
    width: 35vw;
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
    height: 90vh;
    scroll-margin-top: 10vh;
}

.home-text{
    padding-top:30vh;
    padding-left:10vw;
    width: 30%;
}

h1{
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  opacity: 0.9;
  color:white;
}

p, ul {
  font-size: 1.2rem;
  line-height: 1.6;
  color:white;
}

.about-me-h1{
    display: flex;
    justify-content: center;
    padding: 3%;
}


.projects{
    height: 90vh;
}
</style>
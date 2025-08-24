<script setup>
import Accordion from '@/components/Accordion.vue';
import AccordionItem from '@/components/AccordionItem.vue';
</script>

<template>
<Accordion :single-open=true>
            <AccordionItem id="experience" title="Experience">
                <div class="div">
                    <img class="img" src="/about/1.png"></img>
                    <div class="text-div">
                        <h1 class="h1">Store Manager - Barista</h1>
                        <h2 class="h2">Tres Puntos Cafe <span class="p">(2020 - 2022)</span></h2>
                        
                        <ul class="ul">
                            <li>Operation of espresso machine and coffee preparation</li>
                            <li>Staff supervision, shift management, and inventory control</li>
                            <li>Customer service - Host</li>
                        </ul>
                    </div>
                </div>
            </AccordionItem>
            <AccordionItem id="education" title="Education">
                <div class="div">
                    <img src="/about/2.png" class="img"></img>
                    <div class="text-div">
                        <div class="text-container">
                            <h2 class="h2">Bachelor's Degree in Computer Engineering</h2>
                            <p class="p">Universidad Rafael Urdaneta (2021 - Present)</p>
                            <p class="p" style="font-style: italic;">Honored four times on the Dean’s List and counting...</p>
                        </div>
                        <div class="text-container">
                            <h2 class="h2">Barista Course</h2>
                            <p class="p">Tercera Ola (2019), EICV (2022), Raul Martinez SCA Trainer (2024)</p>
                        </div>

                        <div class="text-container">
                            <h2 class="h2">English Course</h2>
                            <p class="p">CEVAZ (2028 - 2020)</p>
                        </div>
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
</template>
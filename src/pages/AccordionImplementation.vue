<script setup>
import Accordion from '@/components/Accordion.vue';
import AccordionItem from '@/components/AccordionItem.vue';
</script>

<template>
<Accordion :single-open=true>
            <AccordionItem id="experience" :title="$t('message.accordion.experience.title')">
                <div class="div">
                    <img class="img" src="/about/1.png"></img>
                    <div class="text-div">
                        <h1 class="h1">{{ $t('message.accordion.experience.workstation') }}</h1>
                        <h2 class="h2">{{ $t('message.accordion.experience.place') }}<span class="p">{{ $t('message.accordion.experience.time') }}</span></h2>
                        
                        <ul class="ul">
                            <li>{{ $t('message.accordion.experience.first') }}</li>
                            <li>{{ $t('message.accordion.experience.second') }}</li>
                            <li>{{ $t('message.accordion.experience.third') }}</li>
                        </ul>
                    </div>
                </div>
            </AccordionItem>
            <AccordionItem id="education" :title="$t('message.accordion.education.title')">
                <div class="div">
                    <img src="/about/2.png" class="img"></img>
                    <div class="text-div">
                        <div class="text-container">
                            <h2 class="h2">{{ $t('message.accordion.education.college.title') }}</h2>
                            <p class="p">{{ $t('message.accordion.education.college.place') }}</p>
                            <p class="p" style="font-style: italic;">{{ $t('message.accordion.education.college.comment') }}</p>
                        </div>
                        <div class="text-container">
                            <h2 class="h2">{{ $t('message.accordion.education.barista.title') }}</h2>
                            <p class="p">{{ $t('message.accordion.education.barista.place') }}</p>
                        </div>

                        <div class="text-container">
                            <h2 class="h2">{{ $t('message.accordion.education.english.title') }}</h2>
                            <p class="p">{{ $t('message.accordion.education.english.place') }}</p>
                        </div>
                    </div>
                </div>
            </AccordionItem>
            <AccordionItem id="personal-information" :title="$t('message.accordion.personal.title')">
                <ul>
                    <li>{{ $t('message.accordion.personal.mail') }}</li>
                    <li>{{ $t('message.accordion.personal.phone') }}</li>
                    <li>{{ $t('message.accordion.personal.location') }}</li>
                    <li>{{ $t('message.accordion.personal.english') }}</li>
                </ul>
            </AccordionItem>
            <AccordionItem id="hobbies" :title="$t('message.accordion.hobbies.title')">
                <ul>
                    <li>{{ $t('message.accordion.hobbies.first') }}</li>
                    <li>{{ $t('message.accordion.hobbies.second') }}</li>
                    <li>{{ $t('message.accordion.hobbies.third') }}</li>
                    <li>{{ $t('message.accordion.hobbies.fourth') }}</li>
                    <li>{{ $t('message.accordion.hobbies.fifth') }}</li>
                    <li>{{ $t('message.accordion.hobbies.sixth') }}</li>
                </ul>
            </AccordionItem>
        </Accordion>
</template>
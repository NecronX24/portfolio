<script setup>
import Slider from '@/components/Slider.vue';
import CardSlider from '@/components/CardSlider.vue';
</script>

<template>
    <Slider :total-slides="4">
            <template #slide-0 >
                <CardSlider
                :name="$t('message.slider.react.title')"
                image="/react.png"
                :content="$t('message.slider.react.content')"
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
                :name="$t('message.slider.angular.title')"
                image="/angular.png"
                :content="$t('message.slider.angular.content')"
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
                :name="$t('message.slider.vue.title')"
                image="/vue.png"
                :content="$t('message.slider.vue.content')"
                github="https://github.com/NecronX24/portfolio"
                vercel="https://necronx24-portfolio.vercel.app/"
                :slides="{
                    0:`/vue/1.png`
                }"
                />
            </template>
            <template #slide-3>
                <h1>{{ $t('message.slider.other.title') }}</h1>
                <div style="display: flex; flex-direction:row; gap:2%; align-items: center; justify-content: center;">
                    <p >{{ $t('message.slider.other.backend') }}</p> <img src="/node.png" style="width: 10%;"/>
                </div>
                <div style="display: flex; flex-direction:row; gap:2%; align-items: center; justify-content: center;">
                    <p >{{ $t('message.slider.other.projects') }}</p> <img src="/c++.png" style="width: 5%;"/>
                    <p> {{ $t('message.slider.other.and') }} </p> <img src="/java.png" style="width: 5%;"/>
                </div>
            </template>
        </Slider>
</template>
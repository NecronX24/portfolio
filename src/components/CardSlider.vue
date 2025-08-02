<script setup>
import Slider from './Slider.vue';
defineProps({
    name: {
        type: String,
        required:true
    },
    image: {
        type: String,
        required:true
    },
    content:{
        type: String,
        required:true
    },
    github:{
        type: String,
        required:true
    },
    vercel: {
        type: String
    },
    slides:{
        type: Object,
        required:true
    }
})
</script>

<template>
    <div style="display: flex; flex-direction: row; width: 100%;">
        <div style="display: flex; justify-content: center; flex-direction: column; align-items: center;padding: 5%;">
            <h1 style="margin-bottom: 0; height: 10%;">{{ name }} <img :src="image" style="max-width: 20%; max-height: 100%;"/></h1>
            <p>{{ content }}</p>
            <div style="display: flex; flex-direction: row; gap:50px; height:50px;">
                <a :href="github" target="_blank" style="width : 40%; height: 40%;"><img src="/public/github.png" title="Github" style="width : 40px; height: 40px;"/></a>
                <a :href="vercel" v-if="vercel!==null" target="_blank" style="width : 40%; height: 40%;"><img src="/public/vercel.svg" title="Vercel" style="width : 40px; height: 40px;"/></a>
            </div>
        </div>
        <Slider :total-slides="Object.keys(slides).length" style="margin-right: 4%; margin-top: 14%">
            <template v-for="(slide, index) in slides" :key="index" v-slot:[`slide-${index}`]>
                <img :src="slide" style="width: 100%; height:auto; max-width: 100%;"/>
            </template>
        </Slider>
    </div>
</template>

<style scoped>
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
}</style>
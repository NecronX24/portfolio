<script setup>
import { ref } from 'vue';

const props = defineProps({
  totalSlides: {
    type: Number,
    required: true
  }
});

const currentSlide = ref(0);

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + props.totalSlides) % props.totalSlides;
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % props.totalSlides;
}

function goToSlide(index) {
  currentSlide.value = index;
}
</script>

<template>
  <div class="container">
    <div class="slideshow-container">

      <transition name="fade" mode="out-in">
        <div class="slide-container" :key="currentSlide">
          <slot :name="'slide-' + currentSlide"></slot>
        </div>
      </transition>

      <a class="prev" @click="prevSlide">&#10094;</a>
      <a class="next" @click="nextSlide">&#10095;</a>
    </div>

    <div class="dots-container">
      <span
        v-for="(slide, index) in totalSlides"
        :key="index"
        class="dot"
        :class="{ active: currentSlide === index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 80vw;
  margin: 20px auto;
  min-height: 100%;
}

.slideshow-container {
  position: relative;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.457);
  color: #fff;
  height: 60vh;
  max-height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-container {
  width: 100%;
  text-align: center;
  padding: 20px;
  transition: 1s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 12px;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
  z-index: 10;
}
.prev:hover, .next:hover {
  background: rgba(255,255,255,0.2);
}

.prev {
  left: -3vw;
}
.next {
  right: -3vw;
}

.dots-container {
  text-align: center;
  margin-top: 15px;
}

.dot {
  height: 15px;
  width: 15px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dot.active, .dot:hover {
  background-color: #717171;
}
</style>

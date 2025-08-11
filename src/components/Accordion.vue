<script setup>
import { ref, provide } from 'vue';

const props = defineProps({
  initialOpenId: {
    type: [String, Number],
    default: null, 
  },
  
  singleOpen: {
    type: Boolean,
    default: true,
  },
});

const activeItemId = ref(
  //Set is a object that stores unique values
  new Set([props.initialOpenId])
);

const toggleItem = (id) => {
  if (activeItemId.value.has(id)) {
    activeItemId.value.delete(id); 
  } else {
    if(props.singleOpen) activeItemId.value.clear();
      activeItemId.value.add(id);
  }
};

provide('activeItemId', activeItemId);
provide('toggleItem', toggleItem);
</script>

<template>
  <div class="accordion-wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
.accordion-wrapper {
  border-radius: 8px;
  overflow: hidden;
  min-width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
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

p {
  font-size: 1.2rem;
  line-height: 1.6;
  color:white;
}
</style>
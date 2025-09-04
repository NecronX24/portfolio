<script setup>
import { ref } from 'vue'

const props = defineProps({
  elements: { type: Array, required: true },
  funct: Function
})

const dropdownOpen = ref(false)
const currentValue = ref(props.elements[0])

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function selectElement(element) {
  currentValue.value = element
  dropdownOpen.value = false
  props.funct && props.funct(element)
}
</script>

<template>
  <div class="dropdown">
    <button @click="toggleDropdown" class="button">
      {{ currentValue.label }}
      <span v-if="dropdownOpen">▲</span>
      <span v-else>▼</span>
    </button>
    <div v-if="dropdownOpen" class="dropdown-content">
      <a
        v-for="element in elements"
        :key="element.code"
        href="#"
        @click.prevent="selectElement(element)"
      >
        {{ element.label }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}
.button {
  width: 8.2dvw;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  padding: 8px 16px;
  font-size: 14px;
  border: solid;
  border-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  user-select: none; /*this prevents any interaction with the text*/
}
.dropdown-content {
  position: absolute;
  background-color: #282828;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content a {
  color: white;
  padding: 8px 14px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover{
  background-color: rgba(255, 255, 255, 0.3);
}
</style>

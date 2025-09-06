<script setup>
import Button from './Button.vue';
import { ref } from 'vue';
import DropdownMenu from './DropdownMenu.vue';
import { useI18n } from 'vue-i18n';
import MailForm from './MailForm.vue';

defineProps({
    elements:{
        type:Array,
        required:true
    },
    buttonText:{
        type:String,
        required:true
    }
})

const elementContainer = ref(null);

const selected = ref(0);
const selectItem = (index) =>{
    selected.value = index;
    
    const element = elementContainer.value.children[index];

    const containerWidth = elementContainer.value.clientWidth;
    const elementWidth = element.clientWidth;

    const elementLeft = element.offsetLeft;
    const scrollTo = elementLeft - (containerWidth/1.5) + (elementWidth/2);
    
    const maxScroll = elementContainer.value.scrollWidth - containerWidth;
    
    elementContainer.value.scrollTo({ left: Math.min(Math.max(scrollTo, 0), maxScroll), behavior: 'smooth' });
}
const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

defineExpose({
    selectItem,
    selected
})

const i18n = useI18n();

const selectLanguage = (language) =>{
    i18n.locale.value = language.code
}

const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' }
]

const formEvent = ref(null)

const toggleForm = () => {formEvent.value?.toggleMailForm()}
</script>

<template>
    <div class="container">
        <h1 class="home-button"
            @click="()=>{
                scrollToSection('home'); 
                selectItem(0)
            }"
        >
            Angel C
        </h1>
        <div class="element-container" ref="elementContainer">
            <h1 class="element"
                v-for="(element, index) in elements"
                :key="index"
                @click="()=>{scrollToSection(element[1]); selectItem(index)}"
                :class="{'selected': selected ===index}"
            >
                {{ element[0] }}</h1>
        </div>
        <div class="right-buttons">
            <Button :text="buttonText" :event="toggleForm" :colors="{backgroundColor:'#37ac62', textColor:'white', activeColor:'#206d3d'}"/>
            <DropdownMenu :elements="languages" :funct="selectLanguage"/>
        </div>
    </div>
    <MailForm ref="formEvent"></MailForm>
</template>

<style scoped>
@font-face{
  font-family: 'PlayfairDisplay';
  src: url('/PlayfairDisplay.ttf') format('truetype');
}
.container{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #282828;
    margin:0;
    width: 100%;
    height: 10vh;
    align-items: center;
    position: fixed;
    z-index: 10;
}

.home-button{
    cursor:pointer;
    margin-left: 2%;
    font-weight: 900;
    font-family: 'PlayfairDisplay';
    color: #37ac62;
    transition: 0.3s;
    font-size: 2.3rem;
    width: 17vw;
}

.home-button:hover{
    color:white;
}

.element-container{
    margin-top: 1vh;
    display: flex;
    flex-direction: row;
    overflow-x: auto;

    /*hidde overflow bar*/
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.element-container::-webkit-scrollbar{
    display: none;
}

.element{
    cursor:pointer;
    transition: 0.3s;
    color:white;
    position: relative;
    padding-bottom: 5px;
    margin:9px;
    font-size: 2rem;
}
.element:hover{
    color:#37ac62;
}

.button{
    margin-top: 1vh;
    margin-left: 1.5vw;
    width: 11dvw;;
}

.right-buttons{
    display: flex;
    flex-direction: row;
    gap: 1vw;
    margin-right: 1vw;
}

.dropdown{
    margin-top:2vh;
}

.element.selected{
    color:#37ac62;
}

.element.selected::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #37ac62;
    animation: underline 0.3s ease;
}

@keyframes underline {
    from {
        transform: scaleX(0);
    }
    to {
        transform: scaleX(1);
    }
}
</style>
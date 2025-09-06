<script setup>
import InputCard from './InputCard.vue';
import Input from './Input.vue';
import emailjs from '@emailjs/browser'
import { ref, defineExpose } from 'vue';

let form = ref(null);

const sendMail = async () =>{
    if (!form.value) {
        return
    }
    try {
        await emailjs.sendForm('necronx24mail', 'necronx24template', form.value, {publicKey: '18y-cOXw3LizMOTRy'});
        console.log('Email enviado correctamente');
        showMailForm.value = false;
    } catch (error) {
        console.log('Error en envio de mail' + error);
    }
}

let showMailForm = ref(false)

const toggleMailForm = () =>{
    showMailForm.value = !showMailForm.value
}

defineExpose({toggleMailForm})
</script>

<template>
    <div class="mail-form" v-show="showMailForm">
        <InputCard>
            <form ref="form" @submit.prevent="sendMail">
                <Input span-text="Your Name" name="name"/>
                <Input span-text="Your Email" name="mail" type="email"/>
                <Input span-text="Message" name="message" :text-area=true />
                <input type="submit" value="Send" />
            </form>
        </InputCard>
    </div>
</template>

<style scoped>
.mail-form{
    z-index: 11;
    background: rgba(0, 0, 0, 0.756);
    width: 100%;
    height: 100%;
}
</style>
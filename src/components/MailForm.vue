<script setup>
import InputCard from './InputCard.vue';
import Input from './Input.vue';
import emailjs from '@emailjs/browser'
import { ref } from 'vue';

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
    <InputCard v-show="showMailForm">
        <h1>{{ $t('message.mailForm.title') }}</h1>
        <form ref="form" @submit.prevent="sendMail">
            <Input :span-text="$t('message.mailForm.name')" name="name" hex-colors="ffffff90"/>
            <Input :span-text="$t('message.mailForm.mail')" name="mail" type="email" hex-colors="ffffff90"/>
            <Input :span-text="$t('message.mailForm.message')" name="message" :text-area=true hex-colors="ffffff90"/>
            <input type="submit" value="Send" />
        </form>
    </InputCard>
    <div class="mail-form" v-show="showMailForm" @click="toggleMailForm">
    </div>
</template>

<style scoped>
.mail-form{
    z-index: 2;
    background: rgba(0, 0, 0, 0.756);
    width: 100%;
    height: 100%;
    position: fixed;        
}
</style>
<script setup>
    import Input from "@/components/Input.vue"
    import InputCard from "@/components/InputCard.vue"
    import Button from "@/components/Button.vue"
    import {ref} from "vue"

    const login = [
        ["Usuario", "text"],
        ["Contraseña", "password"]
    ]

    const signup = [
        ["Usuario", "text"],
        ["Correo", "email"],
        ["Contraseña", "password"],
        ["Repetir Contraseña", "password"]
    ]

    let state = ref("Log In"); 
    let test = () =>{
        alert('Hello World')
    }
</script>

<template>
    <InputCard>
        <h1>{{ state }}</h1>
        <template v-if="state == 'Log In'">
            <Input v-for="(item, index) in login" :key="index" :span-text="item[0]" :type="item[1]"/>
        </template>
         <template v-else-if="state == 'Sign Up'">
            <Input v-for="(item, index) in signup" :key="index" :span-text="item[0]" :type="item[1]"/>
        </template>
        <Button :event="test" :text="state == 'Log In'? 'Log In' : 'Sign Up'"/>
        <p>
            {{ state == 'Log In' ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?' }}
            <a @click="state == 'Log In' ? state='Sign Up' : state='Log In'">
                {{ state == 'Log In' ? 'Regístrate' : 'Inicia sesión' }}
            </a>
        </p>
    </InputCard>
</template>

<style scoped>
p {
    margin-top: 20px;
    color: #808080;
}

p a {
    color: #2575fc;
    cursor: pointer;
    text-decoration: underline;
}

p a:hover {
    color: #1a4fd8;
}

</style>
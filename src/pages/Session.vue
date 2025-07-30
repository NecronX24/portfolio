<script setup>
    import Input from "@/components/Input.vue"
    import InputCard from "@/components/InputCard.vue"
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

    let state = ref("Sign Up"); 
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
    </InputCard>
</template>

<style scoped>
</style>
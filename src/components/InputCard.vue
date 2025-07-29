<script setup>

</script>

<template>
    <div class = "inputCard">
        <slot>
        </slot>
    </div>
</template>

<style scoped>
    .inputCard {
        position: fixed;       
        top: 50%;             
        left: 50%;            
        transform: translate(-50%, -50%); 
        background-color: white;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
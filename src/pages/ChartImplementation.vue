<script setup>
import RadarChart from '@/components/RadarChart.vue';
</script>

<template>
<div class="container">
            <div class="chart-container">
                <h1>Active Skills</h1>
                <div class="chart">
                    <RadarChart :data="[
                        { name: 'HTML', value: 65 },
                        { name: 'CSS', value: 50 },
                        { name: 'JS', value: 75 },
                        { name: 'Vue', value: 50 },
                        { name: 'Angular', value: 50 },
                        { name: 'React', value: 50 },
                        { name: 'Design', value: 50 },
                    ]"/>
                </div>
            </div>
            <div class="chart-container">
                <h1>Pasive Skills</h1>
                <div class="chart">
                    <RadarChart :data="[
                        { name: 'Critical Thinking', value: 90 },
                        { name: 'Flexibility', value: 100 },
                        { name: 'Communication', value: 90 },
                        { name: 'Grow Mindset', value: 89 },
                        { name: 'Leadership', value: 80 },
                    ]"/>
                </div>
            </div>
        </div>
</template>

<style scoped>
.container{
    display: flex;
    gap:5%;
}

.chart-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.chart{
    height: auto;
    width: 35vw;
}

h1{
    margin:0
}
</style>
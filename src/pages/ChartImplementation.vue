<script setup>
import RadarChart from '@/components/RadarChart.vue';
</script>

<template>
<div class="container">
            <div class="chart-container">
                <h1>{{ $t('message.chart.active') }}</h1>
                <div class="chart">
                    <RadarChart :data="[
                        { name: 'HTML', value: 65 },
                        { name: 'CSS', value: 50 },
                        { name: 'JS', value: 75 },
                        { name: 'Vue', value: 50 },
                        { name: 'Angular', value: 50 },
                        { name: 'React', value: 50 },
                        { name: $t('message.chart.activeRadar.design') , value: 50 },
                    ]"/>
                </div>
            </div>
            <div class="chart-container">
                <h1>{{$t('message.chart.passive')}}</h1>
                <div class="chart">
                    <RadarChart :data="[
                        { name: $t('message.chart.passiveRadar.first'), value: 90 },
                        { name: $t('message.chart.passiveRadar.second'), value: 100 },
                        { name: $t('message.chart.passiveRadar.third'), value: 90 },
                        { name: $t('message.chart.passiveRadar.fourth'), value: 89 },
                        { name: $t('message.chart.passiveRadar.fifth'), value: 80 },
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
    margin:0;
    padding:0;
}
</style>
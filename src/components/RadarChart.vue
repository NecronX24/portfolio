<script>
export default {
  name: 'RadarChart',
  props: {
    data: {
      type: Array,
      required: true,
    },
    size: {
      type: Number,
      default: 300,
    }
  },
  computed: {
    computedSize() {
      return this.size || '100%';
    },
    center() {
      return this.computedSize / 2;
    },
    radius() {
      return this.center - 40;
    },
    angleStep() {
      return (2 * Math.PI) / this.data.length;
    },
    polygonPoints() {
      return this.data.map((item, i) => {
        const angle = this.angleStep * i - Math.PI / 2;
        const r = this.radius * item.value / 100;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        return `${x},${y}`;
      }).join(' ');
    },
    padding() {
      return 10;
    }
  }
}
</script>

<template>
  <svg :width="computedSize" :height="computedSize" :viewBox="`-${padding} -${padding} ${parseInt(computedSize) + padding*2} ${parseInt(computedSize) + padding*2}`" class="radar-chart">
    <g :transform="`translate(${center}, ${center})`">
      <line v-for="(item, i) in data" :key="'line-'+i" :x2="Math.cos(angleStep * i - Math.PI/2) * radius" :y2="Math.sin(angleStep * i - Math.PI/2) * radius" stroke="#ccc" />
      <circle v-for="r in 4" :key="'circle-'+r" :r="radius * r / 4" fill="none" stroke="#ddd" />
      <polygon :points="polygonPoints" fill="rgba(8, 181, 31, 0.5)" stroke="#055610" stroke-width="2" />
      <text v-for="(item, i) in data" :key="'label-'+i" :x="Math.cos(angleStep * i - Math.PI/2) * (radius + 20)" :y="Math.sin(angleStep * i - Math.PI/2) * (radius + 20)" font-size="12" text-anchor="middle" alignment-baseline="middle" fill="#ffffff">{{ item.name }}</text>
      <circle v-for="(item, i) in data" :key="'point-'+i" :cx="Math.cos(angleStep * i - Math.PI/2) * (radius * item.value / 100)" :cy="Math.sin(angleStep * i - Math.PI/2) * (radius * item.value / 100)" r="4" fill="#055610" stroke="#fff" stroke-width="1" />
    </g>
  </svg>
</template>

<style scoped>
.radar-chart {
  background: transparent;
  width: 100%;
  height: auto;
  overflow: visible;
}
</style>
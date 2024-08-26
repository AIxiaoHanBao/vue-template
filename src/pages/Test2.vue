<script setup lang="ts">
import {ref} from "vue";
import Echarts from '@/components/ReEcharts/index.vue';

const option = ref({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}
)

</script>

<template>
<h1>第二个页面</h1>
<h1>第二个页面</h1>
<div style="width: 100%;height: 500px;">
  <Echarts style="" :option="option" />
</div>
</template>

<style scoped>
</style>

<template>
    <div class="cardsarea">
        <div class="chart-card">
        <div id="chart-head">
            <v-chart class="chart" :option="option1" />
        </div>
        <div id="card-info">
            <div id="card-header">
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            </div>
            <div id="card-description">
                <h2>Laborum ea illo ad minima illum veniam aperiam asperiores fuga sed nesciunt nemo, laboriosam ipsa provident doloremque repellendus facere quibusdam, saepe non.</h2>
            </div>
        </div>
    </div>
    <div class="chart-card">
        <div id="chart-head">
            <v-chart class="chart" :option="option2" />
        </div>
        <div id="card-info">
            <div id="card-header">
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            </div>
            <div id="card-description">
                <h2>Laborum ea illo ad minima illum veniam aperiam asperiores fuga sed nesciunt nemo, laboriosam ipsa provident doloremque repellendus facere quibusdam, saepe non.</h2>
            </div>
        </div>
    </div>
    <div class="chart-card">
        <div id="chart-head">
            <v-chart class="chart" :option="option3" />
        </div>
        <div id="card-info">
            <div id="card-header">
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            </div>
            <div id="card-description">
                <h2>Laborum ea illo ad minima illum veniam aperiam asperiores fuga sed nesciunt nemo, laboriosam ipsa provident doloremque repellendus facere quibusdam, saepe non.</h2>
            </div>
        </div>
    </div>
    <div class="chart-card">
        <div id="chart-head">
            <v-chart class="chart" :option="option4" />
        </div>
        <div id="card-info">
            <div id="card-header">
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
            </div>
            <div id="card-description">
                <h2>Laborum ea illo ad minima illum veniam aperiam asperiores fuga sed nesciunt nemo, laboriosam ipsa provident doloremque repellendus facere quibusdam, saepe non.</h2>
            </div>
        </div>
    </div>
    </div>
</template>

<script lang="ts" setup>
import VChart, { THEME_KEY } from "vue-echarts";
import { ref } from 'vue';

const option4 = ref({
    xAxis: {
    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  yAxis: {},
  series: [
    {
      type: 'scatter',
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
  })

const option3 = ref({
    xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
    }
  ]
  })

const option2 = ref({
  xAxis: {
    data: ['A', 'B', 'C']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150],
      type: 'line'
    }
  ]
})

const option1 = ref({
    xAxis: {
    data: ['A', 'B', 'C', 'D', 'E']
  },
  yAxis: {},
  series: [
    {
      data: [10, 22, 28, 23, 19],
      type: 'line',
      // @ts-ignore
      areaStyle: {
        color: '#09700e',
        opacity: 0.5
      }
    },
    {
      data: [25, 14, 23, 35, 10],
      type: 'line',
      // @ts-ignore
      areaStyle: {
        color: '#0b0970',
        opacity: 0.5
      }
    }
  ]
  });
</script>

<style lang="scss" scoped>
@import '/public/scss/CardStyle.scss';
</style>
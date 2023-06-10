<template>
    <div class="settings">
        <div id="designed-chart">
            <v-chart :key="keyValue" class="chart" :option="option" />
        </div>
        <div class="options-fields">
            <div class="select">
                <select>
                    <option value="BarChart">Bar Chart</option>
                    <option value="LineChart">Line Chart</option>
                    <option value="PieChart">Pie Chart</option>
                    <option value="ScatterChart">Scatter Chart</option>
                    <option value="AreaChart">Area Chart</option>
                    <option value="RadarChart">Radar Chart</option>
                </select>
            </div>
            <div class="check">
                <div class="input-wrapper">
                    <input v-model="mainTitle" class="input" type="text" placeholder="Change main title text">
                </div>
                <div class="input-wrapper">
                    <input v-model="subTitle" class="input" type="text" placeholder="Change sub title text">
                </div>
                <div class="input-wrapper">
                    <input v-model.number="MainfontSize" class="input" type="number">
                </div>
                <div class="input-wrapper">
                    <input v-model.number="SubfontSize" class="input" type="number">
                </div>
                <label id="titleOption" class="checkbox">
                    <input @click="titleOptionF" type="checkbox" checked> Show Title
                </label>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, watch } from 'vue';

const keyValue = ref(10);
const mainTitle = ref('Main Title');
const subTitle = ref('Sub Title');
const MainfontSize = ref(30);
const SubfontSize = ref(20);

const reload = () => {
    keyValue.value = Math.random();
}

const option = ref({
   xAxis: {
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
  title: {
    text: "Main Title",
    subtext: "Sub Title",
    left: "center",
    top: "center",
    show: true,
    textStyle: {
      fontSize: 30
    },
    subtextStyle: {
      fontSize: 20
    }
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
    }
  ]

});


watch(() => mainTitle.value, (newValue, oldValue) => {
    option.value.title.text = newValue
    reload();
})

watch(() => subTitle.value, (newValue, oldValue) => {
    option.value.title.subtext = newValue
    reload();
})

watch(() => MainfontSize.value, (newValue, oldValue) => {
    option.value.title.textStyle.fontSize = newValue
    reload();
})

watch(() => SubfontSize.value, (newValue, oldValue) => {
    option.value.title.subtextStyle.fontSize = newValue
    reload();
})

const titleOptionF = () => {
    option.value.title.show = !option.value.title.show;
    reload();
}
</script>

<style scoped lang="scss">
.options-fields{
    padding: 20px;
    flex: 0.5;
    border-left: 1px solid rgba(205, 191, 191, 0.708);
    height: 100vh;
}
.settings {
    display: flex;
}
#designed-chart{
    width: 600px;
    height: 400px;
    max-width: 600px;
    max-height: 400px;
    display: flex;
    flex: 1;
    align-items: left;
    justify-content: left;
    margin-top: 7%;
}
.chart{
    width: 600px;
    height: 400px;
    max-width: 600px;
    max-height: 400px;
    position: fixed;
}
.check{
    label{
        display: block;
        margin: 10px 0px 10px 3px;
    }
}
.input-wrapper {
  display: flex;
  align-items: center;
}
.button {
  margin-left: 10px;
  border-color: rgba(88, 87, 87, 0.515);
}
input[type="text"], input[type="number"]{
    width: 300px;
    margin: 10px 0px 10px 0px;
    text-align: center;
}
</style>
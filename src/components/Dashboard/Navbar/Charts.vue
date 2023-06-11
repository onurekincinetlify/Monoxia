<template>
    <div class="settings">
        <div id="designed-chart">
            <v-chart :key="keyValue" class="chart" :option="option" />
        </div>
        <div class="options-fields">
            <div class="select">
                <select v-model="selectedChart">
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
                <div class="input-wrapper">
                    <input id="xaxisCountInput" v-model.number="xaxisCount" class="input" type="number">
                </div>
                <div style="float:left;margin: 10px 5px 0px 0px;position: fixed;max-width: 70px;" class="select">
                    <select v-model="changeTheIndex">
                        <option v-for="name in option.xAxis.data" :key="name">{{ name }}</option>
                    </select>
                </div>
                <div style="width:219.5px; position: fixed;margin-left: 80px;" class="input-wrapper">
                    <input id="changeXValue" @keyup.enter="addNameToX" :value="option.xAxis.data[option.xAxis.data.indexOf(changeTheIndex)]" class="input" type="text" placeholder="Type and push the enter.">
                </div>
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
const selectedChart = ref('BarChart');
const xaxisCount = ref(7);
const changeTheIndex = ref('');

const reload = () => {
    keyValue.value = Math.random();
}

const option = ref({
   xAxis: {
    data: ['Xa', 'Xb', 'Xc', 'Xd', 'Xe', 'Xf', 'Xg']
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

const addNameToX = () => {
    let vale:HTMLInputElement | null = document.getElementById('changeXValue') as HTMLInputElement;
    option.value.xAxis.data[option.value.xAxis.data.indexOf(changeTheIndex.value)] = vale.value
}


watch(() => selectedChart.value, (newValue, oldValue) => {
    if (newValue === "LineChart") {
        option.value.series[0]['type'] = 'line';
    } else if (newValue === 'BarChart'){
        option.value.series[0]['type'] = 'bar';
    } else if (newValue === 'ScatterChart') {
        option.value.series[0]['type'] = 'scatter';
    }
    reload();
})


watch(() => mainTitle.value, (newValue, oldValue) => {
    option.value.title.text = newValue
    reload();
})

watch(() => xaxisCount.value, (newValue, oldValue) => {
    if (newValue < 1) {
        xaxisCount.value = 1
        console.log({newValue,oldValue})
    }
    else if (newValue > oldValue) {
        if (newValue === 1) {
            return;
        }
        option.value.xAxis.data.push(Math.random().toString().slice(0, 4))
        option.value.series[0]['data'].push(Math.random() * 30)
    } else if (newValue < oldValue) {
        console.log('azalt')
        option.value.xAxis.data.pop()
    }
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
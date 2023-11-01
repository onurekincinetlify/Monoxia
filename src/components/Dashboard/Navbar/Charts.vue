<template>
    <div class="settings">
        <div id="designed-chart">
            <v-chart :key="keyValue" class="chart" :option="option" />
        </div>
        <div class="options-fields">
            <label class="smallInfo">Choose the type of chart : </label>
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
                    <label style="margin-top:10px">Change main text : </label>
                    <input v-model="mainTitle" class="input" type="text" placeholder="Change main title text">
                </div>
                <div class="input-wrapper">
                    <label>Change sub text : </label>
                    <input v-model="subTitle" class="input" type="text" placeholder="Change sub title text">
                </div>
                <div class="input-wrapper">
                    <label>Set the font size of the main text : </label>
                    <input v-model.number="MainfontSize" class="input" type="number">
                </div>
                <div class="input-wrapper">
                    <label>Set the font size of the sub text : </label>
                    <input v-model.number="SubfontSize" class="input" type="number">
                </div>
                <label id="titleOption" class="checkbox">
                    <label class="smallInfo">Show/hide the text on the screen : </label>
                    <input @click="titleOptionF" type="checkbox" checked> Show Title
                </label>
                <div class="input-wrapper">
                    <label>Increase xAxis count : </label>
                    <input id="xaxisCountInput" v-model.number="xaxisCount" class="input" type="number">
                </div>
                <div class="input-wrapper">
                    <label>Increase yAxis count : </label>
                    <input id="xaxisCountInput" v-model.number="yaxisCount" class="input" type="number">
                </div>
                <div id="listAndChange">
                    <div id="ListTheData" class="select">
                    <select v-model="changeTheIndex">
                        <option v-for="name in option.xAxis.data" :key="name">{{ name }}</option>
                    </select>
                </div>
                <div id="addNametoX" class="input-wrapper">
                    <input id="changeXValue" @keyup.enter="addNameToX" :value="option.xAxis.data[option.xAxis.data.indexOf(changeTheIndex)]" class="input" type="text" placeholder="Change the values of yAxis">
                </div>
                </div>

                <div id="listAndChangeY">
                    <div id="ListTheData" class="select">
                    <select v-model="changeTheIndexY">
                        <option v-for="name in option.yAxis.data" :key="name">{{ name }}</option>
                    </select>
                </div>
                <div id="addNametoY" class="input-wrapper">
                    <input id="changeYValue" @keyup.enter="addNameToY" :value="option.yAxis.data[option.yAxis.data.indexOf(changeTheIndexY)]" class="input" type="text" placeholder="Change the values of xAxis">
                </div>
                </div>
                <div id="saveChanges">
                    <button class="button" @click="saveTheChart">Save the Chart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import VChart, { THEME_KEY } from "vue-echarts";
import html2canvas from 'html2canvas';
import { ref, watch } from 'vue';
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from '../../../firebase';

const keyValue = ref(10);
const mainTitle = ref('Main Title');
const subTitle = ref('Sub Title');
const MainfontSize = ref(30);
const SubfontSize = ref(20);
const selectedChart = ref('BarChart');
const xaxisCount = ref(7);
const yaxisCount = ref(7);
const changeTheIndex = ref('');
const changeTheIndexY = ref('');
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
    yAxis: {
    data: ['Ya', 'Yb', 'Yc', 'Yd', 'Ye', 'Yf', 'Yg']
  },
  series: [
    {
      type: 'bar',
      data: [23, 24, 18, 25, 27, 28, 25]
    }
  ]

});

const saveTheChart = async () => {
    if (option.value) {
        const colRef = collection(db, 'addedChart');
        const id: any = localStorage.getItem('userCookie');
        const dataObj = {
          localId: localStorage.getItem('userCookie'),
            chart: option.value,
            chartId: Math.random()
        };
        const docRef = doc(colRef); 
        await setDoc(docRef, dataObj);
        alert('Your Chart Saved')
    }
}

const addNameToX = () => {
    let vale:HTMLInputElement | null = document.getElementById('changeXValue') as HTMLInputElement;
    option.value.xAxis.data[option.value.xAxis.data.indexOf(changeTheIndex.value)] = vale.value
}

const addNameToY = () => {
    let vale:HTMLInputElement | null = document.getElementById('changeYValue') as HTMLInputElement;
    option.value.yAxis.data[option.value.yAxis.data.indexOf(changeTheIndexY.value)] = vale.value
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

watch(() => yaxisCount.value, (newValue, oldValue) => {
    if (newValue < 1) {
        yaxisCount.value = 1
        console.log({newValue,oldValue})
    }
    else if (newValue > oldValue) {
        if (newValue === 1) {
            return;
        }
        option.value.yAxis.data.push(Math.random().toString().slice(0, 4))
        option.value.series[0]['data'].push(Math.random() * 30)
    } else if (newValue < oldValue) {
        console.log('azalt')
        option.value.yAxis.data.pop()
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
@import "/public/scss/Dashboard/Navbar/ChartStyle.scss";
</style>
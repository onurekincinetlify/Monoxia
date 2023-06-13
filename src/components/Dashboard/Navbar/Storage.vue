<template>
    <div id="Storage" :key="reloadStorage" class="Storage">
         <div id="notification" class="notification is-info is-light">
            <button @click="deleteNotifi" id="deleteButton" class="delete"></button>
            Your saved charts are displayed here on our website. You can manage, edit, and share your charts through your account. Visualize your data effectively and track your progress. Enjoy easy access to your charts. Welcome to a world full of charts!
        </div>
        <div  class="selectAndDownload">
            <div class="selectItem select">
                <select>
                    <option v-for="ci in chartId" :key="ci">Select {{ ci }}</option>
                </select>
            </div>
        <button class="button">Download</button>
        <button @click="hotReloadStorage().then(()=>{changevariables()})" class="button">Reload</button>
        <button @click="clearAll" class="button">Clear All</button>
        </div>
        <div v-for="ch in charts" :key="ch">
            <v-chart :key="ch" class="chart" :option="ch" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import VChart, { THEME_KEY } from "vue-echarts";
import html2canvas from 'html2canvas';
import { collection, getDocs, query, where, deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../../../firebase';
import { onMounted, Ref, ref } from "vue";

const reloadStorage = ref(0);

// html2canvas(designedChart).then(function(canvas) {
//     var link = document.createElement("a");
//     link.href = canvas.toDataURL("image/png");
//     link.download = "screenshot.png";
//     link.click();
//   });

const getChartsById = async () => {
    const colRef = collection(db, 'addedChart');
  const id = localStorage.getItem('userCookie');
  const querySnapshot = await getDocs(query(colRef, where('localId', '==', id)));

    const charts: Ref<any[]> = ref([]);
    const chartId: Ref<any[]> = ref([]);
  querySnapshot.forEach((doc) => {
    const data:any =ref(doc.data());
    const chart: any = ref(data.value.chart);
    const chartID: any = ref(data.value.chartId);
      charts.value.push(chart.value);
    chartId.value.push(chartID.value);
  });

  return {charts, chartId};
};
const { charts, chartId } = await getChartsById();

const chartsl = ref(charts)
const chartid = ref(chartId)

const hotReloadStorage = async () => {
    const { charts, chartId } = await getChartsById();
    return {charts, chartId}
}

const clearAll = async () => {
     const colRef = collection(db, 'addedChart');
  const id = localStorage.getItem('userCookie');
  const querySnapshot = await getDocs(query(colRef, where('localId', '==', id)));
    querySnapshot.forEach(async(doca) => {
        if (doca._key.path.segments[6]) {
            await deleteDoc(doc(db, 'addedChart', doca._key.path.segments[6]))   
        }
  });
}

const changevariables = async () => {
    const { charts, chartId } = await hotReloadStorage();
    chartsl.value = charts.value
    chartid.value = chartId.value
    reloadStorage.value = Math.random();
}

const deleteNotifi = () => {
let deleteButton= document.getElementById('notification');
if (deleteButton) {
    deleteButton.classList.add('deleteEL');
} else {
}
}
</script>

<style scoped lang="scss">
.Storage{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.chart{
    width: 900px;
    height: 500px;
    max-width: 1000px;
    max-height: 560px;
}
.selectAndDownload{
    display: flex;
    .selectItem{
        flex: 1;
    }
    button {
        flex: 1;
        margin-left: 20px;
    }
}
</style>
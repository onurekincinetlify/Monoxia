<template>
  <div class="home-root">
    <div id="entrie">

      <Alertbox />      <!-- data-aos="fade-left" data-aos-duration="1500" -->
      <div class="first-section">
        <div class="intro">
        <h1>A glimpse into the unique world of Monoxia.</h1>
        <p>
          Welcome! You are in the right place to step into the world of graphic design or improve your existing skills. 
          Our Graphic Design Site is here to let you explore your creativity, develop your design skills and be inspired. 
          Graphic design is a powerful communication tool and aims to create aesthetically impressive and effective visual experiences by combining art and technology. 
          Our site has a range of features equipped with a variety of design tools, resources and guidance. 
          In addition to being a designer, we also offer a lot for business owners, marketers or simply enthusiasts interested in design projects.
        </p> 
      </div>
      <div class="home-right-bg">
        <img class="model" src="https://wext.in/wp-content/uploads/2018/05/5-tips-winning-business-presentation-625x417.png" alt="">
        <img class="custom-img-1" src="https://docs.cypress.io/img/logo/cypress-logo-dark.png" />
        <img class="custom-img-2" src="https://docs.cypress.io/img/logo/cypress-logo-dark.png" />
      </div>
      </div>
      <div class="second-section">
        <div id="demo-chart">
        <!-- data-aos="zoom-in" data-aos-duration="1500" -->
        <v-chart v-log.onur="() => {return 'hi'}" class="chart" :option="option" />

        <h2>You can click on the type you want below to see different chart types.</h2>
        <!-- data-aos="fade-right" data-aos-duration="1000" -->
        <div class="b-place">
          <button @click="ConvertToBar">Bar Chart</button>
          <button @click="ConvertToLine">Line Chart</button>
          <button @click="ConvertToPie">Pie Chart</button>
          <button @click="ConvertToScatter">Scatter Chart</button>
          <button @click="ConvertToArea">Area Chart</button>
        </div>
      </div>
      <div class="intro2">
        <h1>A glimpse into the unique world of Monoxia.</h1>
        <p>
          Welcome! You are in the right place to step into the world of graphic design or improve your existing skills. 
          Our Graphic Design Site is here to let you explore your creativity, develop your design skills and be inspired. 
          Graphic design is a powerful communication tool and aims to create aesthetically impressive and effective visual experiences by combining art and technology. 
          Our site has a range of features equipped with a variety of design tools, resources and guidance. 
          In addition to being a designer, we also offer a lot for business owners, marketers or simply enthusiasts interested in design projects.
        </p> 
      </div>
      </div>
    
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import VChart, { THEME_KEY } from "vue-echarts";
import Footer from '/src/components/Footer.vue';
// @ts-ignore has no default export.
import Alertbox from "./Alert/AlertBox.vue";
import { ref } from "vue";

const ConvertToBar = () => {
  option.value = {
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
  }
};

const ConvertToLine = () => {
  option.value = {
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
  };
};

const ConvertToPie = () => {
  option.value = {
    series: [
      {
        type: 'pie',
        data: [
          // @ts-ignore
          {
            value: 335,
            name: 'Direct Visit'
          },
          // @ts-ignore
          {
            value: 234,
            name: 'Union Ad'
          },
          // @ts-ignore
          {
            value: 1548,
            name: 'Search Engine'
          }
        ]
      }
    ]
  }
};

const ConvertToScatter = () => {
  option.value = {
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
  }
};

const ConvertToArea = () => {
  option.value = {
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
  }
};

const option = ref({
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

});
</script>

<style lang="scss" scoped>
@import '/public/scss/HomeStyle.scss';
</style>
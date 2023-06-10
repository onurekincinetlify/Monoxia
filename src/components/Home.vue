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
      <div id="boxLine" class="box-line">
        <div class="box">
          <h1>Our Services</h1>
          <p>Based on customer needs, we will make improvements.</p>
        </div>
        <div class="box">
          <i class='bx bx-cog'></i>
          <h1>Functionality</h1>
          <p>You are free to create the desired design with high-functionality graphics.</p>
        </div>
        <div class="box">
          <i class='bx bx-server'></i>
          <h1>Effectiveness</h1>
          <p>Our service is highly fast, and you can download any project you have within seconds.</p>
        </div>
        <div class="box">
          <i class='bx bx-scatter-chart' ></i>
          <h1>Diversity</h1>
          <p>We have a wide range of beautiful graphic options, each more stunning than the other.</p>
        </div>
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
      <div id="intro2" class="intro2">
        <h1>All the diverse and functional graphics are available at Monoxia</h1>
        <p>
          Our graphics offer limitless variety! Enjoy adding vibrancy to your project with our carefully designed, eye-catching, and impressive graphics. From low fidelity to high resolution, from minimalist design to vibrant colors, you will find every style and type imaginable. Push the boundaries with our creative graphic options to enhance your visual presentation and captivate your audience. Each button will open the doors to a new world, offering a mesmerizing graphic experience that will leave you in awe. Get ready, as you are just one click away from embarking on an unforgettable visual journey!
        </p> 
      </div>
      </div>
      <div class="third-section">
      <div id="intro3" class="intro3">
        <h1>Monoxia: Bring Economic Data to Life, Design Your Graphics, and Obtain Impressive Outputs!</h1>
        <p>
          Monoxia's user-friendly interface simplifies the process of designing graphics. Users can choose from different types of charts and personalize their graphics with customization options such as colors, labels, and titles. Additionally, they can save their designed graphics in any size and format as output.
This feature allows users to use their graphics in presentations, reports, or other professional documents. Monoxia facilitates effective visualization and presentation of data, making economic analysis processes easier and helping to achieve more impactful results.
        </p> 
      </div>
      <div class="home-right-bg-section3">
        <img src="../../public/images/printedchart.jpg" alt="Printed Chart">
      </div>
      </div>
      <div class="forth-section">
       <video autoplay loop muted>
          <source src="/videos/bussines.mp4" type="video/mp4">
          Your browser does not support the video tag.
       </video> 
      <div id="intro4" class="intro4">
        <h1>Expand the Horizons of Graphic Design, Step into the Future with Exciting New Features!</h1>
        <p>
          Monoxia is a constantly evolving platform that brings new features and innovations. In the future, we aim to provide even more capabilities to our users. We are working on developing mobile and desktop applications, allowing our users to design their desired graphs and obtain output with ease.

As a global platform, Monoxia envisions providing language support to users worldwide. This will enable users from different languages to comfortably utilize Monoxia and effectively visualize their data.

Monoxia offers an extensive library of graph types, allowing users to choose from various options. Line graphs, bar charts, pie charts, and more can be used to visually represent data. This empowers users to create presentations and reports according to their preferences, resulting in impressive outcomes.

With its user-friendly interface, continuous feature updates, and broad language and graph support, Monoxia will continue to meet the expectations of its users. We will constantly strive to enhance Monoxia based on your support and feedback, enabling you to visualize your data more effectively. We eagerly look forward to sharing new features and developments with you. Embrace Monoxia, bring your data to life, and unlock the power of impactful graphs.
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
import aboutus from '/src/components/Navbar/About.vue';
// @ts-ignore has no default export.
import Alertbox from "./Alert/AlertBox.vue";
import { ref } from "vue";

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;

  if (scrollPosition > 90) {
    var lineBox = document.getElementById('boxLine');
    lineBox?.classList.add("bottomtotop")
  }
  if (scrollPosition > 320) {
    var intro2 = document.getElementById('intro2')
    intro2?.classList.add("righttoleft")
  }
});

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
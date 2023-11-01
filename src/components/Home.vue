<template>
  <div class="container1">
    <div class="navbar1">
        <div class="logo">
        <img src="../../public/images/Logo/Logo.png" alt="">
        </div>
        <div class="nav-buttons">
            <a href="#" class="nav-button">+90 552 748 03 29 / Contact us</a>
            <div class="garipKutu">
              <div class="garipKutu2"></div>
            </div>
        </div>
      </div>
      <div class="navbar2">
        <div class="icons">
          <i @click="facebook" class='bx bxl-facebook'></i>
          <i @click="linkedin" class='bx bxl-linkedin'></i>
          <i @click="twitter" class='bx bxl-twitter' ></i>
        </div>
      </div>
      <div class="homeDiv1">
        <div class="headerDiv">
          <h1>Deprem Takip</h1>
          <h1>Yardım Bildirisi Sistemi </h1>
        </div>
        <router-link to="/Login" class="redirectButton">Hayatını Güvenceye Al</router-link>
      </div>
      <div class="homeDiv2"></div>
  </div>
</template>

<script lang="ts" setup>
import 'boxicons';

const twitter = () => {
  window.location.href = "https://twitter.com/TheOnur_x";
}
const facebook = () => {
  window.location.href = "https://facebook.com/";
}
const linkedin = () => {
  window.location.href = "https://www.linkedin.com/in/onur-ekinci-64576527a/";
}

</script>

<style lang="scss" scoped>
// @import '/public/scss/HomeStyle.scss';

.redirectButton{
  cursor: pointer;
}

.bx{
  cursor: pointer
}

@import url('https://fonts.googleapis.com/css2?family=Assistant&family=Montserrat+Alternates:ital,wght@1,300&family=Poppins:wght@700&display=swap');
*{
  margin: 0;
  padding: 0;
}
.navbar2{
  position: absolute;
  height: 100vh;
  width: 50px;
  z-index: 20;
  right: 0;
  .icons{
    margin: 500px 0px 0px -20px;
  }
  i{
    font-size: 25px;
    border: 1px solid white;
    border-radius: 100px;
    padding: 6px;
    color:white;
    margin-top: 10px;
  }
}
.bxs-right-arrow-alt{
  font-size: 40px;
  color:blue;
}

.navbar1{
  position: absolute;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 4;
  .nav-buttons {
            display: flex;
            gap: 20px;
            align-items: center;
        }

        .nav-button {
            text-decoration: none;
            color: #fff;
            font-weight: bold;
        }
        .garipKutu{
          width: 50px;
          height: 50px;
          background-color:rgba(25, 165, 225, 0.216);
        }
        .garipKutu2{
          width: 30px;
          height: 30px;
          margin: 0 auto;
          margin-top: 10px;
          background-color:rgb(19, 141, 193);
        }
  .logo img{
    width: 250px;
    padding: 40px 0px 0px 40px;
  }
}
.container1{
  display: flex;
  align-items: stretch;
}
.homeDiv1, .homeDiv2{
  flex: 1;
  margin: 0;
  padding: 0;
}

.homeDiv1 {
  .headerDiv{
    color: hsl(330,14.29%,97.25%);
    font-size: 40px;
    text-align: center;
    font-family: 'Assistant', sans-serif;
    font-family: 'Montserrat Alternates', sans-serif;
    font-family: 'Poppins', sans-serif;
    margin: 200px 240px 19px 0px;
    filter: brightness(1) !important;
  }
  .redirectButton{
    border: 2px solid #0679a2;
    background: none;
    padding: 13px;
    border-radius: 3px;
    color: white;
    font-size: 13.5px;
    margin: 40px 0px 0px 300px !important;
  }
  .headerDiv h1:first-of-type{
    margin-left: -40px;
  }
  // .middle-word{
  //   margin-left: -390px;
  // }
  .headerDiv h1:last-of-type{
    margin-left: 130px;
  }
    height: 100vh;
    background-color: hsl(208.33,85.71%,8.24%);
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
    margin: 0px -350px 0px 0px;
    background-image: url(https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80);
    background-size: cover;
  filter: brightness(0.84);
    background-repeat: no-repeat;
    z-index: 1;
}

.homeDiv2 {
    z-index: -1;
    height: 100vh;
    background-color:blue;
    clip-path: polygon(30% 0, 100% 0, 100% 100%, 0 100%);
    background-image: url(https://images.unsplash.com/photo-1626695840539-a8821cdbcd9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1370&q=80);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.4);
}
</style>
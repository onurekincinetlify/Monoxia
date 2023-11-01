<template>
    <div class="container-l">
        <!-- <h1>Welcome to dashboard {{username}}</h1> -->
        <div class="navbar-container">
            <div class="logo">
                <div class="companyLogo">
                    <img src="../../../public/images/Logo/Logo.svg" alt="Logo">
                    <div class="logo-name">
                        <div class="header"><h1>Blue Deer</h1></div>
                        <div class="subtext"><p>JellyRadar</p></div>
                    </div>
                </div>
                <div class="alerts">
                    <ul>
                        <li><i class='bx bxs-help-circle'></i></li>
                        <li><i class='bx bxs-bell'></i></li>
                    </ul>
                </div>
            </div>
            <div class="profile">
                <div class="userProfile">
                    <div class="userImage">
                        <img src="https://www.coachcarson.com/wp-content/uploads/2018/09/Chad-Profile-pic-circle-300x300.png" alt="Profile">
                    </div>
                    <div class="userInfo">
                        <h2>{{username}}</h2>
                        <h2 style="color:#1ba3d58c;">Yönetici</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="view-container">
            <div class="left-bar">
                <div class="menu-1">
                    <h2>MENU</h2>
                    <ul>
                        <li :class="{activeComp: currentComponent==Home}" @click="currentComponent=Home"><i class='bx bxs-home'></i> Anasayfa</li>
                        <li :class="{activeComp: currentComponent==Wallet}" @click="currentComponent=Wallet"><i class='bx bxs-wallet'></i> Wallet</li>
                        <li><i class='bx bxs-key'></i> Multi-signature</li>
                        <li><i class='bx bx-transfer' ></i> Transaction</li>
                        <li><i class='bx bx-network-chart' ></i> API</li>
                        <li><i class='bx bxs-user-account'></i> Team</li>
                        <li><i class='bx bxs-user-pin' ></i> Me</li>
                    </ul>
                </div>
                <div class="menu-2">
                    <h2>Destek</h2>
                    <ul>
                        <li><i class='bx bxs-info-circle'></i> Yardım</li>
                        <li><i class='bx bxs-contact'></i> İletişim</li>
                    </ul>
                </div>
                <div class="menu-3">
                    <button @click="depremVerisi" class="exitButton">Oturumu Kapat</button>
                </div>
            </div>
            <div class="right-screen">
                    <component :is="currentComponent" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@font-face {
    font-family: modernify;
    src: url(../../public/fonts/Noyh-Regular.ttf);
}

.activeComp{
    color:#edf3f58c;
    margin-left: 10px!important;
}
.notActive{
    color:red;
}
.container-l{
    width: 100%;
    height: 100vh;
    background-color:#13151a;
    font-family: modernify;
}
.navbar-container{
    width: 100%;
    height: 70px;
    max-height: 70px;
    position: relative;
    background-color:#0d0e12;
    border-bottom-color: #0d0e12;
    box-shadow: 0px 0px 8px 1px black;
    display: flex;
    .logo{
        flex: 1;
        display: flex;
        .companyLogo{
            display: flex;
            max-width: 200px;
            flex:1;
            .logo-name{
                display: flex;
                flex: 1;
                flex-direction: column;
                .header{
                    flex: 1;
                    text-align: center;
                    font-size: 23px;
                    min-width: 100px;
                    margin-top: 10px;
                    color:#d1d3d4;
                }
                .subtext{
                    flex: 1;
                    height: 20px;
                    text-align: center;
                    font-size: 18px;
                    margin-top: -17px;
                    color:#1ba3d58c;
                }
            }
            img{
                width: 100px;
                height: 68px;
                padding: 0px 0px 0px 10px;
            }
        }
        .alerts{
            flex:0.9;
            margin-left: 65%;
            border: 2.5px solid transparent;
            border-right-color: #1d1f25;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            ul{
                float:right;
            }
            ul li{
                float: left;
                padding-left: 0px;
                margin-left: 10px;
                margin-right: 10px;
                font-size: 20px;
                display: flex;
                align-items: center;
                cursor: pointer;
                color:#d1d3d4;
            }
        }
    }
    .profile{
        flex: 0.16;
        .userProfile{
    display: flex;
    height: 100%;
    width: 100%;
    margin-left: 10px;
    .userImage{
        flex:0.5;
        width: auto;
        display: flex;
        align-items: center;
        width: 60px;
        img{
            width: 60px;
        }
    }
    .userInfo{
        flex:1;
        width: auto;
        max-width: 150px;
        padding: 10px;
        max-width: 150px;
        height: 100%;
        overflow: hidden;
        overflow-wrap: break-word;
        text-align: center;
        margin-right: 10px;
        color:#d1d3d4;
    }
}
    }
}
.view-container{
    width: 100%;
    height: 89.8vh;
    display: flex;
    .left-bar{
        width: 20%;
        min-width: 190px;
        height: 89.8vh;
        background-color:#121317;
        float: left;
        display: flex;
        flex-direction: column;
        .menu-1{
            margin: 40px 0px 0px 20px;
            flex: 1;
            ul{
                padding-left: 10px;
                margin-top: 10px;
                color: #565759;
                font-size: 18px;
                li{
                    cursor: pointer;
                }
                li:hover{
                    margin-left: 10px;
                    transition: 0.3s ease-in-out margin;
                    color:rgba(255, 255, 255, 0.566);
                }
                li:not(:hover){
                    margin-left: 0px;
                    transition: 0.3s ease-in-out margin;
                }
            }
            h2{
                font-size: 19px;
                color: #6d6e73;
                opacity: 0.4;
            }
        }
        .menu-3{
            margin: 140px 0px 0px 0px;
            flex: 1.4;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            button{
                width: 120px;
                height: 34px;
                border-radius: 10px;
                outline: none;
                border: 2px solid #1ba3d58c;
                background: none;
                color: #1ba3d58c;
                cursor: pointer;
                font-size:15px;
                padding-top: 3.8px;
                font-family: modernify;
            }
        }
        .menu-2{
            margin: 40px 0px 0px 20px;
            flex: 1.4;
            ul{
                padding-left: 10px;
                margin-top: 10px;
                color: #565759;
                font-size: 18px;
                li{
                    cursor: pointer;
                }
                li:hover{
                    margin-left: 10px;
                    transition: 0.3s ease-in-out margin;
                    color:rgba(255, 255, 255, 0.566);
                }
                li:not(:hover){
                    margin-left: 0px;
                    transition: 0.3s ease-in-out margin;
                }
            }
            h2{
                font-size: 19px;
                color: #6d6e73;
                opacity: 0.4;
            }
        }
    }
    .right-screen{
        width: 100%;
        height: 89.8vh;
    }
}
</style>

<script lang="ts" setup>
import Home from './Pages/Home.vue';
import axios from 'axios';
import Wallet from './Pages/Wallet.vue';
import {ref, watch, reactive, shallowRef, onMounted} from 'vue';
const username = 'Onur Ekinci';
const currentComponent = shallowRef(Home);
import http from 'https';

axios.get('https://www.mertsenturk.net/deprem//api/date/01-11-2023').then(e=>{
    console.log(e)
}).catch(err=>{
    console.log(err)
});

const exit = () => {
    alert('ÇIkış yapıldı')
}
</script>
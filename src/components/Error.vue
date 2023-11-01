<template>
    <div id="cover-error">
        <div class="left"></div>
        <div class="right">
            <h1 class="fzf">404</h1>
            <h1 class="description">
                Ah olamaz! Kayboldun.
            </h1>
            <p>Aradığınız sayfa mevcut değil. Buraya gerçekten nasıl geldiğini bilmiyorum. Ancak ana sayfaya dönmek için aşağıdaki butona tıklayabilirsiniz.</p>
            <button><router-link class="redirectToHome" to="/">Ana Sayfa</router-link></button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#cover-error{
    display: flex;
    
}

.right{
    flex: 1;
    width:100vh;
    margin: 160px 0px 0px 40px;
    display: flex;
    justify-content: left;
    flex-direction: column;
    align-items: left;
    font-family: modernify;
    .fzf{
        color:black;
        font-size: 100px;
        padding: 0;
    }
    .description{
        font-size: 30px;
        color:black;
        padding: 0;
    }
    button{
        width: 130px;
        padding: 7px;
        border-radius: 25px;
        outline: none;
        background: none;
        border: 3px solid #18bc5ae6;
        margin-top: 10px;
        .redirectToHome{
            color:rgb(39, 37, 37);
        }
        font-weight: bolder;
        cursor: pointer;
    }
    p{
        color:rgb(46, 45, 45);
        width: 590px;
    }
    background-color:rgba(255,255,255,255);
}
.left{
    flex: 1;
    height: 100vh;
    width:100vh;
    background-position: left;
    background-size: cover;

    background-image: url(../../public/images/alan-sun-19-disasterwarzonew.jpg);
}

@font-face {
    font-family: modernify;
    src: url(../../public/fonts/Noyh-Regular.ttf);
}
</style>
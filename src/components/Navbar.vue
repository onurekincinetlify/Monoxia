<template>
    <div id="monoxia-navbar">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="/images/Logo/Logo.png" width="128">
                </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item">
                <router-link class="monoxia-router" to="/">Home</router-link>
            </a>

            <a class="navbar-item">
                <router-link class="monoxia-router" to="/Docs">Documentation</router-link>
            </a>

      <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link monoxia-router">
                More
            </a>

            <div class="navbar-dropdown">
                <a class="navbar-item">
                    <router-link class="monoxia-router" to="/About">About</router-link>
                </a>
                <a class="navbar-item">
                    <router-link class="monoxia-router" to="/Contact">Contact</router-link>
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                    <router-link class="monoxia-router" to="/Report">Report an issue</router-link>
                </a>
            </div>
        </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <router-link class="monoxia-router" to="/Login">Sign Up</router-link>
          </a>
          <a class="button is-light">
            <router-link class="monoxia-router" to="/Login">Log In</router-link>
          </a>
        </div>
      </div>
    </div>
  </div>    
</nav>
    </div>
</template>


<style lang="scss" scoped>
@import '/public/scss/NavbarStyle.scss';
</style>
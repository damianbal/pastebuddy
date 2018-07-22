<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary border-bottom">
  <a class="navbar-brand" href="#"><i class="fas fa-code"></i> PB</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" :to="{ name: 'home' }">Home</router-link>
      <router-link class="nav-item nav-link" :to="{ name: 'view_all_pastes', params: { page: 0 } }">List</router-link>
      <a v-on:click="showRandom" class="nav-item nav-link" href="#">Random</a>
    </div>
  </div>
</nav>
    <div class="container mt-3 bg-white rounded p-3 border shadow-sm">
      <div class="row">
        <div class="col-12">
              <router-view/>
        </div>
      </div>
    </div>

    <footer class="text-muted mt-3">Powered by Shipla / Developed by DAMIANBAL</footer>
  </div>
</template>

<script>
import ref from "@/api/pastebuddy"
import {Container} from "@/api/shipla-api"

export default {
  methods: {
    showRandom() {
      Container.container(ref).getAllItems(items => {
        let count = items.length

        let r = Math.floor(Math.random() * count)

        let item = items[r]

        this.$router.push({name: 'view_paste', params: { reference: item.meta.ref }})
      })
    }
  }
}
</script>


<style>
body {
  background: url(./assets/bg.png);
}
#app {
  /*
  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
